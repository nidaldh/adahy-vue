<template>
  <div class="payment-history-container" dir="rtl">
    <h3><i class="fas fa-history"></i> سجل المدفوعات</h3>
    <div class="filters">
      <div class="form-group filter-customer" v-if="!filterCustomerIdProp">
        <label for="filterCustomer">فلترة حسب العميل:</label>
        <select id="filterCustomer" v-model="filterCustomerIdState" @change="applyFiltersAndFetch">
          <option value="">جميع العملاء</option>
          <option v-for="customer in customersStore.customers" :key="customer.id" :value="customer.id">
            {{ customer.name }}
          </option>
        </select>
      </div>
      <div class="form-group filter-date">
        <label for="filterDateFrom">من تاريخ:</label>
        <input type="date" id="filterDateFrom" v-model="filterDateFromState" @change="applyFiltersAndFetch"/>
      </div>
      <div class="form-group filter-date">
        <label for="filterDateTo">إلى تاريخ:</label>
        <input type="date" id="filterDateTo" v-model="filterDateToState" @change="applyFiltersAndFetch"/>
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
            <th v-if="!filterCustomerIdProp">العميل</th>
            <th>المبلغ</th>
            <th>التاريخ</th>
            <th>الطريقة</th>
            <th>ملاحظات</th>
            <!-- <th>إجراءات</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in filteredPayments" :key="payment.id">
            <td v-if="!filterCustomerIdProp">{{ getCustomerName(payment.customerId) }}</td>
            <td>{{ formatCurrency(payment.amount) }}</td>
            <td>{{ formatDate(payment.paymentDate) }}</td>
            <td>{{ getPaymentMethodText(payment.method || 'cash') }}</td>
            <td class="notes-cell">{{ payment.notes || '-' }}</td>
            <!-- Future actions:
            <td>
              <button @click="editPayment(payment)" class="btn btn-outline-primary btn-xs"><i class="fas fa-edit"></i></button>
              <button @click="deletePayment(payment.id)" class="btn btn-outline-danger btn-xs"><i class="fas fa-trash"></i></button>
            </td>
            -->
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="filteredPayments.length" class="total-payments">
      <strong>إجمالي المدفوعات المعروضة: {{ formatCurrency(totalPaymentsAmount) }}</strong>
      <span> (عدد: {{ filteredPayments.length }})</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { usePaymentsStore } from '@/store/modules/payments';
import { useCustomersStore } from '@/store/modules/customers';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';

const props = defineProps({
  filterCustomerIdProp: {
    type: String as () => string | null,
    default: null
  }
});

const paymentsStore = usePaymentsStore();
const customersStore = useCustomersStore();

const filterCustomerIdState = ref<string>('');
const filterDateFromState = ref<string>('');
const filterDateToState = ref<string>('');

const applyFiltersAndFetch = async () => {
  // Fetch all payments; filtering is done client-side by computed property.
  // If API supported server-side filtering, params would be passed here.
  await paymentsStore.fetchPayments();
};

// Watch for prop changes to update internal filter state
watch(() => props.filterCustomerIdProp, (newVal) => {
  filterCustomerIdState.value = newVal || '';
  applyFiltersAndFetch(); // Re-fetch/filter when prop changes
}, { immediate: true });


const filteredPayments = computed(() => {
  let payments = paymentsStore.payments;

  if (filterCustomerIdState.value) {
    payments = payments.filter(p => p.customerId === filterCustomerIdState.value);
  }
  if (filterDateFromState.value) {
    payments = payments.filter(p => new Date(p.paymentDate) >= new Date(filterDateFromState.value));
  }
  if (filterDateToState.value) {
    // Add 1 day to make the 'to' date inclusive
    const toDate = new Date(filterDateToState.value);
    toDate.setDate(toDate.getDate() + 1);
    payments = payments.filter(p => new Date(p.paymentDate) < toDate);
  }
  return payments.sort((a, b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime()); // Sort by date descending
});

const totalPaymentsAmount = computed(() => {
  return filteredPayments.value.reduce((sum, payment) => sum + payment.amount, 0);
});

const getCustomerName = (customerId: string): string => {
  const customer = customersStore.customers.find(c => c.id === customerId);
  return customer ? customer.name : 'غير معروف';
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(value);
};

const formatDate = (dateString: string | Date | number) => {
  return new Date(dateString).toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
};

const getPaymentMethodText = (method: string) => {
  const methods: { [key: string]: string } = {
    cash: 'نقداً',
    bank_transfer: 'تحويل بنكي',
    card: 'بطاقة',
    online: 'دفع إلكتروني',
    cheque: 'شيك',
    other: 'أخرى'
  };
  return methods[method] || method;
};

onMounted(async () => {
  if (!customersStore.customers.length || customersStore.lastFetchTimestamp === 0) {
    await customersStore.fetchCustomers();
  }
  // Set initial filterCustomerIdState if prop is passed
  filterCustomerIdState.value = props.filterCustomerIdProp || '';
  await applyFiltersAndFetch(); // Initial fetch
});

defineExpose({
  fetchPayments: applyFiltersAndFetch
});
</script>

<style scoped lang="scss">
.payment-history-container {
  h3 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
    i { margin-left: 8px; }
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: flex-end;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 6px;
    .form-group {
      flex-grow: 1;
      min-width: 180px; // Ensure inputs don't get too squeezed
      label { display: block; margin-bottom: 5px; font-weight: 500; font-size: 0.9em; }
      select, input[type="date"] {
        width: 100%;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        box-sizing: border-box;
      }
    }
    .filter-button {
      align-self: flex-end; // Align button with bottom of inputs
      padding: 8px 15px;
      i { margin-left: 5px; }
    }
  }
  .table-responsive {
    overflow-x: auto; // For smaller screens
  }
  .payments-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    font-size: 0.95em;
    th, td {
      border: 1px solid #ddd;
      padding: 10px 12px;
      text-align: right;
      vertical-align: middle;
    }
    th {
      background-color: #f0f0f0;
      font-weight: 600;
      white-space: nowrap;
    }
    .notes-cell {
      max-width: 200px;
      min-width: 120px;
      white-space: pre-wrap;
      word-break: break-word;
      font-size: 0.9em;
    }
    .btn-xs {
      padding: 0.2rem 0.4rem;
      font-size: 0.8em;
      margin: 0 2px;
      i { font-size: 0.9em; }
    }
  }
  .empty-state {
    text-align: center;
    padding: 20px;
    color: #777;
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px dashed #ddd;
  }
  .total-payments {
    text-align: left; // For RTL, this will be right
    font-weight: bold;
    margin-top: 10px;
    font-size: 1.1em;
    padding: 10px;
    background-color: #e9ecef;
    border-radius: 4px;
  }
}
.btn {
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
  &:hover { background-color: darken(#6c757d, 10%); }
  &:disabled { background-color: #aaa; cursor: not-allowed; }
}
.btn-sm {
  padding: 0.3rem 0.6rem;
  font-size: .875rem;
}
</style>
