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
      </div>
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
import { ref, nextTick, type PropType } from 'vue';
import { useCustomersStore, type Customer } from '@/store/modules/customers';
import { useRouter } from 'vue-router';

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

const formatCurrency = (value: number | undefined) => {
  if (typeof value !== 'number') return 'N/A';
  return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(value);
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
