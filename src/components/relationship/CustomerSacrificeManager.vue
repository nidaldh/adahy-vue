<template>
  <div class="customer-sacrifice-manager" dir="rtl">
    <div class="manager-header">
      <div v-if="selectedCustomer" class="customer-info">
        <span class="customer-name">{{ selectedCustomer.name }}</span>
        <span class="customer-phone" v-if="selectedCustomer.phone">
          <i class="fas fa-phone"></i> {{ selectedCustomer.phone }}
        </span>
      </div>
      
      <!-- Customer Notes Section -->
      <div v-if="selectedCustomer" class="customer-notes-section">
        <div class="notes-display">
          <div v-if="!editingNotes" class="notes-view">
            <div class="notes-content" v-if="selectedCustomer.notes">
              <i class="fas fa-sticky-note"></i>
              <span>{{ selectedCustomer.notes }}</span>
            </div>
            <button @click="startEditingNotes" class="btn btn-sm btn-outline">
              <i class="fas fa-edit"></i>
              {{ selectedCustomer.notes ? 'تعديل الملاحظات' : 'إضافة ملاحظات' }}
            </button>
          </div>
          
          <div v-else class="notes-edit">
            <textarea
              ref="notesTextarea"
              v-model="editingNotesText"
              class="notes-textarea"
              placeholder="اكتب ملاحظاتك حول العميل هنا..."
              rows="3"
              @keydown.ctrl.enter="saveNotes"
              @keydown.escape="cancelEditingNotes"
            ></textarea>
            <div class="notes-actions">
              <button @click="saveNotes" class="btn btn-sm btn-primary" :disabled="savingNotes">
                <i class="fas fa-save"></i>
                {{ savingNotes ? 'جاري الحفظ...' : 'حفظ' }}
              </button>
              <button @click="cancelEditingNotes" class="btn btn-sm btn-secondary">
                <i class="fas fa-times"></i>
                إلغاء
              </button>
            </div>
            <div class="notes-hint">
              <small>اضغط Ctrl+Enter للحفظ أو Escape للإلغاء</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="manager-content">
      <!-- Add New Sacrifice Section -->
      <div class="add-section">
        <div class="section-header">
          <h4><i class="fas fa-plus-circle"></i> إضافة أضحية جديدة</h4>
          <button 
            @click="toggleAddForm" 
            class="btn btn-primary btn-sm"
            :class="{ 'active': showAddForm }"
          >
            <i class="fas" :class="showAddForm ? 'fa-minus' : 'fa-plus'"></i>
            {{ showAddForm ? 'إخفاء النموذج' : 'إظهار النموذج' }}
          </button>
        </div>
        
        <div v-if="showAddForm" class="add-form-container">
          <SacrificeForm
            @addSacrifice="handleAddSacrifice"
            :is-loading="isAddingAnimal"
            :existing-animals="customerAnimals"
          />
        </div>
      </div>

      <!-- Existing Sacrifices Section -->
      <div class="list-section">

        <div v-if="customerAnimals.length === 0" class="empty-state">
          <i class="fas fa-sheep fa-3x"></i>
          <p>لا توجد أضاحي مسجلة لهذا العميل بعد</p>
          <p class="text-muted">استخدم النموذج أعلاه لإضافة أضحية جديدة</p>
        </div>

        <SacrificeList
          v-else
          :sacrifices="customerAnimals"
          @update-status="handleUpdateStatus"
        />
      </div>
    </div>

    <!-- Financial Summary Section -->
    <div v-if="selectedCustomer" class="financial-summary-section card-style">
      <h4><i class="fas fa-calculator"></i> الملخص المالي للعميل</h4>
      <div class="summary-details">
        <div class="summary-item">
          <span class="label">إجمالي أسعار الأضاحي:</span>
          <span class="value total-animals-price">{{ formatCurrency(selectedCustomer.totalAmount) }}</span>
        </div>
        <div class="summary-item">
          <span class="label">إجمالي المدفوعات:</span>
          <span class="value total-payments">{{ formatCurrency(selectedCustomer.totalPaidNIS) }}</span>
        </div>
        <hr class="summary-divider">
        <div class="summary-item balance">
          <span class="label">الرصيد المتبقي:</span>
          <span class="value" :class="getBalanceClass(selectedCustomer.balance)">
            {{ formatCurrency(selectedCustomer.balance) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Customer Payments List Placeholder -->
    <div v-if="selectedCustomer" class="payments-list-section card-style">
        <h4><i class="fas fa-money-bill-wave"></i> مدفوعات العميل</h4>
        <!-- PaymentList component will go here once path is confirmed -->
        <div v-if="selectedCustomer.payments && selectedCustomer.payments.length > 0">
          <p><em>(عرض قائمة المدفوعات هنا)</em></p>
          <ul>
            <li v-for="payment in selectedCustomer.payments" :key="payment.id">
              تاريخ: {{ new Date(payment.paymentDate).toLocaleDateString() }} - الإجمالي: {{ formatCurrency(payment.totalTransactionNIS) }}
            </li>
          </ul>
        </div>
        <div v-else>
          <p><i class="fas fa-info-circle"></i> لا توجد مدفوعات مسجلة لهذا العميل.</p>
        </div>
    </div>

    <!-- Confirmation Dialog -->
    <div v-if="showConfirmDialog" class="confirmation-overlay">
      <div class="confirmation-dialog">
        <div class="dialog-header">
          <h4>{{ confirmDialog.title }}</h4>
        </div>
        <div class="dialog-body">
          <p>{{ confirmDialog.message }}</p>
        </div>
        <div class="dialog-footer">
          <button @click="cancelConfirmation" class="btn btn-secondary">
            إلغاء
          </button>
          <button @click="executeConfirmation" class="btn btn-danger">
            تأكيد
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, defineEmits } from 'vue'; // Added defineEmits
import { useCustomersStore } from '@/store/modules/customers';
import SacrificeForm from './SacrificeForm.vue';
import SacrificeList from './SacrificeList.vue';
// import PaymentList from '@/components/payment/PaymentList.vue'; // Path to be confirmed
import type { Customer, Animal } from '@/store/modules/customers';

interface Props {
  selectedCustomer: Customer | null;
}

const props = defineProps<Props>();
const customerStore = useCustomersStore();
const emit = defineEmits(['dataUpdated']); // Define the event

// Reactive state
const showAddForm = ref(false);
const isAddingAnimal = ref(false);
const isUpdatingAnimals = ref(false);
const showConfirmDialog = ref(false);
const confirmDialog = ref({
  title: '',
  message: '',
  action: null as (() => void) | null
});
const editingNotes = ref(false);
const editingNotesText = ref('');
const savingNotes = ref(false);
const notesTextarea = ref<HTMLTextAreaElement | null>(null);

// Helper function to format currency
const formatCurrency = (value: number | undefined) => {
  if (typeof value !== 'number' || isNaN(value)) return 'N/A';
  return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(value);
};

const getBalanceClass = (balance: number | undefined) => {
  if (typeof balance !== 'number' || isNaN(balance)) return 'balance-zero';
  if (balance < 0) return 'balance-credit'; // Customer paid more
  if (balance > 0) return 'balance-debit'; // Customer owes money
  return 'balance-zero'; // Settled
};

// Computed properties
const customerAnimals = computed(() => {
  return props.selectedCustomer?.animals || [];
});

// Notes management methods
const startEditingNotes = async () => {
  editingNotes.value = true;
  editingNotesText.value = props.selectedCustomer?.notes || '';
  
  await nextTick();
  if (notesTextarea.value) {
    notesTextarea.value.focus();
  }
};

const cancelEditingNotes = () => {
  editingNotes.value = false;
  editingNotesText.value = '';
};

const saveNotes = async () => {
  if (savingNotes.value || !props.selectedCustomer) return;

  try {
    savingNotes.value = true;
    
    await customerStore.updateCustomer({
      id: props.selectedCustomer.id,
      notes: editingNotesText.value.trim()
    });
    
    editingNotes.value = false;
    editingNotesText.value = '';
    emit('dataUpdated'); // Emit event
  } catch (error) {
    console.error('خطأ في حفظ الملاحظات:', error);
  } finally {
    savingNotes.value = false;
  }
};

// Methods
const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
};

const handleAddSacrifice = async (animalData: Omit<Animal, 'id' | 'createdAt'>) => {
  if (!props.selectedCustomer) return;

  try {
    isAddingAnimal.value = true;
    
    const newAnimal: Animal = {
      ...animalData,
      id: generateAnimalId(),
      createdAt: Date.now(),
      notes: animalData.notes || '' // Ensure notes is an empty string if undefined or null
    };

    await customerStore.addAnimalToCustomer(
      props.selectedCustomer.id,
      newAnimal
    );

    showAddForm.value = false;
    emit('dataUpdated'); // Emit event
    
    // Show success message (you can implement a toast/notification system)
    console.log('تم إضافة الأضحية بنجاح');
    
  } catch (error) {
    console.error('خطأ في إضافة الأضحية:', error);
    // Show error message
  } finally {
    isAddingAnimal.value = false;
  }
};

const handleUpdateStatus = async (animalId: string, newStatus: string) => {
  if (!props.selectedCustomer) return;

  const animal = customerAnimals.value.find(a => a.id === animalId);
  if (!animal) {
    console.error('Animal not found for status update');
    return;
  }

  // Validate status
  const validStatuses = ['حي', 'جاهز', 'مذبوح', 'ملغي'] as const;
  type AnimalStatus = typeof validStatuses[number];

  if (!validStatuses.includes(newStatus as AnimalStatus)) {
    console.error('حالة غير صحيحة:', newStatus);
    return;
  }

  // Restriction: Animal can only be cancelled if its current status is 'حي'
  if (newStatus === 'ملغي' && animal.status !== 'حي') {
    console.warn('لا يمكن إلغاء الأضحية إلا إذا كانت حالتها "حي".');
    // Optionally, show a user-facing message here
    alert('لا يمكن إلغاء الأضحية إلا إذا كانت حالتها "حي".');
    emit('dataUpdated'); // Refresh to revert optimistic UI changes if any
    return;
  }

  try {
    isUpdatingAnimals.value = true;
    
    await customerStore.updateCustomerAnimal(
      props.selectedCustomer.id,
      animalId,
      { status: newStatus as AnimalStatus }
    );
    emit('dataUpdated'); // Emit event
  } catch (error) {
    console.error('خطأ في تحديث حالة الأضحية:', error);
  } finally {
    isUpdatingAnimals.value = false;
  }
};

const cancelConfirmation = () => {
  showConfirmDialog.value = false;
  confirmDialog.value = { title: '', message: '', action: null };
};

const executeConfirmation = () => {
  if (confirmDialog.value.action) {
    confirmDialog.value.action();
  }
  cancelConfirmation();
};

const generateAnimalId = (): string => {
  return `animal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Watch for customer changes
watch(() => props.selectedCustomer, (newCustomer) => {
  if (!newCustomer) {
    showAddForm.value = false;
  }
});
</script>

<style scoped lang="scss">
.customer-sacrifice-manager {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .manager-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    
    h3 {
      margin: 0 0 10px 0;
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .customer-info {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 0.95rem;
      opacity: 0.9;
      
      .customer-name {
        font-weight: 500;
      }
      
      .customer-phone {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
    
    /* Customer Notes Section */
    .customer-notes-section {
      margin-top: 10px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      
      .notes-display {
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        .notes-view {
          display: flex;
          align-items: center;
          gap: 10px;
          
          .notes-content {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #333;
            
            i {
              color: #667eea;
            }
          }
        }
        
        .notes-edit {
          display: flex;
          flex-direction: column;
          gap: 10px;
          
          .notes-textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 0.9rem;
            resize: none;
            outline: none;
            transition: border-color 0.2s ease;
            
            &:focus {
              border-color: #667eea;
            }
          }
          
          .notes-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
          }
          
          .notes-hint {
            text-align: right;
            color: #666;
            font-size: 0.85rem;
          }
        }
      }
    }
  }

  .manager-content {
    padding: 0;
  }

  .add-section, .list-section {
    border-bottom: 1px solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #f8f9fa;
    border-bottom: 1px solid #eee;
    
    h4 {
      margin: 0;
      color: #333;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 8px;
      
      i {
        color: #667eea;
      }
    }
    
    .summary-stats {
      display: flex;
      gap: 20px;
      
      .stat-item {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 0.9rem;
        color: #666;
        
        i {
          color: #667eea;
        }
      }
    }
  }

  .add-form-container {
    padding: 20px;
  }

  .empty-state {
    text-align: center;
    padding: 60px 20px;
    color: #999;
    
    i {
      margin-bottom: 20px;
      color: #ddd;
    }
    
    p {
      margin: 10px 0;
      font-size: 1.1rem;
      
      &.text-muted {
        font-size: 0.95rem;
        color: #bbb;
      }
    }
  }

  .btn {
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    
    &.btn-primary {
      background: #667eea;
      color: white;
      
      &:hover {
        background: #5a6fd8;
        transform: translateY(-1px);
      }
      
      &.active {
        background: #4c63d2;
      }
    }
    
    &.btn-secondary {
      background: #6c757d;
      color: white;
      font-weight: 600;
      border: 2px solid transparent;
      
      &:hover {
        background: #5a6268;
        color: white;
        border-color: #495057;
      }
    }
    
    &.btn-danger {
      background: #dc3545;
      color: white;
      font-weight: 600;
      border: 2px solid transparent;
      
      &:hover {
        background: #c82333;
        color: white;
        border-color: #bd2130;
      }
    }
  }

  /* Financial Summary Section */
  .financial-summary-section {
    padding: 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background: #f9f9f9;
    
    h4 {
      margin: 0 0 15px 0;
      color: #333;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 8px;
      
      i {
        color: #28a745;
      }
    }
    
    .summary-details {
      display: flex;
      flex-direction: column;
      gap: 10px;
      
      .summary-item {
        display: flex;
        justify-content: space-between;
        font-size: 0.95rem;
        color: #555;
        
        .label {
          font-weight: 500;
        }
        
        .value {
          font-weight: 700;
          &.total-animals-price {
            color: #007bff;
          }
          
          &.total-payments {
            color: #28a745;
          }
        }
      }
      
      .summary-divider {
        border: none;
        height: 1px;
        background: #ddd;
        margin: 10px 0;
      }
      
      .balance {
        &.balance-credit {
          color: #28a745;
        }
        
        &.balance-debit {
          color: #dc3545;
        }
        
        &.balance-zero {
          color: #666;
        }
      }
    }
  }

  /* Payments List Section */
  .payments-list-section {
    padding: 20px;
    border-bottom: 1px solid #eee;
    background: #f9f9f9;
    
    h4 {
      margin: 0 0 15px 0;
      color: #333;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 8px;
      
      i {
        color: #007bff;
      }
    }
    
    /* Placeholder styles for PaymentList component */
    .payment-placeholder {
      text-align: center;
      color: #999;
      padding: 40px 20px;
      
      i {
        font-size: 2rem;
        margin-bottom: 10px;
        color: #007bff;
      }
      
      p {
        margin: 0;
        font-size: 1rem;
      }
    }
  }

  .confirmation-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .confirmation-dialog {
    background: white;
    border-radius: 12px;
    min-width: 400px;
    max-width: 500px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    
    .dialog-header {
      padding: 20px 20px 0;
      
      h4 {
        margin: 0;
        color: #333;
      }
    }
    
    .dialog-body {
      padding: 15px 20px;
      
      p {
        margin: 0;
        color: #666;
        line-height: 1.5;
      }
    }
    
    .dialog-footer {
      padding: 0 20px 20px;
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }
  }

  .customer-notes-section {
    margin-top: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    
    .notes-view {
      display: flex;
      align-items: center;
      gap: 10px;
      
      .notes-content {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        
        i {
          color: #f39c12;
          font-size: 0.8rem;
        }
      }
    }
    
    .notes-edit {
      .notes-textarea {
        width: 100%;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 6px;
        padding: 10px;
        font-size: 0.9rem;
        resize: none;
        background: rgba(255, 255, 255, 0.9);
        color: #333;
        transition: border-color 0.2s ease-in-out;

        &:focus {
          border-color: #f39c12;
          outline: none;
          background: #fff;
        }
      }

      .notes-actions {
        margin-top: 8px;
        display: flex;
        gap: 8px;
      }

      .notes-hint {
        margin-top: 5px;
        text-align: right;
        
        small {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.75rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
      
      .summary-stats {
        align-self: stretch;
        justify-content: space-between;
      }
    }
    
    .confirmation-dialog {
      margin: 20px;
      min-width: auto;
    }
  }
}
</style>
