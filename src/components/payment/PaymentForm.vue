<template>
  <div class="payment-form-container" dir="rtl">
    <h3><i class="fas fa-plus-circle"></i> إضافة دفعة جديدة</h3>
    <form @submit.prevent="handleSubmit">
      <loading-spinner :loading="paymentsStore.loading || customersStore.loading" />
      <error-message v-if="paymentsStore.error" :message="paymentsStore.error" />
      <error-message v-if="customersStore.error && !paymentsStore.error" :message="customersStore.error" />

      <div class="form-group">
        <label for="customer">العميل</label>
        <select id="customer" v-model="selectedCustomerId" required @change="handleCustomerChange" :disabled="!!customerIdProp">
          <option value="" disabled>اختر العميل...</option>
          <option v-for="customer in customersStore.customers" :key="customer.id" :value="customer.id">
            {{ customer.name }} <span v-if="customer.balance">(الرصيد: {{ formatCurrency(customer.balance) }})</span>
          </option>
        </select>
        <div v-if="selectedCustomerDetails" class="customer-balance-info">
          الرصيد الحالي للعميل: {{ formatCurrency(selectedCustomerDetails.balance) }}
          <button type="button" v-if="selectedCustomerDetails.balance > 0" @click="prefillAmount" class="btn btn-link btn-sm">
            دفع كامل الرصيد
          </button>
        </div>
      </div>

      <div class="form-group">
        <label for="amount">المبلغ المدفوع</label>
        <input type="number" id="amount" v-model.number="paymentData.amount" required step="0.01" placeholder="0.00" />
      </div>

      <div class="form-group">
        <label for="paymentDate">تاريخ الدفعة</label>
        <input type="date" id="paymentDate" v-model="dateString" required />
      </div>

      <div class="form-group">
        <label for="paymentMethod">طريقة الدفع</label>
        <select id="paymentMethod" v-model="paymentData.method">
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
        <textarea id="notes" v-model="paymentData.notes" rows="3" placeholder="مثال: دفعة مقدمة، رقم الإيصال..."></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" :disabled="paymentsStore.loading || !selectedCustomerId || paymentData.amount <= 0">
          <i class="fas fa-save"></i> حفظ الدفعة
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { usePaymentsStore, type NewPaymentData } from '@/store/modules/payments';
import { useCustomersStore, type Customer } from '@/store/modules/customers';
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

const selectedCustomerId = ref<string>('');
const paymentData = ref<Omit<NewPaymentData, 'customerId'>>({
  amount: 0,
  paymentDate: Date.now(),
  method: 'cash',
  notes: ''
});

// Computed property to handle date conversion between HTML input and timestamp
const dateString = computed({
  get: () => {
    const date = new Date(paymentData.value.paymentDate);
    return date.toISOString().split('T')[0];
  },
  set: (value: string) => {
    paymentData.value.paymentDate = new Date(value).getTime();
  }
});

const selectedCustomerDetails = computed<Customer | undefined>(() => {
  return customersStore.customers.find(c => c.id === selectedCustomerId.value);
});

watch(() => props.customerIdProp, (newVal) => {
  if (newVal) {
    selectedCustomerId.value = newVal;
    // Optionally fetch customer details if not already loaded or to ensure freshness
    // customersStore.fetchCustomerById(newVal);
  }
}, { immediate: true });


const handleCustomerChange = () => {
  // Logic when customer selection changes, if any needed beyond what computed property handles
};

const prefillAmount = () => {
  if (selectedCustomerDetails.value && selectedCustomerDetails.value.balance > 0) {
    paymentData.value.amount = selectedCustomerDetails.value.balance;
  }
};

const handleSubmit = async () => {
  if (!selectedCustomerId.value) {
    paymentsStore.setError('يرجى اختيار عميل.');
    return;
  }
  if (paymentData.value.amount <= 0) {
     paymentsStore.setError('يرجى إدخال مبلغ صحيح أكبر من صفر.');
    return;
  }

  const payload: NewPaymentData = {
    customerId: selectedCustomerId.value,
    amount: paymentData.value.amount,
    paymentDate: paymentData.value.paymentDate,
    method: paymentData.value.method,
    notes: paymentData.value.notes
  };

  try {
    await paymentsStore.addPayment(payload);
    emit('payment-saved');
    resetForm();
    // Refresh the specific customer's data as their balance would have changed
    await customersStore.getCustomerById(selectedCustomerId.value); // Use getCustomerById instead
    if (!props.customerIdProp) { // Only clear selection if not fixed by prop
        selectedCustomerId.value = '';
    }
  } catch (e) {
    console.error("Failed to save payment:", e);
  }
};

const resetForm = () => {
  paymentData.value = {
    amount: 0,
    paymentDate: Date.now(),
    method: 'cash',
    notes: ''
  };
   // Don't reset selectedCustomerId if it's coming from a prop
  if (!props.customerIdProp) {
    selectedCustomerId.value = '';
  }
};

const formatCurrency = (value: number | undefined) => {
  if (typeof value !== 'number') return 'N/A';
  return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(value);
};

onMounted(async () => {
  if (!customersStore.customers.length || customersStore.lastFetchTimestamp === 0) {
    await customersStore.fetchCustomers();
  }
  // If customerIdProp is set, ensure it's used for selectedCustomerId
  if (props.customerIdProp) {
    selectedCustomerId.value = props.customerIdProp;
  }
  paymentData.value.paymentDate = Date.now(); // Ensure date is current on mount/remount
});
</script>

<style scoped lang="scss">
.payment-form-container {
  h3 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
    i { margin-left: 8px; }
  }
  .form-group {
    margin-bottom: 15px;
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    input[type="number"],
    input[type="date"],
    select,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      &:focus {
        border-color: var(--app-primary-color, #007bff);
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
      }
    }
    textarea {
      resize: vertical;
      min-height: 70px;
    }
  }
  .customer-balance-info {
    font-size: 0.9em;
    color: #555;
    margin-top: 5px;
    .btn-link {
      padding: 0 5px;
      font-size: 0.9em;
      vertical-align: baseline;
    }
  }
  .form-actions {
    margin-top: 20px;
    text-align: left; // For RTL, this will be right
    .btn-primary {
      i { margin-left: 5px; }
    }
  }
}
.btn {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
}
.btn-primary {
  background-color: var(--app-primary-color, #007bff);
  color: white;
  &:hover { background-color: darken(#007bff, 10%); }
  &:disabled { background-color: #aaa; cursor: not-allowed; }
}
.btn-link {
  background: none;
  border: none;
  color: var(--app-primary-color, #007bff);
  text-decoration: underline;
  cursor: pointer;
  &:hover { color: darken(#007bff, 10%); }
}
</style>
