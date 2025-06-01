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
          <h4>
            <i class="fas" :class="animalBeingEdited ? 'fa-edit' : 'fa-plus-circle'"></i>
            {{ animalBeingEdited ? 'تعديل بيانات الأضحية' : 'إضافة أضحية جديدة' }}
          </h4>
          <div class="header-actions">
            <button 
              v-if="!animalBeingEdited"
              @click="toggleAddForm" 
              class="btn btn-primary btn-sm"
              :class="{ 'active': showAddForm }"
            >
              <i class="fas" :class="showAddForm ? 'fa-minus' : 'fa-plus'"></i>
              {{ showAddForm ? 'إخفاء النموذج' : 'إظهار النموذج' }}
            </button>
            
            <button 
              v-if="animalBeingEdited"
              @click="cancelEdit" 
              class="btn btn-secondary btn-sm"
            >
              <i class="fas fa-times"></i>
              إلغاء التعديل
            </button>
          </div>
        </div>
        
        <!-- Success/Error Messages -->
        <div v-if="errorMessage" class="alert alert-error" role="alert">
          <i class="fas fa-exclamation-triangle"></i>
          <span>{{ errorMessage }}</span>
          <button @click="clearMessages" class="alert-close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div v-if="successMessage" class="alert alert-success" role="alert">
          <i class="fas fa-check-circle"></i>
          <span>{{ successMessage }}</span>
          <button @click="clearMessages" class="alert-close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div v-if="showAddForm || animalBeingEdited" class="add-form-container">
          <SacrificeForm
            @addSacrifice="handleAddSacrifice"
            @update-sacrifice="handleUpdateSacrifice"
            :is-loading="isAddingAnimal"
            :existing-animals="customerAnimals"
            :animalToEdit="animalBeingEdited"
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
          @request-edit-animal="handleRequestEdit"
          :highlight-animal-id="highlightedAnimalId"
        />
      </div>
    </div>

    <!-- Customer Discount Management Section -->
    <div v-if="selectedCustomer" class="discount-management-section card-style">
      <div class="section-header">
        <h4>
          <i class="fas fa-percentage"></i>
          إدارة خصم العميل
        </h4>
        <div class="header-actions">
          <button 
            v-if="!editingDiscount && !hasCustomerDiscount"
            @click="startAddingDiscount" 
            class="btn btn-primary btn-sm"
          >
            <i class="fas fa-plus"></i>
            إضافة خصم
          </button>
          
          <button 
            v-if="!editingDiscount && hasCustomerDiscount"
            @click="startEditingDiscount" 
            class="btn btn-outline btn-sm"
          >
            <i class="fas fa-edit"></i>
            تعديل الخصم
          </button>
          
          <button 
            v-if="!editingDiscount && hasCustomerDiscount"
            @click="confirmRemoveDiscount" 
            class="btn btn-danger btn-sm"
          >
            <i class="fas fa-trash"></i>
            إزالة الخصم
          </button>
          
          <button 
            v-if="editingDiscount"
            @click="cancelDiscountEditing" 
            class="btn btn-secondary btn-sm"
          >
            <i class="fas fa-times"></i>
            إلغاء
          </button>
        </div>
      </div>

      <!-- Current Discount Display -->
      <div v-if="!editingDiscount && hasCustomerDiscount" class="current-discount-display">
        <div class="discount-info">
          <div class="discount-amount">
            <span class="label">مبلغ الخصم:</span>
            <span class="value">{{ formatCurrency(selectedCustomer.discount) }}</span>
          </div>
          <div v-if="selectedCustomer.discountReason" class="discount-reason">
            <span class="label">السبب:</span>
            <span class="value">{{ selectedCustomer.discountReason }}</span>
          </div>
        </div>
      </div>

      <!-- No Discount Message -->
      <div v-if="!editingDiscount && !hasCustomerDiscount" class="no-discount-message">
        <i class="fas fa-info-circle"></i>
        <span>لا يوجد خصم مطبق على هذا العميل حالياً</span>
      </div>

      <!-- Discount Input Form -->
      <div v-if="editingDiscount" class="discount-edit-container">
        <DiscountInput
          v-model="currentDiscount"
          :total-amount="selectedCustomer.totalAmount || 0"
          :applied-by="'المستخدم الحالي'"
          @change="handleDiscountChange"
        />
        
        <div class="discount-actions">
          <button 
            @click="saveDiscount" 
            class="btn btn-primary"
            :disabled="savingDiscount || !isDiscountValid"
          >
            <i class="fas fa-save"></i>
            {{ savingDiscount ? 'جاري الحفظ...' : 'حفظ الخصم' }}
          </button>
          <button 
            @click="cancelDiscountEditing" 
            class="btn btn-secondary"
            :disabled="savingDiscount"
          >
            <i class="fas fa-times"></i>
            إلغاء
          </button>
        </div>
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
        
        <!-- Discount Information -->
        <div v-if="hasCustomerDiscount" class="summary-item discount-item">
          <span class="label">خصم العميل:</span>
          <span class="value discount-amount">- {{ formatCurrency(selectedCustomer.discount) }}</span>
        </div>
        <div v-if="hasCustomerDiscount && selectedCustomer.discountReason" class="summary-item discount-reason">
          <span class="label">سبب الخصم:</span>
          <span class="value reason-text">{{ selectedCustomer.discountReason }}</span>
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
import { ref, computed, watch, nextTick, defineEmits, onUnmounted, onMounted } from 'vue'; // Added defineEmits and onUnmounted
import { useCustomersStore } from '@/store/modules/customers';
import SacrificeForm from './SacrificeForm.vue';
import SacrificeList from './SacrificeList.vue';
import DiscountInput from '@/components/common/DiscountInput.vue';
import { hasActiveDiscount } from '@/utils/customerDiscounts';
// import PaymentList from '@/components/payment/PaymentList.vue'; // Path to be confirmed
import type { Customer, Animal } from '@/store/modules/customers';

interface Props {
  selectedCustomer: Customer | null;
  highlightAnimalId?: string | null;
}

const props = defineProps<Props>();
const customerStore = useCustomersStore();
const emit = defineEmits(['dataUpdated']); // Define the event

// Reactive state
const showAddForm = ref(false);
const isAddingAnimal = ref(false);
const isUpdatingAnimals = ref(false);
const showConfirmDialog = ref(false);
const animalBeingEdited = ref<Animal | null>(null);
const confirmDialog = ref({
  title: '',
  message: '',
  action: null as (() => void) | null
});
const editingNotes = ref(false);
const editingNotesText = ref('');
const savingNotes = ref(false);
const notesTextarea = ref<HTMLTextAreaElement | null>(null);
const highlightedAnimalId = ref<string | null>(null);

// Discount management state
const editingDiscount = ref(false);
const savingDiscount = ref(false);
const currentDiscount = ref<{amount: number; reason?: string} | null>(null);

// Message state for user feedback
const errorMessage = ref('');
const successMessage = ref('');
const messageTimeout = ref<NodeJS.Timeout | null>(null);

// Helper function to format currency
const formatCurrency = (value: number | undefined) => {
  if (typeof value !== 'number' || isNaN(value)) return 'N/A';
  return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(value);
};

// Watch for changes in the highlightAnimalId prop
watch(() => props.highlightAnimalId, (newValue) => {
  highlightedAnimalId.value = newValue;
});

// Message management functions
const showErrorMessage = (message: string) => {
  errorMessage.value = message;
  successMessage.value = '';
  
  // Clear any existing timeout
  if (messageTimeout.value) {
    clearTimeout(messageTimeout.value);
  }
  
  // Auto-dismiss after 5 seconds
  messageTimeout.value = setTimeout(() => {
    errorMessage.value = '';
  }, 5000);
};

const showSuccessMessage = (message: string) => {
  successMessage.value = message;
  errorMessage.value = '';
  
  // Clear any existing timeout
  if (messageTimeout.value) {
    clearTimeout(messageTimeout.value);
  }
  
  // Auto-dismiss after 3 seconds
  messageTimeout.value = setTimeout(() => {
    successMessage.value = '';
  }, 3000);
};

const clearMessages = () => {
  errorMessage.value = '';
  successMessage.value = '';
  if (messageTimeout.value) {
    clearTimeout(messageTimeout.value);
    messageTimeout.value = null;
  }
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

const hasCustomerDiscount = computed(() => {
  return props.selectedCustomer && hasActiveDiscount(props.selectedCustomer.discount);
});

const isDiscountValid = computed(() => {
  return currentDiscount.value && 
         currentDiscount.value.amount > 0 && 
         currentDiscount.value.amount <= (props.selectedCustomer?.totalAmount || 0);
});

// Discount management methods
const startAddingDiscount = () => {
  editingDiscount.value = true;
  currentDiscount.value = {
    amount: 0,
    reason: ''
  };
};

const startEditingDiscount = () => {
  if (!props.selectedCustomer) return;
  
  editingDiscount.value = true;
  currentDiscount.value = {
    amount: props.selectedCustomer.discount || 0,
    reason: props.selectedCustomer.discountReason || ''
  };
};

const cancelDiscountEditing = () => {
  editingDiscount.value = false;
  currentDiscount.value = null;
};

const saveDiscount = async () => {
  if (!props.selectedCustomer || !currentDiscount.value || savingDiscount.value) return;
  
  try {
    savingDiscount.value = true;
    clearMessages();
    
    await customerStore.applyCustomerDiscount(
      props.selectedCustomer.id,
      currentDiscount.value.amount,
      currentDiscount.value.reason || 'خصم عميل',
      'المستخدم الحالي'
    );
    
    editingDiscount.value = false;
    currentDiscount.value = null;
    emit('dataUpdated');
    
    showSuccessMessage('تم حفظ خصم العميل بنجاح');
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'حدث خطأ غير متوقع أثناء حفظ الخصم';
    showErrorMessage(errorMsg);
  } finally {
    savingDiscount.value = false;
  }
};

const confirmRemoveDiscount = () => {
  if (!props.selectedCustomer) return;
  
  confirmDialog.value = {
    title: 'تأكيد إزالة الخصم',
    message: `هل أنت متأكد من رغبتك في إزالة خصم العميل (${formatCurrency(props.selectedCustomer.discount)})?`,
    action: removeDiscount
  };
  showConfirmDialog.value = true;
};

const removeDiscount = async () => {
  if (!props.selectedCustomer) return;
  
  try {
    clearMessages();
    
    await customerStore.removeCustomerDiscount(props.selectedCustomer.id);
    
    emit('dataUpdated');
    showSuccessMessage('تم إزالة خصم العميل بنجاح');
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'حدث خطأ غير متوقع أثناء إزالة الخصم';
    showErrorMessage(errorMsg);
  }
};

const handleDiscountChange = (discountData: {amount: number; reason?: string}) => {
  currentDiscount.value = discountData;
};

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
    clearMessages(); // Clear any existing messages
    
    await customerStore.updateCustomer({
      id: props.selectedCustomer.id,
      notes: editingNotesText.value.trim()
    });
    
    editingNotes.value = false;
    editingNotesText.value = '';
    emit('dataUpdated'); // Emit event
    
    showSuccessMessage('تم حفظ الملاحظات بنجاح');
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'حدث خطأ غير متوقع أثناء حفظ الملاحظات';
    showErrorMessage(errorMsg);
  } finally {
    savingNotes.value = false;
  }
};

// Methods
const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
  
  // Clear form data if hiding the form
  if (!showAddForm.value) {
    animalBeingEdited.value = null;
  }
};

const handleAddSacrifice = async (animalData: Omit<Animal, 'id' | 'createdAt'>) => {
  if (!props.selectedCustomer) return;

  try {
    isAddingAnimal.value = true;
    clearMessages(); // Clear any existing messages
    
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
    
    showSuccessMessage('تم إضافة الأضحية بنجاح');
    
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'حدث خطأ غير متوقع أثناء إضافة الأضحية';
    showErrorMessage(errorMsg);
  } finally {
    isAddingAnimal.value = false;
  }
};

const handleUpdateStatus = async (animalId: string, newStatus: string) => {
  if (!props.selectedCustomer) return;

  const animal = customerAnimals.value.find(a => a.id === animalId);
  if (!animal) {
    showErrorMessage('لم يتم العثور على الأضحية للتحديث');
    return;
  }

  // Validate status
  const validStatuses = ['حي', 'جاهز', 'مذبوح', 'ملغي'] as const;
  type AnimalStatus = typeof validStatuses[number];

  if (!validStatuses.includes(newStatus as AnimalStatus)) {
    showErrorMessage('حالة غير صحيحة: ' + newStatus);
    return;
  }

  // Restriction: Animal can only be cancelled if its current status is 'حي'
  if (newStatus === 'ملغي' && animal.status !== 'حي') {
    showErrorMessage('لا يمكن إلغاء الأضحية إلا إذا كانت حالتها "حي"');
    emit('dataUpdated'); // Refresh to revert optimistic UI changes if any
    return;
  }

  try {
    isUpdatingAnimals.value = true;
    clearMessages(); // Clear any existing messages
    
    await customerStore.updateCustomerAnimal(
      props.selectedCustomer.id,
      animalId,
      { status: newStatus as AnimalStatus }
    );
    emit('dataUpdated'); // Emit event
    
    showSuccessMessage('تم تحديث حالة الأضحية بنجاح');
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'حدث خطأ غير متوقع أثناء تحديث حالة الأضحية';
    showErrorMessage(errorMsg);
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

// Edit-related methods
const handleRequestEdit = (animal: Animal) => {
  animalBeingEdited.value = animal;
  showAddForm.value = true; // Ensure form is visible
};

const cancelEdit = () => {
  animalBeingEdited.value = null;
  showAddForm.value = false;
};

const handleUpdateSacrifice = async (updatedAnimalData: Animal) => {
  if (!props.selectedCustomer || !animalBeingEdited.value) return;

  try {
    isAddingAnimal.value = true;
    clearMessages(); // Clear any existing messages
    
    await customerStore.updateAnimalDetails({
      customerId: props.selectedCustomer.id,
      animalId: animalBeingEdited.value.id,
      updates: updatedAnimalData
    });

    animalBeingEdited.value = null;
    showAddForm.value = false;
    emit('dataUpdated');
    
    showSuccessMessage('تم تحديث الأضحية بنجاح');
    
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'حدث خطأ غير متوقع أثناء تحديث الأضحية';
    showErrorMessage(errorMsg);
  } finally {
    isAddingAnimal.value = false;
  }
};

// Watch for customer changes
watch(() => props.selectedCustomer, (newCustomer) => {
  if (!newCustomer) {
    showAddForm.value = false;
  }
});

// Initialize highlightAnimalId from props
onMounted(() => {
  if (props.highlightAnimalId) {
    highlightedAnimalId.value = props.highlightAnimalId;
  }
});

// Clean up timeout on component unmount
onUnmounted(() => {
  if (messageTimeout.value) {
    clearTimeout(messageTimeout.value);
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
    
    .header-actions {
      display: flex;
      gap: 10px;
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
    
    &.btn-outline {
      background: transparent;
      color: #6c757d;
      border: 1px solid #6c757d;
      
      &:hover {
        background: #6c757d;
        color: white;
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
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      
      &:hover {
        transform: none !important;
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
        
        /* Enhanced discount display in summary */
        &.discount-item .value.discount-amount {
          color: #fd7e14;
          font-weight: 700;
        }
        
        &.discount-reason .value.reason-text {
          color: #6c757d;
          font-style: italic;
          font-size: 0.9rem;
        }
      }
      
      .summary-divider {
        border: none;
        height: 1px;
        background: #ddd;
        margin: 10px 0;
      }
      
      .balance {
        .value {
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
  }

  /* Discount Management Section */
  .discount-management-section {
    padding: 20px;
    border-bottom: 1px solid #eee;
    background: #f8f9fa;
    
    .section-header {
      margin-bottom: 20px;
      
      h4 {
        color: #495057;
        
        i {
          color: #fd7e14;
        }
      }
      
      .header-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    }
    
    .current-discount-display {
      background: #fff;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      
      .discount-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
        
        .discount-amount,
        .discount-reason,
        .discount-applied-by,
        .discount-applied-at {
          display: flex;
          flex-direction: column;
          gap: 4px;
          
          .label {
            font-size: 0.85rem;
            color: #6c757d;
            font-weight: 500;
          }
          
          .value {
            font-size: 0.95rem;
            color: #333;
            font-weight: 600;
          }
        }
        
        .discount-amount .value {
          color: #fd7e14;
          font-size: 1.1rem;
        }
      }
    }
    
    .no-discount-message {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px;
      background: #e3f2fd;
      border: 1px solid #bbdefb;
      border-radius: 8px;
      color: #1976d2;
      font-size: 0.9rem;
      
      i {
        color: #2196f3;
      }
    }
    
    .discount-edit-container {
      background: #fff;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 20px;
      
      .discount-actions {
        margin-top: 20px;
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        flex-wrap: wrap;
        
        @media (max-width: 768px) {
          justify-content: stretch;
          
          .btn {
            flex: 1;
          }
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

  // Alert messages styles
  .alert {
    padding: 12px 16px;
    border-radius: 6px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    position: relative;
    
    i {
      font-size: 1rem;
    }
    
    .alert-close {
      position: absolute;
      top: 8px;
      left: 8px;
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 4px;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    
    &.alert-error {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      
      i {
        color: #dc3545;
      }
    }
    
    &.alert-success {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      
      i {
        color: #28a745;
      }
    }
  }

  /* Card style for consistent section styling */
  .card-style {
    background: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
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
