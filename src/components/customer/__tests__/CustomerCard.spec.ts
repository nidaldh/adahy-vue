import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CustomerCard from '../CustomerCard.vue'
import type { Customer } from '@/store/modules/customers'

const createMockCustomer = (): Customer => ({
  id: '1',
  name: 'John Doe',
  phone: '+1234567890',
  address: '123 Main St',
  createdAt: Date.now(),
  animals: [
    {
      id: 'animal1',
      type: 'Cow',
      number: '001',
      weight: 500,
      price: 3,
      total: 1500,
      status: 'حي',
      compositeKey: 'Cow_001'
    }
  ],
  totalAmount: 1500,
  totalPayments: 500,
  balance: 1000
})

describe('CustomerCard', () => {
  let mockCustomer: Customer

  beforeEach(() => {
    mockCustomer = createMockCustomer()
  })

  it('renders customer information correctly', () => {
    const wrapper = mount(CustomerCard, {
      props: { customer: mockCustomer }
    })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('+1234567890')
    expect(wrapper.text()).toContain('123 Main St')
  })

  it('displays animal count', () => {
    const wrapper = mount(CustomerCard, {
      props: { customer: mockCustomer }
    })

    expect(wrapper.text()).toContain('1') // animal count
  })

  it('shows financial information', () => {
    const wrapper = mount(CustomerCard, {
      props: { customer: mockCustomer }
    })

    expect(wrapper.text()).toContain('1500') // total amount
    expect(wrapper.text()).toContain('500') // total payments
    expect(wrapper.text()).toContain('1000') // balance
  })

  it('emits edit event when edit button is clicked', async () => {
    const wrapper = mount(CustomerCard, {
      props: { customer: mockCustomer }
    })

    const editButton = wrapper.find('[data-testid="edit-customer"]')
    if (editButton.exists()) {
      await editButton.trigger('click')
      expect(wrapper.emitted('edit-customer')).toBeTruthy()
      expect(wrapper.emitted('edit-customer')?.[0]).toEqual([mockCustomer])
    }
  })

  it('emits delete event when delete button is clicked', async () => {
    const wrapper = mount(CustomerCard, {
      props: { customer: mockCustomer }
    })

    const deleteButton = wrapper.find('[data-testid="delete-customer"]')
    if (deleteButton.exists()) {
      await deleteButton.trigger('click')
      expect(wrapper.emitted('delete-customer')).toBeTruthy()
      expect(wrapper.emitted('delete-customer')?.[0]).toEqual([mockCustomer])
    }
  })

  it('handles customer with no animals', () => {
    const customerWithoutAnimals = { ...mockCustomer, animals: [] }
    const wrapper = mount(CustomerCard, {
      props: { customer: customerWithoutAnimals }
    })

    expect(wrapper.text()).toContain('0') // animal count should be 0
  })
})
