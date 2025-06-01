<template>
  <div class="balance-sheet-container card-style" dir="rtl">
    <h3><i class="fas fa-balance-scale"></i> الميزانية العمومية (ملخص)</h3>

    <loading-spinner :loading="loadingData" />
    <error-message v-if="errorLoading" :message="errorLoading" />

    <div v-if="!loadingData && !errorLoading" class="summary-grid">
      <div class="summary-item total-sales">
        <div class="icon-container"><i class="fas fa-chart-line"></i></div>
        <div class="details">
          <span class="label">إجمالي قيمة المبيعات (الأضاحي)</span>
          <span class="value">{{ formatCurrency(summary.totalSalesValue) }}</span>
        </div>
      </div>
      <div v-if="summary.totalDiscountsGiven > 0" class="summary-item total-discounts">
        <div class="icon-container"><i class="fas fa-percent"></i></div>
        <div class="details">
          <span class="label">إجمالي الخصومات المقدمة</span>
          <span class="value discount-amount">{{ formatCurrency(summary.totalDiscountsGiven) }}</span>
          <div class="sub-details">
            <small>{{ summary.customersWithDiscounts }} عميل لديه خصم</small>
          </div>
        </div>
      </div>
      <div v-if="summary.totalDiscountsGiven > 0" class="summary-item original-revenue">
        <div class="icon-container"><i class="fas fa-receipt"></i></div>
        <div class="details">
          <span class="label">إجمالي الإيرادات قبل الخصم</span>
          <span class="value">{{ formatCurrency(summary.totalSalesValueBeforeDiscount) }}</span>
        </div>
      </div>
      <div class="summary-item total-payments-received">
        <div class="icon-container"><i class="fas fa-hand-holding-usd"></i></div>
        <div class="details">
          <span class="label">إجمالي المدفوعات المستلمة</span>
          <span class="value">{{ formatCurrency(summary.totalPaymentsReceived) }}</span>
        </div>
      </div>
      <div class="summary-item total-outstanding-balance">
        <div class="icon-container"><i class="fas fa-hourglass-half"></i></div>
        <div class="details">
          <span class="label">إجمالي الرصيد المستحق (على العملاء)</span>
          <span class="value text-warning">{{ formatCurrency(summary.totalOutstandingBalance) }}</span>
        </div>
      </div>
      <div class="summary-item net-cashflow"> <!-- Changed from net-position -->
        <div class="icon-container"><i class="fas fa-exchange-alt"></i></div> <!-- Changed icon -->
        <div class="details">
          <span class="label">صافي التدفق النقدي (المستلم)</span> <!-- Clarified label -->
          <span class="value" :class="summary.totalPaymentsReceived >= 0 ? 'text-success' : 'text-danger'">
            {{ formatCurrency(summary.totalPaymentsReceived) }}
          </span>
        </div>
      </div>
      <div class="summary-item total-customers">
        <div class="icon-container"><i class="fas fa-users"></i></div>
        <div class="details">
          <span class="label">عدد العملاء النشطين</span>
          <span class="value">{{ summary.totalCustomers }}</span>
        </div>
      </div>
      <div class="summary-item total-animals">
        <div class="icon-container"><i class="fas fa-sheep"></i></div>
        <div class="details">
          <span class="label">عدد الأضاحي المسجلة (غير الملغاة)</span>
          <span class="value">{{ summary.totalActiveAnimals }}</span>
        </div>
      </div>
    </div>
    <div class="actions">
        <button @click="fetchSummaryData" class="btn btn-secondary" :disabled="loadingData">
            <i class="fas fa-sync-alt"></i> تحديث البيانات
        </button>
    </div>
    <div v-if="!loadingData && lastUpdated" class="last-updated">
        آخر تحديث للبيانات: {{ formatDate(lastUpdated, true) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCustomersStore } from '@/store/modules/customers';
import { usePaymentsStore } from '@/store/modules/payments';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';

const customersStore = useCustomersStore();
const paymentsStore = usePaymentsStore();

const loadingData = ref(false);
const errorLoading = ref<string | null>(null);
const lastUpdated = ref<Date | null>(null);

const summary = ref({
  totalSalesValue: 0,
  totalSalesValueBeforeDiscount: 0,
  totalDiscountsGiven: 0,
  totalPaymentsReceived: 0,
  totalOutstandingBalance: 0,
  // netPosition: 0, // Replaced by focusing on totalPaymentsReceived as net cash inflow
  totalCustomers: 0,
  totalActiveAnimals: 0,
  customersWithDiscounts: 0,
});

const fetchSummaryData = async () => {
  loadingData.value = true;
  errorLoading.value = null;
  try {
    // Fetch data if stores are empty or stale (logic for staleness can be in store)
    if (!customersStore.customers.length || customersStore.lastFetchTimestamp === 0) {
        await customersStore.fetchCustomers();
    }
    if (!paymentsStore.payments.length || paymentsStore.lastFetchTimestamp === 0) {
        await paymentsStore.fetchPayments();
    }

    // Calculate sales values and discount metrics
    let totalSalesBeforeDiscount = 0;
    let totalDiscounts = 0;
    let customersWithDiscounts = 0;

    summary.value.totalSalesValue = customersStore.customers.reduce((acc, customer) => {
      const customerSales = customer.animals?.reduce((animalSum, animal) => {
        return animal.status !== 'ملغي' ? animalSum + (animal.total || 0) : animalSum;
      }, 0) || 0;
      
      // Track original amounts before discount
      totalSalesBeforeDiscount += customerSales;
      
      // Track discounts
      if (customer.discount && customer.discount > 0) {
        totalDiscounts += customer.discount;
        customersWithDiscounts++;
      }
      
      // Use final total amount (after discount) for sales value
      const finalAmount = customer.finalTotalAmount !== undefined ? customer.finalTotalAmount : customerSales;
      return acc + finalAmount;
    }, 0);

    summary.value.totalSalesValueBeforeDiscount = totalSalesBeforeDiscount;
    summary.value.totalDiscountsGiven = totalDiscounts;
    summary.value.customersWithDiscounts = customersWithDiscounts;

    summary.value.totalPaymentsReceived = paymentsStore.payments.reduce((acc, payment) => {
      return acc + payment.amount;
    }, 0);

    // Total outstanding balance is sum of positive balances (money owed by customers)
    summary.value.totalOutstandingBalance = customersStore.customers.reduce((acc, customer) => {
      return acc + (customer.balance > 0 ? customer.balance : 0);
    }, 0);

    summary.value.totalCustomers = customersStore.customers.length; // Or filter by active customers if applicable

    summary.value.totalActiveAnimals = customersStore.customers.reduce((acc, customer) => {
      return acc + (customer.animals?.filter(a => a.status !== 'ملغي').length || 0);
    }, 0);

    lastUpdated.value = new Date();

  } catch (error) {
    console.error("Error fetching summary data:", error);
    errorLoading.value = "حدث خطأ أثناء تحميل بيانات الملخص.";
  } finally {
    loadingData.value = false;
  }
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(value);
};

const formatDate = (dateValue: Date | string | undefined, includeTime = false) => {
  if (!dateValue) return 'N/A';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  if (includeTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }
  try {
    return new Date(dateValue).toLocaleDateString('ar-EG', options);
  } catch (e) {
    return 'Invalid Date';
  }
};

onMounted(() => {
  fetchSummaryData();
});
</script>

<style scoped lang="scss">
@use 'sass:color';

.balance-sheet-container {
  padding: 20px;
}
h3 {
  margin-top: 0;
  margin-bottom: 25px;
  color: #333;
  text-align: center;
  i {
    margin-left: 10px; // RTL: margin-right
    color: var(--app-primary-color, #007bff);
  }
}
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}
.summary-item {
  background-color: #fdfdfd;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px; // Increased gap
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  }

  .icon-container { // Renamed from .icon for clarity
    font-size: 2.2em; // Slightly reduced
    color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .details {
    display: flex;
    flex-direction: column;
    .label {
      font-size: 0.9em; // Slightly smaller
      color: #666; // Darker gray
      margin-bottom: 4px; // Reduced margin
    }
    .value {
      font-size: 1.5em; // Slightly larger
      font-weight: 600; // Bolder
      color: #333;
    }
  }
}

// Specific item styling using more distinct colors
.total-sales .icon-container { background-color: #20c997; } // Teal
.total-discounts .icon-container { background-color: #28a745; } // Green
.original-revenue .icon-container { background-color: #17a2b8; } // Info blue
.total-payments-received .icon-container { background-color: #007bff; } // Blue
.total-outstanding-balance .icon-container { background-color: #ffc107; } // Warning yellow
.net-cashflow .icon-container { background-color: #6c757d; } // Gray
.total-customers .icon-container { background-color: #dc3545; } // Red
.total-animals .icon-container { background-color: #fd7e14; } // Orange

// Discount-specific styling
.discount-amount {
  color: #28a745 !important;
}

.sub-details {
  margin-top: 0.25rem;
  
  small {
    color: #6c757d;
    font-style: italic;
  }
}
.total-payments-received .icon-container { background-color: #007bff; } // Blue
.total-outstanding-balance .icon-container { background-color: #fd7e14; } // Orange
.net-cashflow .icon-container { background-color: #6610f2; } // Indigo
.total-customers .icon-container { background-color: #ffc107; } // Yellow
.total-animals .icon-container { background-color: #28a745; } // Green


.text-success { color: #28a745 !important; }
.text-danger { color: #dc3545 !important; }
.text-warning { color: #c87800 !important; font-weight: bold; } // Darker warning for text

.actions {
    margin-top: 20px;
    text-align: center;
    .btn {
        padding: 10px 20px;
        i { margin-left: 8px; }
    }
}
.last-updated {
    text-align: center;
    margin-top: 15px;
    font-size: 0.85em;
    color: #777;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
  &:hover { background-color: color.scale(#6c757d, $lightness: -10%); }
  &:disabled { background-color: #aaa; cursor: not-allowed; }
}
.card-style {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
