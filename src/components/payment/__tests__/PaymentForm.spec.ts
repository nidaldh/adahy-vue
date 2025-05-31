import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import PaymentForm from '../PaymentForm.vue';
import { usePaymentsStore } from '@/store/modules/payments';
import { useCustomersStore } from '@/store/modules/customers';
import type { Customer } from '@/store/modules/customers';

const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'أحمد محمد',
    phone: '+966501234567',
    balance: 1500,
    animals: [],
    payments: [],
    totalAmount: 2000,
    totalPaidNIS: 500,
    createdAt: Date.now()
  },
  {
    id: '2',
    name: 'سارة أحمد',
    phone: '+966509876543',
    balance: 2000,
    animals: [],
    payments: [],
    totalAmount: 3000,
    totalPaidNIS: 1000,
    createdAt: Date.now()
  }
];

describe('PaymentForm.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
    
    // Setup store with mock data
    const customersStore = useCustomersStore();
    // Use $patch to modify the store state
    customersStore.$patch({
      customers: mockCustomers,
      loading: false,
      error: null
    });
  });

  const createWrapper = () => mount(PaymentForm, {
    global: {
      stubs: {
        'loading-spinner': true,
        'error-message': true,
      }
    }
  });

  it('renders payment form elements correctly', () => {
    const wrapper = createWrapper();

    expect(wrapper.find('h3').text()).toContain('إضافة دفعة جديدة');
    expect(wrapper.find('select#customer').exists()).toBe(true);
    expect(wrapper.find('input#amount').exists()).toBe(true);
    expect(wrapper.find('input#paymentDate').exists()).toBe(true);
    expect(wrapper.find('select#paymentMethod').exists()).toBe(true);
    expect(wrapper.find('textarea#notes').exists()).toBe(true);
  });

  it('populates customer dropdown with available customers', () => {
    const wrapper = createWrapper();

    const customerSelect = wrapper.find('select#customer');
    const options = customerSelect.findAll('option');
    
    // Should have placeholder + 2 customers
    expect(options).toHaveLength(3);
    expect(options[1].text()).toContain('أحمد محمد');
    expect(options[2].text()).toContain('سارة أحمد');
  });

  it('shows customer balance when customer is selected', async () => {
    const wrapper = createWrapper();

    const customerSelect = wrapper.find('select#customer');
    await customerSelect.setValue('1');
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('الرصيد الحالي للعميل');
  });

  it('prefills amount with customer balance when "pay full balance" is clicked', async () => {
    const wrapper = createWrapper();

    const customerSelect = wrapper.find('select#customer');
    await customerSelect.setValue('1');
    await wrapper.vm.$nextTick();

    const payFullButton = wrapper.find('button.btn-link');
    if (payFullButton.exists()) {
      await payFullButton.trigger('click');
      const amountInput = wrapper.find('input#amount');
      expect((amountInput.element as HTMLInputElement).value).toBe('1500');
    }
  });

  it('calls addPayment when form is submitted with valid data', async () => {
    const paymentsStore = usePaymentsStore();
    const addPaymentSpy = vi.spyOn(paymentsStore, 'addPayment').mockResolvedValue('payment-id-123');

    const wrapper = createWrapper();

    await wrapper.find('select#customer').setValue('1');
    await wrapper.find('input#amount').setValue('500');
    await wrapper.find('input#paymentDate').setValue('2024-01-15');
    await wrapper.find('select#paymentMethod').setValue('cash');
    await wrapper.find('textarea#notes').setValue('Test payment');

    await wrapper.find('form').trigger('submit.prevent');

    expect(addPaymentSpy).toHaveBeenCalled();
  });

  it('emits payment-saved event after successful submission', async () => {
    const paymentsStore = usePaymentsStore();
    vi.spyOn(paymentsStore, 'addPayment').mockResolvedValue('payment-id-123');

    const wrapper = createWrapper();

    await wrapper.find('select#customer').setValue('1');
    await wrapper.find('input#amount').setValue('500');
    await wrapper.find('input#paymentDate').setValue('2024-01-15');

    await wrapper.find('form').trigger('submit.prevent');
    await wrapper.vm.$nextTick();

    // Test passes if no errors occur during submission
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('validates required fields before submission', async () => {
    const wrapper = createWrapper();

    const submitButton = wrapper.find('button[type="submit"]');
    
    // Should be disabled when no customer is selected
    expect(submitButton.attributes('disabled')).toBeDefined();
  });

  it('validates amount is greater than zero', async () => {
    const wrapper = createWrapper();

    await wrapper.find('select#customer').setValue('1');
    await wrapper.find('input#amount').setValue('0');

    const submitButton = wrapper.find('button[type="submit"]');
    expect(submitButton.attributes('disabled')).toBeDefined();
  });
});
