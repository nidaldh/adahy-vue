<template>
  <div class="customer-form-container card-style" dir="rtl">
    <h3>{{ editMode ? 'تعديل بيانات العميل' : 'إضافة عميل جديد' }}</h3>
    <form @submit.prevent="handleSubmit">
      <loading-spinner :loading="customersStore.loading" />
      <error-message v-if="customersStore.error" :message="customersStore.error" />

      <fieldset>
        <legend>بيانات العميل</legend>
        <div class="form-row">
          <div class="form-group">
            <label for="customerName">اسم العميل</label>
            <input type="text" id="customerName" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="customerPhone">رقم الهاتف</label>
            <input type="tel" id="customerPhone" v-model="formData.phone" />
          </div>
        </div>
        <div class="form-group">
          <label for="customerAddress">العنوان (اختياري)</label>
          <input type="text" id="customerAddress" v-model="formData.address" />
        </div>
        <div class="form-group">
          <label for="customerNotes">ملاحظات (اختياري)</label>
          <textarea id="customerNotes" v-model="formData.notes" rows="3"></textarea>
        </div>
      </fieldset>

      <fieldset>
        <legend>الأضاحي</legend>
        <div v-for="(animal, index) in formData.animals" :key="animal.id" class="animal-entry">
          <animal-form
            v-model="formData.animals[index]"
            :animal-index="index"
            @remove-animal="removeAnimal(index)"
          />
        </div>
        <button type="button" @click="addAnimal" class="btn btn-secondary btn-add-animal">
          <i class="fas fa-plus"></i> إضافة أضحية
        </button>
      </fieldset>

      <fieldset>
        <legend>بيانات الدفع</legend>
        <div class="payment-notice">
          <p><i class="fas fa-info-circle"></i> وظائف الدفع متاحة في صفحة إدارة المدفوعات</p>
        </div>
      </fieldset>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" :disabled="customersStore.loading">
          {{ editMode ? 'تحديث البيانات' : 'حفظ العميل' }}
        </button>
        <button type="button" @click="resetFormAndNotifyParent" class="btn btn-outline" v-if="editMode">
          إلغاء التعديل
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type PropType } from 'vue';
import { useCustomersStore, type Customer, type Animal, type NewCustomerData, type UpdateCustomerData } from '@/store/modules/customers';
import AnimalForm from '@/components/animal/AnimalForm.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  customerToEdit: {
    type: Object as PropType<Customer | null>,
    default: null
  }
});

const emit = defineEmits(['customer-saved']);

const customersStore = useCustomersStore();
const editMode = ref(false);

const initialAnimal = (): Animal => ({
  id: uuidv4(),
  type: '',
  number: '',
  count: 1,
  weight: 0,
  pricePerUnit: 0,
  total: 0,
  status: 'حي',
  compositeKey: '',
  createdAt: Date.now()
});

const initialFormData = () => ({
  name: '',
  phone: '',
  address: '',
  notes: '',
  animals: [initialAnimal()],
  payments: [] // Empty payments array for now
});

const formData = ref(initialFormData());

watch(() => props.customerToEdit, (newVal) => {
  if (newVal) {
    editMode.value = true;
    formData.value = {
      name: newVal.name,
      phone: newVal.phone || '',
      address: newVal.address || '',
      notes: newVal.notes || '',
      animals: newVal.animals && newVal.animals.length > 0 
                 ? newVal.animals.map(a => ({ ...a, id: a.id || uuidv4() })) 
                 : [initialAnimal()],
      payments: [] // Simplified - no payment editing for now
    };
  } else {
    if (editMode.value) {
        resetForm();
    }
    editMode.value = false;
  }
}, { immediate: true, deep: true });

const addAnimal = () => {
  formData.value.animals.push(initialAnimal());
};

const removeAnimal = (index: number) => {
  formData.value.animals.splice(index, 1);
};

const handleSubmit = async () => {
  if (!formData.value.name) {
    customersStore.setError("اسم العميل مطلوب.");
    return;
  }

  const processedAnimals = formData.value.animals.map(animal => ({
    ...animal,
    total: parseFloat(((animal.weight || 0) * (animal.pricePerUnit || 0)).toFixed(2)),
    compositeKey: `${animal.type}_${animal.number}`
  }));

  const customerDataPayload = {
    ...formData.value,
    animals: processedAnimals,
    payments: [] // Empty payments for now
  } as NewCustomerData;

  try {
    if (editMode.value && props.customerToEdit?.id) {
      await customersStore.updateCustomer({ ...customerDataPayload, id: props.customerToEdit.id } as UpdateCustomerData);
    } else {
      await customersStore.addCustomer(customerDataPayload);
    }
    emit('customer-saved');
  } catch (e) {
    console.error("Failed to save customer:", e);
  }
};

const resetForm = () => {
  formData.value = initialFormData();
};

const resetFormAndNotifyParent = () => {
  emit('customer-saved');
};

</script>

<style scoped lang="scss">
@use 'sass:color';

.customer-form-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

fieldset {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  
  legend {
    font-weight: bold;
    padding: 0 10px;
    color: #555;
  }
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  
  .form-group {
    flex: 1;
  }
}

.form-group {
  margin-bottom: 15px;
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #666;
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="number"],
  textarea,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    
    &:focus {
      border-color: var(--app-primary-color, #007bff);
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
  }
  
  textarea {
    min-height: 80px;
    resize: vertical;
  }
}

.animal-entry {
  border: 1px dashed #eee;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.btn-add-animal {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  
  i { 
    font-size: 0.8em; 
  }
}

.payment-notice {
  background-color: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 4px;
  padding: 15px;
  
  p {
    margin: 0;
    color: #1976d2;
    
    i {
      margin-left: 8px;
    }
  }
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: flex-end;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
}

.btn-primary {
  background-color: var(--app-primary-color, #007bff);
  color: white;
  
  &:hover { 
    background-color: color.scale(#007bff, $lightness: -10%); 
  }
  
  &:disabled { 
    background-color: #aaa; 
    cursor: not-allowed; 
  }
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  
  &:hover { 
    background-color: color.scale(#6c757d, $lightness: -10%); 
  }
}

.btn-outline {
  background-color: transparent;
  color: var(--app-primary-color, #007bff);
  border: 1px solid var(--app-primary-color, #007bff);
  
  &:hover { 
    background-color: rgba(0,123,255,.1); 
  }
}

.card-style {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
