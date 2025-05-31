<template>
  <div class="payment-form-container" dir="rtl">
    <h3><i class="fas fa-plus-circle"></i> إضافة دفعة جديدة</h3>
    <form @submit.prevent="handleSubmit">
      <loading-spinner :loading="customersStore.loading" />
      <error-message v-if="formError" :message="formError" />

      <div class="form-group">
        <label for="customer">العميل</label>
        <select id="customer" v-model="selectedCustomerId" required @change="handleCustomerChange" :disabled="!!customerIdProp">
          <option value="" disabled>اختر العميل...</option>
          <option v-for="customer in customersStore.customers" :key="customer.id" :value="customer.id">
            {{ customer.name }} <span v-if="customer.balance !== undefined">(الرصيد: {{ formatCurrency(customer.balance, 'NIS') }})</span>
          </option>
        </select>
        <div v-if="selectedCustomerDetails && selectedCustomerDetails.balance !== undefined" class="customer-balance-info">
          الرصيد الحالي للعميل: {{ formatCurrency(selectedCustomerDetails.balance, 'NIS') }}
          <button type="button" v-if="selectedCustomerDetails.balance > 0" @click="prefillAmountWithBalance" class="btn btn-link btn-sm">
            دفع كامل الرصيد
          </button>
        </div>
      </div>

      <!-- Multi-currency payment fields -->
      <div class="form-group">
        <label for="paymentAmount">المبلغ</label>
        <input type="number" id="paymentAmount" v-model.number="paymentFields.amount" required step="any" placeholder="0.00" />
      </div>

      <div class="form-group">
        <label for="paymentCurrency">العملة</label>
        <select id="paymentCurrency" v-model="paymentFields.currency" @change="handleCurrencyChange">
          <option value="NIS">شيكل (NIS)</option>
          <option value="JOD">دينار أردني (JOD)</option>
          <option value="USD">دولار أمريكي (USD)</option>
        </select>
      </div>

      <div class="form-group" v-if="paymentFields.currency === 'JOD' || paymentFields.currency === 'USD'">
        <label for="paymentNisEquivalent">المقابل بالشيكل <span class="required-star">*</span></label>
        <input type="number" id="paymentNisEquivalent" v-model.number="paymentFields.nisEquivalent" required step="any" placeholder="0.00" />
      </div>
      <!-- End multi-currency -->

      <div class="form-group">
        <label for="paymentDate">تاريخ الدفعة</label>
        <input type="date" id="paymentDate" v-model="dateString" required />
      </div>

      <div class="form-group">
        <label for="paymentMethod">طريقة الدفع</label>
        <select id="paymentMethod" v-model="paymentFields.method">
          <option value="cash">نقداً</option>
          <option value="bank_transfer">تحويل بنكي</option>
          <option value="card">بطاقة ائتمان/خصم</option>
          <option value="online">دفع إلكتروني</option>
          <option value="cheque">شيك</option>
          <option value="other">أخرى</option>
        </select>
      </div>

      <div class="form-group">
        <label for="notes">ملاحظات (اختياري)</label>
        <textarea id="notes" v-model="paymentFields.notes" rows="3" placeholder="مثال: دفعة مقدمة، رقم الإيصال..."></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" :disabled="customersStore.loading || !selectedCustomerId || paymentFields.amount <= 0">
          <i class="fas fa-save"></i> حفظ الدفعة
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { usePaymentsStore, type NewPaymentData, type StoredPayment } from '@/store/modules/payments';
import { useCustomersStore, type Customer, type PaymentDetail } from '@/store/modules/customers';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';

const props = defineProps({
  customerIdProp: {
    type: String as () => string | null,
    default: null
  }
});

const paymentsStore = usePaymentsStore();
const customersStore = useCustomersStore();
const emit = defineEmits(['payment-saved']);

const formError = ref<string | null>(null);
const currentError = computed(() => formError.value || paymentsStore.error); // Combine local and store errors

const selectedCustomerId = ref<string>('');

const paymentFields = ref<{
  amount: number;
  currency: 'NIS' | 'JOD' | 'USD';
  nisEquivalent?: number;
  paymentDate: number; 
  method: string;
  notes: string;
}>({
  amount: 0,
  currency: 'NIS',
  nisEquivalent: undefined,
  paymentDate: Date.now(),
  method: 'cash',
  notes: ''
});

// Computed property to handle date conversion between HTML input and timestamp
const dateString = computed({
  get: () => {
    const date = new Date(paymentFields.value.paymentDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
  },
  set: (value: string) => {
    if (value) {
      paymentFields.value.paymentDate = new Date(value).getTime();
    } else {
      paymentFields.value.paymentDate = Date.now(); // Default to now if cleared
    }
  }
});

const selectedCustomerDetails = computed<Customer | undefined>(() => {
  // Ensure we are getting the customer from the store's list, which should be up-to-date
  return customersStore.customers.find(c => c.id === selectedCustomerId.value);
});

watch(() => props.customerIdProp, (newVal) => {
  if (newVal) {
    selectedCustomerId.value = newVal;
    if (!customersStore.customers.find(c => c.id === newVal)) {
      customersStore.fetchCustomerById(newVal); 
    }
  }
}, { immediate: true });


const handleCustomerChange = () => {
  formError.value = null;
  paymentsStore.clearError();
  if (selectedCustomerId.value && !customersStore.customers.find(c => c.id === selectedCustomerId.value)){
    customersStore.fetchCustomerById(selectedCustomerId.value);
  }
};

const prefillAmountWithBalance = () => {
  if (selectedCustomerDetails.value && selectedCustomerDetails.value.balance !== undefined && selectedCustomerDetails.value.balance > 0) {
    paymentFields.value.amount = selectedCustomerDetails.value.balance;
    paymentFields.value.currency = 'NIS';
    paymentFields.value.nisEquivalent = undefined; // NIS doesn't need equivalent
    formError.value = null;
    paymentsStore.clearError();
  } else if (selectedCustomerDetails.value && selectedCustomerDetails.value.balance !== undefined && selectedCustomerDetails.value.balance <= 0) {
    formError.value = "الرصيد الحالي للعميل هو صفر أو مدين.";
  } else if (!selectedCustomerDetails.value) {
    formError.value = "يرجى اختيار عميل أولاً.";
  }
};

const handleCurrencyChange = () => {
  if (paymentFields.value.currency === 'NIS') {
    paymentFields.value.nisEquivalent = undefined; // Clear if NIS
  } else {
    // For JOD or USD, prompt user by clearing (or could attempt a default conversion if an API was available)
    paymentFields.value.nisEquivalent = undefined; 
  }
  formError.value = null;
  paymentsStore.clearError();
};

const generateUniqueId = () => {
  // More robust unique ID generation
  return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`;
}

const handleSubmit = async () => {
  formError.value = null;
  paymentsStore.clearError();

  if (!selectedCustomerId.value) {
    formError.value = 'يرجى اختيار عميل.';
    return;
  }
  if (paymentFields.value.amount <= 0) {
    formError.value = 'يرجى إدخال مبلغ صحيح أكبر من صفر.';
    return;
  }
  if ((paymentFields.value.currency === 'JOD' || paymentFields.value.currency === 'USD') && 
      (!paymentFields.value.nisEquivalent || paymentFields.value.nisEquivalent <= 0)) {
    formError.value = 'يرجى إدخال قيمة المقابل بالشيكل للعملات الأجنبية (يجب أن تكون أكبر من صفر).';
    return;
  }

  try {
    // Ensure the customer data is fresh, especially if it wasn't fetched recently
    // The customersStore.getCustomerById is a getter, use fetchCustomerById for network request
    await customersStore.fetchCustomers();
    const customer = customersStore.getCustomerById(selectedCustomerId.value); // Now get the (potentially updated) customer

    if (!customer) {
      formError.value = 'لم يتم العثور على العميل. قد يكون قد تم حذفه أو هناك مشكلة في استرجاع البيانات.';
      return;
    }

    // 1. Create PaymentDetail for the customer's payments array
    const newPaymentDetail: PaymentDetail = {
      id: generateUniqueId(),
      parts: [{
        id: generateUniqueId(),
        amount: paymentFields.value.amount,
        currency: paymentFields.value.currency,
        nisEquivalent: paymentFields.value.currency === 'NIS' 
          ? paymentFields.value.amount  // For NIS, use amount as nisEquivalent
          : (paymentFields.value.nisEquivalent || 0) // For other currencies, use provided value or 0
      }],
      totalTransactionNIS: paymentFields.value.currency === 'NIS' 
        ? paymentFields.value.amount 
        : (paymentFields.value.nisEquivalent || 0),
      paymentDate: paymentFields.value.paymentDate,
      method: paymentFields.value.method as any,
      notes: paymentFields.value.notes?.trim() || '-' // Set notes to '-' if empty or null
    };

    // 2. Update customer with the new payment detail
    // Ensure customer.payments is an array before spreading
    const existingPayments = Array.isArray(customer.payments) ? customer.payments : [];
    const updatedPaymentsArray = [...existingPayments, newPaymentDetail];
    
    // The updateCustomer action in customersStore should handle recalculating totalPaidNIS and balance
    await customersStore.updateCustomer({ id: customer.id, payments: updatedPaymentsArray });

    // 3. Log the payment in the payments store (historical log)
    const paymentLogEntry: NewPaymentData = {
      customerId: selectedCustomerId.value,
      amount: paymentFields.value.amount,
      currency: paymentFields.value.currency,
      nisEquivalent: paymentFields.value.currency === 'NIS' 
        ? paymentFields.value.amount 
        : (paymentFields.value.nisEquivalent || 0),
      paymentDate: paymentFields.value.paymentDate,
      method: paymentFields.value.method as 'cash' | 'bank_transfer' | 'card' | 'online' | 'cheque' | 'other',
      notes: paymentFields.value.notes?.trim() || '-', // Set notes to '-' if empty or null
      originalPaymentDetailId: newPaymentDetail.id, // Link to the payment detail in customer object
    };
    await paymentsStore.addPayment(paymentLogEntry);

    emit('payment-saved');
    resetForm();
    // The customer list in the store is updated by updateCustomer.
    // The PaymentManagementPage will listen for 'payment-saved' and can refresh PaymentHistory.

  } catch (e: any) {
    console.error("Failed to save payment:", e);
    formError.value = e.message || 'حدث خطأ أثناء حفظ الدفعة. يرجى المحاولة مرة أخرى.';
  }
};

const resetForm = () => {
  paymentFields.value = {
    amount: 0,
    currency: 'NIS',
    nisEquivalent: undefined,
    paymentDate: Date.now(),
    method: 'cash',
    notes: ''
  };
  // dateString is computed and will update automatically.
  formError.value = null;
  paymentsStore.clearError();
  
  if (!props.customerIdProp) {
    selectedCustomerId.value = '';
  }
};

const formatCurrency = (value: number | undefined, currency: string = 'NIS') => {
  if (typeof value !== 'number') return 'N/A';
  const locale = currency === 'NIS' ? 'he-IL' : (currency === 'JOD' ? 'ar-JO' : 'en-US');
  return new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

onMounted(async () => {
  // Fetch all customers if not already loaded or if the list is stale
  if (!customersStore.customers.length || customersStore.lastFetchTimestamp === 0) { // Add staleness check if needed
    await customersStore.fetchCustomers();
  }
  
  // If customerIdProp is provided, select it and ensure its details are loaded for balance display & prefill
  if (props.customerIdProp) {
    selectedCustomerId.value = props.customerIdProp;
    // Fetch if not in the list or if details might be stale
    if (!customersStore.customers.find(c => c.id === props.customerIdProp) || 
        (customersStore.customers.find(c => c.id === props.customerIdProp) && 
         customersStore.customers.find(c => c.id === props.customerIdProp)?.balance === undefined)) {
      await customersStore.fetchCustomerById(props.customerIdProp);
    }
  }
  
  // Set initial paymentDate. dateString computed property will reflect this.
  paymentFields.value.paymentDate = Date.now();
});

</script>

<style scoped lang="scss">
.payment-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
    display: flex;
    align-items: center;

    i {
      margin-left: 0.5rem;
      color: #007bff;
    }
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #333;
    }

    input[type="text"],
    input[type="number"],
    input[type="date"],
    select,
    textarea {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      color: #333;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 0.375rem;
      transition: border-color 0.2s;

      &:focus {
        border-color: #007bff;
        outline: none;
      }
    }

    .required-star {
      color: red;
      font-size: 0.875rem;
      margin-right: 0.25rem;
    }

    .customer-balance-info {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #555;
    }
  }

  .form-actions {
    text-align: right;

    .btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 0.375rem;
      transition: background-color 0.2s, transform 0.2s;

      &.btn-primary {
        background-color: #007bff;
        color: #fff;
        border: none;

        &:hover {
          background-color: #0056b3;
          transform: translateY(-1px);
        }

        &:disabled {
          background-color: #007bff;
          opacity: 0.65;
          cursor: not-allowed;
        }
      }
    }
  }

  /* Spinner and error message styles */
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .error-message {
    color: red;
    margin-top: 1rem;
    font-size: 0.875rem;
    text-align: center;
  }
}
</style>
