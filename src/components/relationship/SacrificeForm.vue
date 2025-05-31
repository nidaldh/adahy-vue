<template>  <div class="sacrifice-form" dir="rtl">    <div class="form-header">      <h4><i class="fas fa-plus-circle"></i> إضافة أضحية جديدة</h4>    </div>    
    <form @submit.prevent="handleSubmit" class="sacrifice-form-content">
      <div class="form-grid">
        <!-- Animal Type -->
        <div class="form-group">
          <label for="animalType" class="form-label">
            <i class="fas fa-paw"></i>
            نوع الأضحية *
          </label>
          <select 
            id="animalType" 
            v-model="formData.type" 
            required 
            class="form-input"
            :class="{ 'is-invalid': errors.type }"
          >
            <option value="" disabled>اختر نوع الأضحية</option>
            <option value="خروف">خروف</option>
            <option value="تيس">تيس</option>
            <option value="عجل">عجل</option>
            <option value="جمل">جمل</option>
            <option value="بقر">بقر</option>
          </select>
          <div v-if="errors.type" class="error-message">{{ errors.type }}</div>
        </div>

        <!-- Animal Number/ID -->
        <div class="form-group">
          <label for="animalNumber" class="form-label">
            <i class="fas fa-tag"></i>
            رقم الأضحية/التعريف *
          </label>
          <input 
            id="animalNumber"
            type="text" 
            v-model="formData.number" 
            required 
            placeholder="مثال: A101، خروف_1"
            class="form-input"
            :class="{ 'is-invalid': errors.number }"
            @blur="validateUniqueNumber"
          />
          <div v-if="errors.number" class="error-message">{{ errors.number }}</div>
          <small class="field-hint">رقم فريد لتمييز الأضحية</small>
        </div>

        <!-- Weight -->
        <div class="form-group">
          <label for="animalWeight" class="form-label">
            <i class="fas fa-weight-hanging"></i>
            الوزن (كجم) *
          </label>
          <input 
            id="animalWeight"
            type="number" 
            v-model.number="formData.weight" 
            step="0.1" 
            min="0"
            required 
            placeholder="مثال: 25.5"
            class="form-input"
            :class="{ 'is-invalid': errors.weight }"
            @input="calculateTotal"
          />
          <div v-if="errors.weight" class="error-message">{{ errors.weight }}</div>
        </div>

        <!-- Price per KG -->
        <div class="form-group">
          <label for="animalPrice" class="form-label">
            <i class="fas fa-money-bill-wave"></i>
            سعر الكيلو (شيكل) *
          </label>
          <input 
            id="animalPrice"
            type="number" 
            v-model.number="formData.pricePerUnit" 
            step="0.01" 
            min="0"
            required 
            placeholder="مثال: 35.00"
            class="form-input"
            :class="{ 'is-invalid': errors.pricePerUnit }"
            @input="calculateTotal"
          />
          <div v-if="errors.pricePerUnit" class="error-message">{{ errors.pricePerUnit }}</div>
        </div>

        <!-- Total Price (Read-only) -->
        <div class="form-group">
          <label for="animalTotal" class="form-label">
            <i class="fas fa-calculator"></i>
            المجموع (شيكل)
          </label>
          <input 
            id="animalTotal"
            type="number" 
            :value="calculatedTotal" 
            readonly 
            class="form-input total-input"
            placeholder="0.00"
          />
        </div>

        <!-- Status -->
        <div class="form-group">
          <label for="animalStatus" class="form-label">
            <i class="fas fa-heartbeat"></i>
            حالة الأضحية
          </label>
          <select 
            id="animalStatus" 
            v-model="formData.status" 
            class="form-input"
          >
            <option value="حي">حي</option>
            <option value="جاهز">جاهز</option>
            <option value="مذبوح">مذبوح</option>
            <option value="ملغي">ملغي</option>
          </select>
        </div>

        <!-- Notes -->
        <div class="form-group full-width">
          <label for="animalNotes" class="form-label">
            <i class="fas fa-sticky-note"></i>
            ملاحظات
          </label>
          <textarea 
            id="animalNotes"
            v-model="formData.notes" 
            rows="3"
            placeholder="ملاحظات اختيارية حول الأضحية..."
            class="form-input"
          ></textarea>
          <small class="field-hint">ملاحظات اختيارية مثل صفات خاصة أو تعليمات</small>
        </div>
      </div>

      <!-- Form Actions -->
      <div class="form-actions">
        <button 
          type="submit" 
          class="btn btn-primary"
          :disabled="isLoading || !isFormValid"
        >
          <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
          <i v-else class="fas fa-plus"></i>
          {{ isLoading ? 'جاري الإضافة...' : 'إضافة الأضحية' }}
        </button>
        
        <button 
          type="button" 
          @click="resetForm" 
          class="btn btn-secondary"
          :disabled="isLoading"
        >
          <i class="fas fa-eraser"></i>
          مسح الحقول
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Animal } from '@/store/modules/customers';

const props = defineProps<{
  isLoading: boolean;
  existingAnimals?: Animal[];
}>();

const emit = defineEmits<{
  addSacrifice: [animalData: Omit<Animal, 'id' | 'createdAt'>];
}>();

// Form data
const formData = ref({
  type: '',
  number: '',
  weight: 0,
  pricePerUnit: 0,
  status: 'حي' as const,
  notes: ''
});

// Form state
const errors = ref<Record<string, string>>({});

// Computed properties
const calculatedTotal = computed(() => {
  return (formData.value.weight || 0) * (formData.value.pricePerUnit || 0);
});

const isFormValid = computed(() => {
  return formData.value.type && 
         formData.value.number && 
         formData.value.weight > 0 && 
         formData.value.pricePerUnit > 0 &&
         !Object.keys(errors.value).length;
});

// Methods
const calculateTotal = () => {
  // The total is automatically calculated via the computed property
};

const validateUniqueNumber = async () => {
  if (formData.value.type && formData.value.number) {
    // Check against existing animals in current customer
    const isDuplicate = props.existingAnimals?.some(animal => 
      animal.type === formData.value.type && animal.number === formData.value.number
    );
    
    if (isDuplicate) {
      errors.value.number = 'هذا الرقم مستخدم بالفعل لنفس نوع الأضحية';
    } else {
      delete errors.value.number;
    }
  }
};

const validateForm = () => {
  errors.value = {};

  if (!formData.value.type) {
    errors.value.type = 'نوع الأضحية مطلوب';
  }

  if (!formData.value.number) {
    errors.value.number = 'رقم الأضحية مطلوب';
  }

  if (!formData.value.weight || formData.value.weight <= 0) {
    errors.value.weight = 'الوزن يجب أن يكون أكبر من صفر';
  }

  if (!formData.value.pricePerUnit || formData.value.pricePerUnit <= 0) {
    errors.value.pricePerUnit = 'السعر يجب أن يكون أكبر من صفر';
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
  if (!validateForm()) {
    return;
  }

  const animalData: Omit<Animal, 'id' | 'createdAt'> = {
    type: formData.value.type,
    number: formData.value.number,
    count: 1, // Individual animal, so count is always 1
    weight: formData.value.weight,
    pricePerUnit: formData.value.pricePerUnit,
    status: formData.value.status,
    total: calculatedTotal.value,
    compositeKey: `${formData.value.type}_${formData.value.number}`,
    notes: formData.value.notes || undefined
  };

  emit('addSacrifice', animalData);
  resetForm();
};

const resetForm = () => {
  formData.value = {
    type: '',
    number: '',
    weight: 0,
    pricePerUnit: 0,
    status: 'حي',
    notes: ''
  };
  errors.value = {};
};
</script>

<style scoped lang="scss">
.sacrifice-form {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  
  .form-header {
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
    padding: 15px 20px;
    
    h4 {
      margin: 0;
      font-size: 1.1rem;
      
      i {
        margin-left: 10px;
      }
    }
  }
  
  .sacrifice-form-content {
    padding: 20px;
    
    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 25px;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      
      &.full-width {
        grid-column: 1 / -1;
      }
      
      .form-label {
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #2c3e50;
        margin-bottom: 8px;
        font-size: 0.95rem;
        
        i {
          margin-left: 8px;
          color: #3498db;
          width: 16px;
        }
      }
      
      .form-input {
        padding: 10px 12px;
        border: 2px solid #e0e0e0;
        border-radius: 6px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        
        &:focus {
          outline: none;
          border-color: #3498db;
        }
        
        &.is-invalid {
          border-color: #e74c3c;
        }
        
        &.total-input {
          background-color: #f8f9fa;
          font-weight: bold;
          color: #27ae60;
        }
        
        &::placeholder {
          color: #bdc3c7;
        }
      }
      
      .error-message {
        color: #e74c3c;
        font-size: 0.85rem;
        margin-top: 5px;
        
        &::before {
          content: "⚠ ";
        }
      }
      
      .field-hint {
        color: #7f8c8d;
        font-size: 0.8rem;
        margin-top: 3px;
      }
    }
    
    .form-actions {
      display: flex;
      gap: 15px;
      justify-content: flex-start;
      padding-top: 20px;
      border-top: 1px solid #ecf0f1;
    }
  }
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &.btn-primary {
    background: linear-gradient(135deg, #27ae60, #229954);
    color: white;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #229954, #1e8449);
      transform: translateY(-1px);
    }
  }
  
  &.btn-secondary {
    background: #ecf0f1;
    color: #2c3e50;
    
    &:hover:not(:disabled) {
      background: #d5dbdb;
    }
  }
}

@media (max-width: 768px) {
  .sacrifice-form {
    .sacrifice-form-content {
      padding: 15px;
      
      .form-grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }
      
      .form-actions {
        flex-direction: column;
        
        .btn {
          justify-content: center;
        }
      }
    }
  }
}
</style>
