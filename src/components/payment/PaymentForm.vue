<template>
  <div class="payment-form-container" dir="rtl">
    <!-- Removed duplicate title: <h3><i class="fas fa-plus-circle"></i> إضافة دفعة جديدة</h3> -->
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
          <span v-if="selectedCustomerDetails.balance > 0">
            الدين الحالي على العميل: {{ formatCurrency(selectedCustomerDetails.balance, 'NIS') }} (دين على العميل)
          </span>
          <span v-else-if="selectedCustomerDetails.balance < 0">
            الرصيد الزائد للعميل: {{ formatCurrency(Math.abs(selectedCustomerDetails.balance), 'NIS') }} (رصيد زائد للعميل)
          </span>
          <span v-else>
            الرصيد: {{ formatCurrency(0, 'NIS') }} (خالص)
          </span>
          <button type="button" v-if="selectedCustomerDetails.balance > 0 && paymentEntries.length > 0" @click="prefillAmountWithBalance" class="btn btn-link btn-sm" style="margin-right: 5px;">
            دفع كامل الدين (لأول بند)
          </button>
        </div>
      </div>

      <!-- Payment Entries -->
      <div v-for="(entry, index) in paymentEntries" :key="entry.id" class="payment-entry-row">
        <h4><i class="fas fa-money-bill-wave"></i> بند الدفعة #{{ index + 1 }}</h4>
        <div class="form-row">
          <div class="form-group amount-group">
            <label :for="'paymentAmount-' + entry.id">المبلغ</label>
            <input type="number" :id="'paymentAmount-' + entry.id" v-model.number="entry.amount" required step="any" placeholder="0.00" />
          </div>

          <div class="form-group currency-group">
            <label :for="'paymentCurrency-' + entry.id">العملة</label>
            <select :id="'paymentCurrency-' + entry.id" v-model="entry.currency" @change="handleCurrencyChange(entry)">
              <option value="NIS">شيكل (NIS)</option>
              <option value="JOD">دينار أردني (JOD)</option>
              <option value="USD">دولار أمريكي (USD)</option>
            </select>
          </div>
        </div>

        <div class="form-group nis-equivalent-group" v-if="entry.currency === 'JOD' || entry.currency === 'USD'">
          <label :for="'paymentNisEquivalent-' + entry.id">المقابل بالشيكل <span class="required-star">*</span></label>
          <input type="number" :id="'paymentNisEquivalent-' + entry.id" v-model.number="entry.nisEquivalent" required step="any" placeholder="0.00" />
        </div>

        <div class="form-group">
          <label :for="'paymentMethod-' + entry.id">طريقة الدفع للبند</label>
          <select :id="'paymentMethod-' + entry.id" v-model="entry.method">
            <option v-for="meth in ALLOWED_PAYMENT_METHODS" :key="meth" :value="meth">{{ meth }}</option> 
            <!-- Populating options dynamically based on ALLOWED_PAYMENT_METHODS -->
            <!-- Original options can be kept if preferred, but ensure values match PaymentMethod type -->
            <!-- 
            <option value="cash">نقداً</option>
            <option value="bank_transfer">تحويل بنكي</option>
            <option value="card">بطاقة ائتمان/خصم</option>
            <option value="online">دفع إلكتروني</option>
            <option value="cheque">شيك</option>
            <option value="other">أخرى</option>
            -->
          </select>
        </div>

        <button type="button" @click="removePaymentEntry(entry.id)" v-if="paymentEntries.length > 1" class="btn btn-danger btn-sm remove-entry-btn">
          <i class="fas fa-trash"></i> إزالة هذا البند
        </button>
      </div>

      <button type="button" @click="addPaymentEntry" class="btn btn-success btn-sm add-entry-btn">
        <i class="fas fa-plus"></i> إضافة بند دفع آخر
      </button>
      <!-- End Payment Entries -->

      <hr class="section-divider">

      <h4><i class="fas fa-calendar-alt"></i> تفاصيل المعاملة العامة</h4>
      <div class="form-group">
        <label for="paymentDate">تاريخ الدفعة</label>
        <input type="date" id="paymentDate" v-model="dateString" required />
      </div>

      <div class="form-group">
        <label for="notes">ملاحظات (اختياري للمعاملة)</label>
        <textarea id="notes" v-model="paymentTransactionDetails.notes" rows="3" placeholder="مثال: دفعة مقدمة، رقم الإيصال..."></textarea>
      </div>

      <!-- Payment Summary -->
      <div v-if="totalPaymentAmount > 0" class="payment-summary">
        <h4>ملخص الدفعة الإجمالي:</h4>
        <p v-for="currencyTotal in currencySpecificTotals" :key="currencyTotal.currency">
          إجمالي ({{ currencyTotal.currency }}): {{ formatCurrency(currencyTotal.total, currencyTotal.currency) }}
        </p>
        <p class="total-nis-equivalent">
          <strong>الإجمالي الكلي المدفوع (المقابل بالشيكل): {{ formatCurrency(paymentSummaryTotalNIS, 'NIS') }}</strong>
        </p>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" :disabled="isSubmitDisabled">
          <i class="fas fa-save"></i> حفظ الدفعة
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
// Removed StoredPayment as it's unused
import { usePaymentsStore, type NewPaymentData } from '@/store/modules/payments'; 
import { useCustomersStore, type Customer, type PaymentDetail, type PaymentPart } from '@/store/modules/customers';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';
import { nanoid } from 'nanoid'; // For generating unique IDs for entries

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

const selectedCustomerId = ref<string>('');

// Define the allowed payment methods as a const array / union type
const ALLOWED_PAYMENT_METHODS = ['cash', 'bank_transfer', 'card', 'online', 'cheque', 'other'] as const;
type PaymentMethod = typeof ALLOWED_PAYMENT_METHODS[number];

interface PaymentEntry {
  id: string;
  amount: number | null;
  currency: 'NIS' | 'JOD' | 'USD';
  nisEquivalent?: number | null;
  method: PaymentMethod; // Use the defined PaymentMethod type
}

const createNewPaymentEntry = (): PaymentEntry => ({
  id: nanoid(),
  amount: null,
  currency: 'NIS',
  nisEquivalent: undefined,
  method: 'cash', // Default method for new entries, conforms to PaymentMethod
});

const paymentEntries = ref<PaymentEntry[]>([createNewPaymentEntry()]);

const paymentTransactionDetails = ref<{
  paymentDate: number;
  // method: string; // Removed common method
  notes: string;
}>({
  paymentDate: Date.now(),
  // method: 'cash', // Removed common method
  notes: ''
});

const dateString = computed({
  get: () => {
    const date = new Date(paymentTransactionDetails.value.paymentDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  set: (value: string) => {
    if (value) {
      paymentTransactionDetails.value.paymentDate = new Date(value).getTime();
    } else {
      paymentTransactionDetails.value.paymentDate = Date.now();
    }
  }
});

const totalPaymentAmount = computed(() => {
  return paymentEntries.value.reduce((sum, entry) => sum + (entry.amount || 0), 0);
});

const paymentSummaryTotalNIS = computed(() => {
  return paymentEntries.value.reduce((sum, entry) => {
    const amountInNIS = entry.currency === 'NIS' ? (entry.amount || 0) : (entry.nisEquivalent || 0);
    return sum + amountInNIS;
  }, 0);
});

const currencySpecificTotals = computed(() => {
  const totals: { [key: string]: number } = { NIS: 0, JOD: 0, USD: 0 };
  paymentEntries.value.forEach(entry => {
    if (entry.amount && entry.currency) {
      totals[entry.currency] += entry.amount;
    }
  });
  return Object.entries(totals)
    .filter(([, total]) => total > 0)
    .map(([currency, total]) => ({ currency, total }));
});


const selectedCustomerDetails = computed<Customer | undefined>(() => {
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
  if (selectedCustomerId.value && !customersStore.customers.find(c => c.id === selectedCustomerId.value)) {
    customersStore.fetchCustomerById(selectedCustomerId.value);
  }
};

const prefillAmountWithBalance = () => {
  if (selectedCustomerDetails.value && selectedCustomerDetails.value.balance !== undefined && selectedCustomerDetails.value.balance > 0 && paymentEntries.value.length > 0) {
    const firstEntry = paymentEntries.value[0];
    firstEntry.amount = selectedCustomerDetails.value.balance;
    firstEntry.currency = 'NIS';
    firstEntry.nisEquivalent = undefined;
    formError.value = null;
    paymentsStore.clearError();
  } else if (selectedCustomerDetails.value && selectedCustomerDetails.value.balance !== undefined && selectedCustomerDetails.value.balance <= 0) {
    formError.value = "الرصيد الحالي للعميل هو صفر أو مدين.";
  } else if (!selectedCustomerDetails.value) {
    formError.value = "يرجى اختيار عميل أولاً.";
  }
};

const handleCurrencyChange = (entry: PaymentEntry) => {
  if (entry.currency === 'NIS') {
    entry.nisEquivalent = undefined;
  } else {
    entry.nisEquivalent = undefined; // Or attempt conversion if API available
  }
  formError.value = null;
  paymentsStore.clearError();
};

const addPaymentEntry = () => {
  paymentEntries.value.push(createNewPaymentEntry());
};

const removePaymentEntry = (id: string) => {
  paymentEntries.value = paymentEntries.value.filter(entry => entry.id !== id);
  if (paymentEntries.value.length === 0) { // Ensure at least one entry, though UI prevents this
    addPaymentEntry();
  }
};

const isSubmitDisabled = computed(() => {
  return customersStore.loading ||
         !selectedCustomerId.value ||
         paymentEntries.value.length === 0 ||
         paymentEntries.value.every(entry => !entry.amount || entry.amount <= 0) ||
         paymentEntries.value.some(entry => 
           (entry.currency === 'JOD' || entry.currency === 'USD') && 
           (!entry.nisEquivalent || entry.nisEquivalent <= 0)
         );
});

const handleSubmit = async () => {
  formError.value = null;
  paymentsStore.clearError();

  if (!selectedCustomerId.value) {
    formError.value = 'يرجى اختيار عميل.';
    return;
  }

  if (paymentEntries.value.length === 0 || paymentEntries.value.every(e => !(e.amount && e.amount > 0))) {
    formError.value = 'يرجى إدخال مبلغ صحيح واحد على الأقل (أكبر من صفر).';
    return;
  }

  for (const entry of paymentEntries.value) {
    if (!entry.amount || entry.amount <= 0) {
      formError.value = `بند الدفعة بمبلغ ${entry.amount || 'فارغ'} غير صالح. يجب أن يكون المبلغ أكبر من صفر.`;
      return;
    }
    if ((entry.currency === 'JOD' || entry.currency === 'USD') &&
        (!entry.nisEquivalent || entry.nisEquivalent <= 0)) {
      formError.value = `يرجى إدخال قيمة المقابل بالشيكل لبند العملة ${entry.currency} (يجب أن تكون أكبر من صفر).`;
      return;
    }
  }

  try {
    await customersStore.fetchCustomers(); // Ensure customer list is fresh
    const customer = customersStore.getCustomerById(selectedCustomerId.value);

    if (!customer) {
      formError.value = 'لم يتم العثور على العميل.';
      return;
    }

    const paymentParts: PaymentPart[] = paymentEntries.value.map(entry => ({
      id: nanoid(), // Unique ID for this part
      amount: entry.amount!,
      currency: entry.currency,
      nisEquivalent: entry.currency === 'NIS'
        ? entry.amount! // if NIS, amount is nisEquivalent
        : (entry.nisEquivalent || 0), // if not NIS, use provided nisEquivalent or default to 0
      method: entry.method, // Added method from the entry
    }));

    const totalTransactionNIS = paymentParts.reduce((sum, part) => {
      // Ensure nisEquivalent is treated as a number, defaulting to 0 if undefined or null
      return sum + (part.nisEquivalent || 0);
    }, 0);

    const newPaymentDetail: PaymentDetail = {
      id: nanoid(), // Unique ID for the overall transaction
      parts: paymentParts,
      totalTransactionNIS: totalTransactionNIS,
      paymentDate: paymentTransactionDetails.value.paymentDate,
      // method: paymentTransactionDetails.value.method as any, // Removed common method from PaymentDetail
      notes: paymentTransactionDetails.value.notes?.trim() || '-'
    };

    const existingPayments = Array.isArray(customer.payments) ? customer.payments : [];
    const updatedPaymentsArray = [...existingPayments, newPaymentDetail];

    await customersStore.updateCustomer({ id: customer.id, payments: updatedPaymentsArray });

    // Log each part to the payments store
    for (const part of paymentParts) {
      const paymentLogEntry: NewPaymentData = {
        customerId: selectedCustomerId.value,
        amount: part.amount,
        currency: part.currency,
        nisEquivalent: part.nisEquivalent,
        paymentDate: paymentTransactionDetails.value.paymentDate,
        method: part.method, // Use method from the part
        notes: paymentTransactionDetails.value.notes?.trim() || '-', // Common notes for now
        originalPaymentDetailId: newPaymentDetail.id,
        // Assuming NewPaymentData is updated to include paymentPartId
        // paymentPartId: part.id,
      };
      await paymentsStore.addPayment(paymentLogEntry);
    }

    emit('payment-saved');
    resetForm();

  } catch (e: any) {
    console.error("Failed to save payment:", e);
    formError.value = e.message || 'حدث خطأ أثناء حفظ الدفعة.';
  }
};

const resetForm = () => {
  paymentEntries.value = [createNewPaymentEntry()];
  paymentTransactionDetails.value = {
    paymentDate: Date.now(),
    // method: 'cash', // Removed common method
    notes: ''
  };
  formError.value = null;
  paymentsStore.clearError();

  if (!props.customerIdProp) {
    selectedCustomerId.value = '';
  }
};

const formatCurrency = (value: number | undefined | null, currency: string = 'NIS') => {
  if (typeof value !== 'number') return 'N/A';
  const locale = currency === 'NIS' ? 'he-IL' : (currency === 'JOD' ? 'ar-JO' : 'en-US');
  return new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

onMounted(async () => {
  if (!customersStore.customers.length || customersStore.lastFetchTimestamp === 0) {
    await customersStore.fetchCustomers();
  }
  if (props.customerIdProp) {
    selectedCustomerId.value = props.customerIdProp;
    if (!customersStore.customers.find(c => c.id === props.customerIdProp) ||
        (customersStore.customers.find(c => c.id === props.customerIdProp)?.balance === undefined)) {
      await customersStore.fetchCustomerById(props.customerIdProp);
    }
  }
  paymentTransactionDetails.value.paymentDate = Date.now(); // Ensure date is set on mount
});

</script>

<style scoped lang="scss">
.payment-form-container {
  max-width: 800px; // Increased width
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

.payment-entry-row {
  border: 1px solid #e0e0e0;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.375rem;
  background-color: #fdfdfd;

  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #007bff;
    display: flex;
    align-items: center;
    i {
      margin-left: 0.5rem;
    }
  }
}

.remove-entry-btn {
  margin-top: 0.5rem;
  display: block; // Or inline-block with other layout adjustments
  margin-left: auto; // Pushes button to the right if container allows
}

.add-entry-btn {
  margin-bottom: 1.5rem;
}

.section-divider {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  border-color: #ccc;
}

.payment-summary {
  margin-top: 1.5rem; // Added margin-top for spacing
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 0.375rem;

  h4 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    color: #333;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .total-nis-equivalent strong {
    color: #007bff;
  }
}

.form-row {
  display: flex;
  gap: 1rem; // Space between items in the row
  align-items: flex-end; // Align items to the bottom if labels make them uneven
}

.amount-group {
  flex: 2; // Amount field takes more space
}

.currency-group {
  flex: 1; // Currency field takes less space
}

.nis-equivalent-group {
  margin-top: 0.5rem; // Add some space if it's below the amount/currency row
}

// Ensure existing styles for .payment-form-container, .form-group, .form-actions are either here or imported
// For brevity, only new/modified styles are detailed above.
// Make sure to include or import existing styles for:
// .payment-form-container, h3, .form-group, label, input, select, textarea, .required-star,
// .customer-balance-info, .form-actions, .btn, .loading-spinner, .error-message
</style>
