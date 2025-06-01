<template>
  <div class="sacrifice-form" dir="rtl">
    <div class="form-header">
      <h4><i class="fas" :class="props.animalToEdit ? 'fa-edit' : 'fa-plus-circle'"></i> {{ props.animalToEdit ? 'تعديل بيانات الأضحية' : 'إضافة أضحية جديدة' }}</h4>
    </div>

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
            @blur="() => validateField('type')"
            @change="clearError('type')"
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
            placeholder="مثال: A101، خروف_1 أو -"
            class="form-input"
            :class="{ 'is-invalid': errors.number }"
            @input="clearError('number')"
            @blur="() => validateField('number')"
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
            type="text" 
            v-model="formData.weight"
            placeholder="مثال: 25.5 أو -"
            class="form-input"
            :class="{ 'is-invalid': errors.weight }"
            @input="clearError('weight')" 
            @blur="() => validateField('weight')"
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
            type="text" 
            v-model="formData.pricePerUnit"
            placeholder="مثال: 35.00 أو -"
            class="form-input"
            :class="{ 'is-invalid': errors.pricePerUnit }"
            @input="clearError('pricePerUnit')"
            @blur="() => validateField('pricePerUnit')"
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
            placeholder="ملاحظات اختيارية حول الأضحية، أو -"
            class="form-input"
            @input="clearError('notes')"
            @blur="() => validateField('notes')"
          ></textarea>
          <div v-if="errors.notes" class="error-message">{{ errors.notes }}</div>
          <small class="field-hint">ملاحظات اختيارية مثل صفات خاصة أو تعليمات</small>
        </div>
      </div>

      <!-- Form Actions -->
      <div class="form-actions">
        <button 
          type="submit" 
          class="btn btn-primary"
          :disabled="isLoading || !isFormOverallValid"
        >
          <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
          <i v-else class="fas" :class="props.animalToEdit ? 'fa-save' : 'fa-plus'"></i>
          {{ isLoading ? (props.animalToEdit ? 'جاري التحديث...' : 'جاري الإضافة...') : (props.animalToEdit ? 'تحديث البيانات' : 'إضافة الأضحية') }}
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
import { ref, computed, watch } from 'vue';
import type { Animal } from '@/store/modules/customers';

const props = defineProps<{
  isLoading: boolean;
  existingAnimals?: Animal[];
  animalToEdit?: Animal | null;
}>();

const emit = defineEmits<{
  addSacrifice: [animalData: Omit<Animal, 'id' | 'createdAt'>];
  'update-sacrifice': [animalData: Animal];
}>();

// Form data
const formData = ref({
  type: '',
  number: '' as string | number, // Can be '-', empty, or actual string/number for uniqueness check
  weight: '' as string | number, // Can be '-', empty, or numeric string
  pricePerUnit: '' as string | number, // Can be '-', empty, or numeric string
  status: 'حي' as 'حي' | 'جاهز' | 'مذبوح' | 'ملغي',
  notes: '' as string | number // Can be '-', empty, or actual string
});

// Form state
const errors = ref<Record<string, string>>({});

const clearError = (fieldName: keyof typeof formData.value) => {
  if (errors.value[fieldName]) {
    delete errors.value[fieldName];
  }
};

// Helper to parse numeric fields
const parseNumericInput = (value: string | number): number => {
  if (value === '-' || String(value).trim() === '') return 0;
  const parsed = parseFloat(String(value));
  return isNaN(parsed) ? 0 : parsed;
};

// Computed properties
const calculatedTotal = computed(() => {
  const weight = parseNumericInput(formData.value.weight);
  const pricePerUnit = parseNumericInput(formData.value.pricePerUnit);
  return parseFloat((weight * pricePerUnit).toFixed(2));
});

const validateField = (fieldName: keyof typeof formData.value) => {
  clearError(fieldName); // Clear previous error for this field first

  switch (fieldName) {
    case 'type':
      if (!formData.value.type) {
        errors.value.type = 'نوع الأضحية مطلوب';
      }
      break;
    case 'number':
      // Treat number as string for validation, including '-'
      const currentNumberStr = String(formData.value.number).trim();
      if (!currentNumberStr || currentNumberStr === '-') {
        errors.value.number = 'رقم الأضحية مطلوب';
      } else if (formData.value.type) { 
        const isDuplicate = props.existingAnimals?.some(animal =>
          animal.type === formData.value.type &&
          String(animal.number) === currentNumberStr && // Compare as strings
          (!props.animalToEdit || animal.id !== props.animalToEdit.id)
        );
        if (isDuplicate) {
          errors.value.number = 'هذا الرقم مستخدم بالفعل لنفس نوع الأضحية';
        }
      }
      break;
    case 'weight':
      if (parseNumericInput(formData.value.weight) <= 0) {
        errors.value.weight = 'الوزن يجب أن يكون أكبر من صفر';
      }
      break;
    case 'pricePerUnit':
      if (parseNumericInput(formData.value.pricePerUnit) <= 0) {
        errors.value.pricePerUnit = 'السعر يجب أن يكون أكبر من صفر';
      }
      break;
    case 'notes':
      // Notes are optional. If it becomes required or has specific validation:
      // const currentNotesStr = String(formData.value.notes).trim();
      // if (!currentNotesStr || currentNotesStr === '-') {
      //   errors.value.notes = 'الملاحظات مطلوبة'; // Example
      // }
      break;
  }
};

const validateAllFields = (): boolean => {
  // errors.value = {}; // Don't clear here, validateField clears individually
  validateField('type');
  validateField('number');
  validateField('weight');
  validateField('pricePerUnit');
  // validateField('notes'); // if notes had validation
  return Object.keys(errors.value).length === 0;
};

const isFormOverallValid = computed(() => {
  // Check for presence of required fields and positive numeric values
  if (!formData.value.type) return false;
  
  const numberStr = String(formData.value.number).trim();
  if (!numberStr || numberStr === '-') return false;

  if (formData.value.type && numberStr && numberStr !== '-') {
      const isDuplicate = props.existingAnimals?.some(animal =>
        animal.type === formData.value.type &&
        String(animal.number) === numberStr &&
        (!props.animalToEdit || animal.id !== props.animalToEdit.id)
      );
      if (isDuplicate) return false;
  }

  if (parseNumericInput(formData.value.weight) <= 0) return false;
  if (parseNumericInput(formData.value.pricePerUnit) <= 0) return false;
  
  // Check if any errors are currently set from previous validations
  return Object.keys(errors.value).length === 0;
});

const resetForm = () => {
  formData.value = {
    type: '',
    number: '',
    weight: '',
    pricePerUnit: '',
    status: 'حي',
    notes: ''
  };
  errors.value = {}; // Clear all errors on reset
};

const handleSubmit = () => {
  if (!validateAllFields()) { 
    return;
  }

  const finalWeight = parseNumericInput(formData.value.weight);
  const finalPricePerUnit = parseNumericInput(formData.value.pricePerUnit);
  
  const finalNumber = (String(formData.value.number).trim() === '-' || String(formData.value.number).trim() === '') 
    ? '' 
    : String(formData.value.number).trim();
  const finalNotes = (String(formData.value.notes).trim() === '-' || String(formData.value.notes).trim() === '') 
    ? '' 
    : String(formData.value.notes).trim();

  const animalPayload = {
    type: formData.value.type,
    number: finalNumber,
    weight: finalWeight,
    pricePerUnit: finalPricePerUnit,
    status: formData.value.status,
    notes: finalNotes,
    compositeKey: `${formData.value.type}_${finalNumber}`,
    total: parseFloat((finalWeight * finalPricePerUnit).toFixed(2)),
    count: 1
  };

  if (props.animalToEdit) {
    const updatedAnimal: Animal = {
      ...props.animalToEdit, 
      ...animalPayload
    };
    emit('update-sacrifice', updatedAnimal);
  } else {
    emit('addSacrifice', animalPayload as Omit<Animal, 'id' | 'createdAt'>);
    resetForm();
  }
};

watch(() => props.animalToEdit, (newAnimal) => {
  if (newAnimal) {
    formData.value = {
      type: newAnimal.type,
      number: (newAnimal.number === null || newAnimal.number === undefined || String(newAnimal.number).trim() === '') ? '-' : String(newAnimal.number),
      weight: (newAnimal.weight === null || newAnimal.weight === undefined || String(newAnimal.weight).trim() === '') ? '-' : String(newAnimal.weight),
      pricePerUnit: (newAnimal.pricePerUnit === null || newAnimal.pricePerUnit === undefined || String(newAnimal.pricePerUnit).trim() === '') ? '-' : String(newAnimal.pricePerUnit),
      status: newAnimal.status,
      notes: (newAnimal.notes === null || newAnimal.notes === undefined || String(newAnimal.notes).trim() === '') ? '-' : String(newAnimal.notes)
    };
    errors.value = {}; 
  } else {
    resetForm();
  }
}, { immediate: true });

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
