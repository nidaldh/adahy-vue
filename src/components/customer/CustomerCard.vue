<template>
  <div class="customer-card" dir="rtl">
    <div class="card-header">
      <h4>{{ customer.name }}</h4>
      <span v-if="customer.phone" class="customer-phone"><i class="fas fa-phone"></i> {{ customer.phone }}</span>
    </div>
    <div class="card-body">
      <div class="info-item">
        <strong><i class="fas fa-hashtag"></i> المعرف:</strong>
        <span class="customer-id">{{ String(customer.id)?.substring(0, 8) }}...</span>
      </div>
      <div class="info-item">
        <strong><i class="fas fa-sheep"></i> عدد الأضاحي:</strong>
        <span>{{ customer.animals?.length || 0 }} رأس</span>
      </div>
      <div class="info-item">
        <strong><i class="fas fa-money-bill-wave"></i> المبلغ الإجمالي:</strong>
        <span>{{ formatCurrency(customer.totalAmount) }}</span>
      </div>
       <div class="info-item">
        <strong><i class="fas fa-hand-holding-usd"></i> إجمالي المدفوع:</strong>
        <span>{{ formatCurrency(customer.totalPayments) }}</span>
      </div>
      <div class="info-item">
        <strong><i class="fas fa-wallet"></i> الرصيد المتبقي:</strong>
        <span :class="getBalanceClass(customer.balance)">
          {{ formatCurrency(customer.balance) }}
          <span v-if="customer.balance > 0">(مستحق على العميل)</span>
          <span v-else-if="customer.balance < 0">(رصيد زائد للعميل)</span>
          <span v-else>(خالص)</span>
        </span>
      </div>
      <div v-if="customer.notes" class="info-item notes">
        <strong><i class="fas fa-sticky-note"></i> ملاحظات:</strong>
        <p>{{ customer.notes }}</p>
      </div>
      <div v-if="customer.address" class="info-item address">
        <strong><i class="fas fa-map-marker-alt"></i> العنوان:</strong>
        <p>{{ customer.address }}</p>
      </div>
       <div v-if="customer.createdAt" class="info-item created-at">
        <strong><i class="fas fa-calendar-plus"></i> تاريخ الإنشاء:</strong>
        <span>{{ formatDate(customer.createdAt || Date.now()) }}</span>
      </div>
    </div>
    <div class="card-footer">
      <button @click="$emit('edit-customer', customer)" class="btn btn-primary btn-sm">
        <i class="fas fa-edit"></i> تعديل
      </button>
      <button @click="$emit('view-payments', customer.id)" class="btn btn-info btn-sm">
        <i class="fas fa-file-invoice-dollar"></i> المدفوعات
      </button>
      <button @click="$emit('delete-customer', customer.id)" class="btn btn-danger btn-sm">
        <i class="fas fa-trash"></i> حذف
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Customer } from '@/store/modules/customers'; // Assuming Customer type

defineProps({
  customer: {
    type: Object as PropType<Customer>,
    required: true
  }
});

defineEmits(['edit-customer', 'view-payments', 'delete-customer']);

const formatCurrency = (value: number | undefined) => {
  if (typeof value !== 'number') return 'N/A';
  return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(value);
};

const formatDate = (dateValue: string | Date | number | undefined) => {
  if (!dateValue) return 'N/A';
  try {
    return new Date(dateValue).toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return 'Invalid Date';
  }
};

const getBalanceClass = (balance: number | undefined) => {
  if (typeof balance !== 'number') return '';
  if (balance > 0) return 'text-danger'; // Customer owes money
  if (balance < 0) return 'text-info';   // Customer has credit
  return 'text-success'; // Settled
};
</script>

<style scoped lang="scss">
@use 'sass:color';

.customer-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.12);
  }

  .card-header {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    h4 {
      margin: 0 0 5px 0;
      color: var(--app-primary-color, #007bff);
      font-size: 1.25em;
    }
    .customer-phone {
      font-size: 0.9em;
      color: #555;
      i { margin-left: 5px; } // RTL: margin-right
    }
  }

  .card-body {
    flex-grow: 1;
    margin-bottom: 15px;
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start; // Align items to top for multi-line content
      margin-bottom: 10px;
      font-size: 0.95em;
      padding-bottom: 5px;
      border-bottom: 1px dotted #f0f0f0;
      &:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }

      strong {
        color: #444;
        flex-shrink: 0; // Prevent shrinking
        margin-left: 8px; // RTL: margin-right
        i { margin-left: 6px; color: #888; } // RTL: margin-right
      }
      span, p {
        color: #666;
        text-align: left; // RTL: text-align: right
        word-break: break-word;
      }
      .customer-id {
        font-family: monospace;
        font-size: 0.9em;
      }
      &.notes p, &.address p {
        margin-top: 0;
        font-size: 0.9em;
        color: #666;
        white-space: pre-wrap;
      }
    }
    .text-danger { color: #dc3545 !important; font-weight: bold; }
    .text-success { color: #28a745 !important; font-weight: bold; }
    .text-info { color: #17a2b8 !important; font-weight: bold; }
  }

  .card-footer {
    display: flex;
    gap: 10px;
    justify-content: flex-start; // For RTL, this will be flex-end
    padding-top: 10px;
    border-top: 1px solid #eee;
  }
}

.btn {
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9em;
}
.btn-primary {
  background-color: var(--app-primary-color, #007bff);
  color: white;
  &:hover { background-color: color.scale(#007bff, $lightness: -10%); }
}
.btn-info {
  background-color: #17a2b8;
  color: white;
  &:hover { background-color: color.scale(#17a2b8, $lightness: -10%); }
}
.btn-danger {
  background-color: #dc3545;
  color: white;
  &:hover { background-color: color.scale(#dc3545, $lightness: -10%); }
}
.btn-sm {
  padding: 0.3rem 0.6rem;
  font-size: .875rem;
}
</style>
