<template>
  <div class="payment-history-container" dir="rtl">
    <h3><i class="fas fa-history"></i> سجل المدفوعات</h3>
    <div class="filters">
      <div class="form-group filter-customer" v-if="showCustomerFilter">
        <label for="filterCustomer">فلترة حسب العميل:</label>
        <select id="filterCustomer" v-model="filterCustomerIdState" @change="applyFiltersAndFetch">
          <option value="">جميع العملاء</option>
          <option v-for="customer in customersStore.customers" :key="customer.id" :value="customer.id">
            {{ customer.name }} <span v-if="hasActiveDiscount(customer.discount)">(خصم: {{ formatCurrency(customer.discount?.amount || 0, 'NIS') }})</span>
          </option>
        </select>
      </div>
      <div class="form-group filter-currency">
        <label for="filterCurrency">العملة:</label>
        <select id="filterCurrency" v-model="filterCurrencyState" @change="applyFiltersAndFetch">
          <option value="">جميع العملات</option>
          <option value="NIS">شيكل (NIS)</option>
          <option value="JOD">دينار أردني (JOD)</option>
          <option value="USD">دولار أمريكي (USD)</option>
        </select>
      </div>
      <div class="form-group filter-method">
        <label for="filterMethod">طريقة الدفع:</label>
        <select id="filterMethod" v-model="filterMethodState" @change="applyFiltersAndFetch">
          <option value="">جميع طرق الدفع</option>
          <option value="cash">نقداً</option>
          <option value="bank_transfer">تحويل بنكي</option>
          <option value="card">بطاقة ائتمان/خصم</option>
          <option value="online">دفع إلكتروني</option>
          <option value="cheque">شيك</option>
          <option value="other">أخرى</option>
        </select>
      </div>
      <button @click="applyFiltersAndFetch" class="btn btn-secondary btn-sm filter-button" :disabled="paymentsStore.loading">
        <i class="fas fa-filter"></i> تطبيق الفلتر / تحديث
      </button>
    </div>

    <loading-spinner :loading="paymentsStore.loading" />
    <error-message v-if="paymentsStore.error" :message="paymentsStore.error" />

    <div v-if="!paymentsStore.loading && !filteredPayments.length && !paymentsStore.error" class="empty-state">
      <p>لا توجد مدفوعات لعرضها تطابق الفلترة الحالية.</p>
    </div>

    <div class="table-responsive" v-if="filteredPayments.length">
      <table class="payments-table">
        <thead>
          <tr>
            <th v-if="showCustomerFilter">العميل</th>
            <th>المبلغ الأصلي</th>
            <th>العملة</th>
            <th>المقابل بالشيكل (NIS)</th>
            <th>تاريخ الدفع</th>
            <th>طريقة الدفع</th>
            <th>ملاحظات</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in filteredPayments" :key="payment.id">
            <td v-if="showCustomerFilter">
              {{ getCustomerName(payment.customerId) }}
              <div v-if="getCustomerDiscountInfo(payment.customerId)" class="customer-discount-in-history">
                <small>
                  <i class="fas fa-tag"></i>
                  خصم العميل: {{ getCustomerDiscountInfo(payment.customerId) }}
                </small>
              </div>
            </td>
            <td>{{ formatCurrency(payment.amount, payment.currency) }}</td>
            <td>{{ payment.currency }}</td>
            <td>{{ formatCurrency(payment.nisEquivalent || payment.amount, 'NIS') }}</td>
            <td>{{ formatDate(payment.paymentDate) }}</td>
            <td>{{ getPaymentMethodText(payment.method || 'cash') }}</td>
            <td class="notes-cell">{{ payment.notes || '-' }}</td>
            <td class="actions-cell">
              <button @click="confirmDeletePayment(payment)" class="btn btn-outline-danger btn-xs" title="حذف الدفعة">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Total section with toggle button -->
    <div class="totals-container">
      <button @click="showTotals = !showTotals" class="btn-toggle-totals">
        <i :class="[showTotals ? 'fas fa-chevron-up' : 'fas fa-chevron-down', 'toggle-icon']" :style="{ transform: showTotals ? 'rotate(0)' : 'rotate(180deg)' }"></i>
        {{ showTotals ? 'إخفاء الإجماليات' : 'عرض الإجماليات' }}
      </button>
      
      <div v-if="showTotals && filteredPayments.length" class="total-payments">
        <div class="total-section">
          <div class="total-row" v-if="totalNIS > 0">
            <strong>إجمالي المدفوعات (شيكل - NIS):</strong>
            <span>{{ formatCurrency(totalNIS, 'NIS') }}</span>
          </div>
          <div class="total-row" v-if="totalJOD > 0">
            <strong>إجمالي المدفوعات (دينار - JOD):</strong>
            <span>{{ formatCurrency(totalJOD, 'JOD') }}</span>
          </div>
          <div class="total-row" v-if="totalUSD > 0">
            <strong>إجمالي المدفوعات (دولار - USD):</strong>
            <span>{{ formatCurrency(totalUSD, 'USD') }}</span>
          </div>
          <div class="total-row highlight">
            <strong>الإجمالي المكافئ بالشيكل:</strong>
            <span>{{ formatCurrency(totalPaymentsAmountNIS, 'NIS') }}</span>
          </div>
        </div>
        <div class="transactions-count">
          <span>عدد العمليات: {{ filteredPayments.length }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Confirm Delete Dialog -->
  <confirm-dialog
    :is-visible="deleteDialog.isVisible"
    :title="deleteDialog.title"
    :message="deleteDialog.message"
    :confirm-text="deleteDialog.confirmText"
    :cancel-text="deleteDialog.cancelText"
    :type="deleteDialog.type"
    :loading="deleteDialog.loading"
    @confirm="handleDeleteConfirm"
    @cancel="handleDeleteCancel"
    @close="handleDeleteCancel"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { usePaymentsStore, type StoredPayment } from '@/store/modules/payments'; // Ensure StoredPayment is imported
import { useCustomersStore, type Customer } from '@/store/modules/customers';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';
import ConfirmDialog from '@/components/common/ConfirmDialog.vue';
import { hasActiveDiscount } from '@/utils/customerDiscounts'; // Import discount utility

const props = defineProps({
  filterCustomerIdProp: {
    type: String as () => string | null,
    default: null
  },
  showCustomerFilter: {
    type: Boolean,
    default: false
  }
});

const paymentsStore = usePaymentsStore();
const customersStore = useCustomersStore();

const filterCustomerIdState = ref<string>('');
const filterCurrencyState = ref<string>('');
const filterMethodState = ref<string>('');
const showTotals = ref<boolean>(false);

// Delete dialog state
const deleteDialog = ref({
  isVisible: false,
  title: 'تأكيد حذف الدفعة',
  message: '',
  confirmText: 'حذف',
  cancelText: 'إلغاء',
  type: 'danger' as const,
  loading: false,
  paymentToDelete: null as StoredPayment | null
});

const emit = defineEmits([]);

const applyFiltersAndFetch = async () => {
  await paymentsStore.fetchPayments();
};

watch(() => props.filterCustomerIdProp, (newVal) => {
  filterCustomerIdState.value = newVal || '';
  // No need to call applyFiltersAndFetch here if payments are already fetched
  // and filtering is purely client-side. If server-side filtering is ever implemented,
  // then this would be necessary.
  // applyFiltersAndFetch(); 
}, { immediate: true });


const filteredPayments = computed<StoredPayment[]>(() => { // Explicitly type with StoredPayment[]
  let payments: StoredPayment[] = paymentsStore.payments;

  // Filter by customer
  if (filterCustomerIdState.value) {
    payments = payments.filter(p => p.customerId === filterCustomerIdState.value);
  }
  
  // Filter by currency
  if (filterCurrencyState.value) {
    payments = payments.filter(p => p.currency === filterCurrencyState.value);
  }
  
  // Filter by payment method
  if (filterMethodState.value) {
    payments = payments.filter(p => p.method === filterMethodState.value);
  }
  
  // Sort by date descending
  return payments.sort((a, b) => {
    const dateA = new Date(a.paymentDate).getTime();
    const dateB = new Date(b.paymentDate).getTime();
    return dateB - dateA;
  });
});

const totalPaymentsAmountNIS = computed(() => {
  return filteredPayments.value.reduce((sum, payment) => {
    // Sum up the nisEquivalent; if not present (e.g. for NIS payments), use the amount itself.
    const amountInNIS = payment.currency === 'NIS' ? payment.amount : (payment.nisEquivalent || 0);
    return sum + amountInNIS;
  }, 0);
});

// Add computed properties for currency-specific totals
const totalNIS = computed(() => {
  return filteredPayments.value
    .filter(payment => payment.currency === 'NIS')
    .reduce((sum, payment) => sum + payment.amount, 0);
});

const totalJOD = computed(() => {
  return filteredPayments.value
    .filter(payment => payment.currency === 'JOD')
    .reduce((sum, payment) => sum + payment.amount, 0);
});

const totalUSD = computed(() => {
  return filteredPayments.value
    .filter(payment => payment.currency === 'USD')
    .reduce((sum, payment) => sum + payment.amount, 0);
});

const getCustomerName = (customerId: string): string => {
  const customer = customersStore.customers.find(c => c.id === customerId);
  return customer ? customer.name : 'عميل غير معروف';
};

const getCustomerDiscountInfo = (customerId: string): string | null => {
  const customer = customersStore.customers.find(c => c.id === customerId);
  if (customer && hasActiveDiscount(customer.discount) && customer.discount) {
    return `${formatCurrency(customer.discount.amount, 'NIS')} ${customer.discount.reason ? '(' + customer.discount.reason + ')' : ''}`.trim();
  }
  return null;
};

const formatCurrency = (value: number | undefined, currency: string = 'NIS') => {
  if (typeof value !== 'number') return 'N/A';
  const locale = currency === 'NIS' ? 'he-IL' : (currency === 'JOD' ? 'ar-JO' : 'en-US');
  return new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

const formatDate = (dateInput: string | Date | number | undefined) => {
  if (!dateInput) return '-';
  try {
    const date = new Date(dateInput);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
  } catch (e) {
    console.error("Error formatting date:", dateInput, e);
    return 'تاريخ غير صالح';
  }
};

const getPaymentMethodText = (method: string) => {
  const methods: { [key: string]: string } = {
    cash: 'نقداً',
    bank_transfer: 'تحويل بنكي',
    card: 'بطاقة ائتمان/خصم',
    online: 'دفع إلكتروني',
    cheque: 'شيك',
    other: 'أخرى'
  };
  return methods[method] || method;
};

// Delete payment handlers
const confirmDeletePayment = (payment: StoredPayment) => {
  const customerName = getCustomerName(payment.customerId);
  deleteDialog.value = {
    ...deleteDialog.value,
    isVisible: true,
    message: `هل أنت متأكد من حذف هذه الدفعة؟\n\nالعميل: ${customerName}\nالمبلغ: ${formatCurrency(payment.amount, payment.currency)}\nالتاريخ: ${formatDate(payment.paymentDate)}\n\nسيتم حذف هذه الدفعة من سجل المدفوعات وإعادة حساب رصيد العميل.`,
    paymentToDelete: payment,
    loading: false
  };
};

const handleDeleteConfirm = async () => {
  if (!deleteDialog.value.paymentToDelete) return;
  
  deleteDialog.value.loading = true;
  
  try {
    const payment = deleteDialog.value.paymentToDelete;
    
    // Delete from payments store (log)
    await paymentsStore.deletePayment(payment.id);
    
    // Update customer payments array and recalculate balance
    const customer = customersStore.customers.find(c => c.id === payment.customerId);
    if (customer && customer.payments) {
      // Find and remove the payment detail that corresponds to this payment log entry
      const updatedPayments = customer.payments.filter(p => 
        p.id !== payment.originalPaymentDetailId
      );
      
      // Update customer with new payments array (this will recalculate balance)
      await customersStore.updateCustomer({
        id: customer.id,
        payments: updatedPayments
      });
    }
    
    // Refresh payments list
    await applyFiltersAndFetch();
    
    // Close dialog
    handleDeleteCancel();
    
  } catch (error: any) {
    console.error('Error deleting payment:', error);
    paymentsStore.setError('فشل في حذف الدفعة: ' + (error.message || 'خطأ غير معروف'));
  } finally {
    deleteDialog.value.loading = false;
  }
};

const handleDeleteCancel = () => {
  deleteDialog.value.isVisible = false;
  deleteDialog.value.paymentToDelete = null;
  deleteDialog.value.loading = false;
};

onMounted(async () => {
  // Fetch customers if not already loaded or list is empty
  if (!customersStore.customers.length || customersStore.lastFetchTimestamp === 0) {
    await customersStore.fetchCustomers();
  }
  
  // Set initial filterCustomerIdState if prop is passed
  filterCustomerIdState.value = props.filterCustomerIdProp || '';
  
  // Initial fetch of all payments. Filtering is client-side.
  await applyFiltersAndFetch(); 
});

// Expose fetchPayments to be called from parent if needed (e.g., after a new payment is added)
// This ensures the history list can be refreshed.
defineExpose({
  fetchPayments: applyFiltersAndFetch
});

</script>

<style scoped lang="scss" src="./PaymentHistory.scss"></style>
<style lang="scss">
// This allows global overrides if PaymentHistory.scss is not sufficient or for quick additions.
// For more extensive or component-specific styles, prefer the scoped SCSS file.

.customer-discount-in-history {
  font-size: 0.8em;
  color: #007bff; // Or your theme's primary/info color
  margin-top: 4px;
  i {
    margin-left: 3px; // RTL: margin-right
  }
}
</style>
