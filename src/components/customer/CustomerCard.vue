<template>
  <div class="customer-card" dir="rtl">
    <div class="card-header">
      <h4>{{ customer.name }}</h4>
      <span v-if="customer.phone" class="customer-phone"><i class="fas fa-phone"></i> {{ customer.phone }}</span>
    </div>
    <div class="card-body">
      <!-- <div class="info-item">
        <strong><i class="fas fa-hashtag"></i> المعرف:</strong>
        <span class="customer-id">{{ String(customer.id)?.substring(0, 8) }}...</span>
      </div> -->
      <div class="info-item">
        <strong><i class="fas fa-sheep"></i> عدد الأضاحي:</strong>
        <span>{{ customer.animals?.length || 0 }} رأس</span>
      </div>
      
      <!-- Discount Information -->
      <div v-if="hasDiscount" class="info-item discount-info">
        <strong><i class="fas fa-percentage"></i> خصم العميل:</strong>
        <div class="discount-details">
          <span class="discount-amount">{{ formatCurrency(customer.discount || 0) }}</span>
          <div v-if="customer.discountReason" class="discount-reason">
            <small><i class="fas fa-info-circle"></i> {{ customer.discountReason }}</small>
          </div>
          <div v-if="customer.discountAppliedAt" class="discount-applied">
            <small>تطبق في: {{ formatDate(customer.discountAppliedAt) }}</small>
          </div>
        </div>
      </div>

      <!-- Financial Summary -->
      <div class="info-item financial-summary">
        <strong><i class="fas fa-calculator"></i> الملخص المالي:</strong>
        <div class="financial-details">
          <div class="financial-row">
            <span class="label">المجموع الأصلي:</span>
            <span class="value">{{ formatCurrency(customer.totalAmount || 0) }}</span>
          </div>
          <div v-if="hasDiscount" class="financial-row discount-row">
            <span class="label">الخصم:</span>
            <span class="value discount-value">- {{ formatCurrency(customer.discount || 0) }}</span>
          </div>
          <div class="financial-row total-row">
            <span class="label">المجموع النهائي:</span>
            <span class="value final-total">{{ formatCurrency(customer.finalTotalAmount || customer.totalAmount || 0) }}</span>
          </div>
          <div class="financial-row">
            <span class="label">المدفوع:</span>
            <span class="value">{{ formatCurrency(customer.totalPaidNIS || 0) }}</span>
          </div>
          <div class="financial-row balance-row">
            <span class="label">الرصيد:</span>
            <span class="value" :class="getBalanceClass(customer.balance || 0)">
              {{ formatCurrency(customer.balance || 0) }}
              <small v-if="customer.balance && customer.balance > 0">(دين)</small>
              <small v-else-if="customer.balance && customer.balance < 0">(زائد)</small>
              <small v-else>(خالص)</small>
            </span>
          </div>
        </div>
      </div>
      <!-- <div class="info-item">
        <strong><i class="fas fa-money-bill-wave"></i> المبلغ الإجمالي:</strong>
        <span>{{ formatCurrency(customer.totalAmount) }}</span>
      </div>
       <div class="info-item">
        <strong><i class="fas fa-hand-holding-usd"></i> إجمالي المدفوع:</strong>
        <span>{{ formatCurrency(customer.totalPaidNIS) }}</span>
      </div>
      <div class="info-item">
        <strong><i class="fas fa-wallet"></i> الرصيد / الدين:</strong>
        <span :class="getBalanceClass(customer.balance)">
          {{ formatCurrency(customer.balance) }}
          <span v-if="customer.balance > 0">(دين على العميل)</span>
          <span v-else-if="customer.balance < 0">(رصيد زائد للعميل)</span>
          <span v-else>(خالص)</span>
        </span>
      </div> -->
      <div class="info-item notes">
        <strong><i class="fas fa-sticky-note"></i> ملاحظات:</strong>
        <div v-if="!editingNotes" class="notes-display">
          <p v-if="customer.notes">{{ customer.notes }}</p>
          <p v-else class="no-notes">لا توجد ملاحظات</p>
          <button @click="startEditingNotes" class="btn-edit-notes">
            <i class="fas fa-edit"></i> {{ customer.notes ? 'تعديل الملاحظات' : 'إضافة ملاحظات' }}
          </button>
        </div>
        <div v-else class="notes-edit">
          <textarea 
            v-model="editingNotesText" 
            rows="3" 
            placeholder="أدخل ملاحظات العميل..."
            class="notes-textarea"
            @keydown.escape="cancelEditingNotes"
            @keydown.ctrl.enter="saveNotes"
            ref="notesTextarea"
          ></textarea>
          <div class="notes-actions">
            <button @click="saveNotes" class="btn btn-primary btn-sm" :disabled="savingNotes">
              <i class="fas fa-save"></i> {{ savingNotes ? 'جاري الحفظ...' : 'حفظ' }}
            </button>
            <button @click="cancelEditingNotes" class="btn btn-secondary btn-sm">
              <i class="fas fa-times"></i> إلغاء
            </button>
          </div>
          <div class="notes-hint">
            <small>اضغط Ctrl+Enter للحفظ أو Escape للإلغاء</small>
          </div>
        </div>
      </div>
      <!-- <div v-if="customer.address" class="info-item address">
        <strong><i class="fas fa-map-marker-alt"></i> العنوان:</strong>
        <p>{{ customer.address }}</p>
      </div>
       <div v-if="customer.createdAt" class="info-item created-at">
        <strong><i class="fas fa-calendar-plus"></i> تاريخ الإنشاء:</strong>
        <span>{{ formatDate(customer.createdAt || Date.now()) }}</span>
      </div> -->
    </div>
    <div class="card-footer">
      <button @click="$emit('edit-customer', customer)" class="btn btn-primary btn-sm">
        <i class="fas fa-edit"></i> تعديل
      </button>
      <button @click="$emit('view-payments', customer.id)" class="btn btn-info btn-sm">
        <i class="fas fa-file-invoice-dollar"></i> المدفوعات
      </button>
      <button @click="navigateToCustomerRelationships(customer.id)" class="btn btn-success btn-sm">
        <i class="fas fa-info-circle"></i> تفاصيل الأضاحي
      </button>
      <button @click="$emit('delete-customer', customer.id)" class="btn btn-danger btn-sm">
        <i class="fas fa-trash"></i> حذف
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, type PropType } from 'vue';
import { useCustomersStore, type Customer } from '@/store/modules/customers';
import { useRouter } from 'vue-router';
import { hasActiveDiscount } from '@/utils/customerDiscounts';

const props = defineProps({
  customer: {
    type: Object as PropType<Customer>,
    required: true
  }
});

defineEmits(['edit-customer', 'view-payments', 'delete-customer']);

const customersStore = useCustomersStore();
const router = useRouter();

// Reactive variables for notes editing
const editingNotes = ref(false);
const editingNotesText = ref('');
const savingNotes = ref(false);
const notesTextarea = ref<HTMLTextAreaElement | null>(null);

// Computed properties
const hasDiscount = computed(() => hasActiveDiscount(props.customer.discount));

// Helper functions
const formatCurrency = (amount: number): string => {
  return `${amount.toLocaleString()} ش.ج`;
};

const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getBalanceClass = (balance: number): string => {
  if (balance > 0) return 'balance-debt';
  if (balance < 0) return 'balance-credit';
  return 'balance-clear';
};

const startEditingNotes = () => {
  editingNotes.value = true;
  editingNotesText.value = props.customer.notes || '';
  nextTick(() => {
    if (notesTextarea.value) {
      notesTextarea.value.focus();
    }
  });
};

const cancelEditingNotes = () => {
  editingNotes.value = false;
  editingNotesText.value = '';
};

const saveNotes = async () => {
  if (savingNotes.value) return;
  savingNotes.value = true;
  
  try {
    // Update customer notes through the store
    await customersStore.updateCustomer({
      id: props.customer.id,
      notes: editingNotesText.value.trim()
    });
    
    editingNotes.value = false;
    editingNotesText.value = '';
  } catch (error) {
    console.error('Error saving notes:', error);
    // Error handling will be shown by the store's error state
  } finally {
    savingNotes.value = false;
  }
};

const navigateToCustomerRelationships = (customerId: string) => {
  router.push({ name: 'CustomerRelationships', query: { customerId: customerId } });
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

  // Discount information styles
  .discount-info {
    background-color: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 4px;
    padding: 8px;
    
    .discount-details {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
    }
    
    .discount-amount {
      font-weight: 600;
      color: #e67e22;
      font-size: 1.1em;
    }
    
    .discount-reason, .discount-applied {
      font-size: 0.8em;
      color: #8b7355;
    }
  }

  // Financial summary styles
  .financial-summary {
    flex-direction: column;
    align-items: stretch;
    
    .financial-details {
      margin-top: 8px;
      border: 1px solid #e9ecef;
      border-radius: 4px;
      padding: 8px;
      background-color: #f8f9fa;
    }
    
    .financial-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0;
      font-size: 0.9em;
      
      &.discount-row {
        color: #e67e22;
        font-weight: 500;
      }
      
      &.total-row {
        border-top: 1px solid #007bff;
        margin-top: 4px;
        padding-top: 6px;
        font-weight: 600;
        
        .final-total {
          color: #007bff;
          font-size: 1.05em;
        }
      }
      
      &.balance-row {
        border-top: 1px solid #ddd;
        margin-top: 4px;
        padding-top: 6px;
        font-weight: 600;
      }
      
      .label {
        color: #495057;
      }
      
      .value {
        font-weight: 500;
        
        &.discount-value {
          color: #e67e22;
        }
      }
    }
  }

  // Balance color classes
  .balance-debt {
    color: #dc3545;
  }
  
  .balance-credit {
    color: #28a745;
  }
  
  .balance-clear {
    color: #6c757d;
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
  &:hover { background-color: #0056b3; }
}
.btn-info {
  background-color: #17a2b8;
  color: white;
  &:hover { background-color: #138496; }
}
.btn-success {
  background-color: #28a745;
  color: white;
  &:hover { background-color: #218838; }
}
.btn-danger {
  background-color: #dc3545;
  color: white;
  &:hover { background-color: #c82333; }
}
.btn-sm {
  padding: 0.3rem 0.6rem;
  font-size: .875rem;
}

.notes-display {
  p {
    margin: 0;
  }
}

.no-notes {
  color: #999;
  font-style: italic;
}

.btn-edit-notes {
  background: none;
  border: none;
  color: var(--app-primary-color, #007bff);
  cursor: pointer;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0056b3; // Darker shade of primary color for hover
  }
}

.notes-edit {
  .notes-textarea {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 0.9em;
    resize: none;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      border-color: var(--app-primary-color, #007bff);
      outline: none;
    }
  }

  .notes-actions {
    margin-top: 5px;
    display: flex;
    gap: 10px;
  }

  .notes-hint {
    margin-top: 5px;
    text-align: right; // RTL: text-align: left
    small {
      color: #777;
    }
  }
}
</style>
