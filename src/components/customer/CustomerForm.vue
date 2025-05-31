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
        <div v-for="(payment, index) in formData.payments" :key="payment.id" class="payment-entry">
          <div class="payment-row">
            <div class="form-group payment-group">
              <label :for="`paymentAmount-${index}`">المبلغ</label>
              <input :id="`paymentAmount-${index}`" type="number" v-model.number="payment.amount" placeholder="المبلغ" min="0" step="any" />
            </div>
            <div class="form-group payment-group">
              <label :for="`paymentCurrency-${index}`">العملة</label>
              <select :id="`paymentCurrency-${index}`" v-model="payment.currency" @change="handlePaymentCurrencyChange(payment, index)">
                <option value="NIS">شيكل (NIS)</option>
                <option value="JOD">دينار أردني (JOD)</option>
                <option value="USD">دولار أمريكي (USD)</option>
              </select>
            </div>
            <div class="form-group payment-group" v-if="payment.currency === 'JOD' || payment.currency === 'USD'">
              <label :for="`paymentNisEquivalent-${index}`">المقابل بالشيكل <span class="required-star">*</span></label>
              <input :id="`paymentNisEquivalent-${index}`" type="number" v-model.number="payment.nisEquivalent" placeholder="القيمة بالشيكل" min="0" step="any" required />
            </div>
            <button type="button" @click="removePaymentPart(index)" class="btn btn-danger remove-payment-btn" v-if="formData.payments.length > 1">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <button type="button" @click="addPaymentPart" class="btn btn-secondary btn-add-payment">
          <i class="fas fa-plus"></i> إضافة جزء دفع
        </button>
        <div class="total-payment-display" v-if="formData.payments.length > 0">
          إجمالي المدفوع (شيكل): {{ totalPaymentInNIS.toFixed(2) }}
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
import { ref, watch, type PropType, computed } from 'vue';
import { useCustomersStore, type Customer, type Animal, type PaymentDetail, type NewCustomerData, type UpdateCustomerData } from '@/store/modules/customers';
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

const initialAnimal = (): Omit<Animal, 'total' | 'compositeKey'> & Partial<Pick<Animal, 'id' | 'status'>> => ({
  id: uuidv4(), // Temporary client-side ID for v-for key
  type: '',
  number: '',
  weight: 0,
  price: 0,
  total: 0,
  status: 'حي',
  // compositeKey is calculated on submit
});

const initialPaymentDetail = (): Omit<PaymentDetail, 'id'> & Partial<Pick<PaymentDetail, 'id'>> => ({
  id: uuidv4(),
  amount: 0,
  currency: 'NIS',
  nisEquivalent: undefined, // Undefined initially, to be filled if currency is not NIS
  paymentDate: Date.now(),
});

const initialFormData = (): Omit<Customer, 'id' | 'createdAt' | 'updatedAt' | 'totalAmount' | 'balance' | 'totalPaidNIS'> & { payments: Array<Omit<PaymentDetail, 'id'> & Partial<Pick<PaymentDetail, 'id'>>> } => ({
  name: '',
  phone: '',
  address: '',
  notes: '',
  animals: [initialAnimal()],
  payments: [initialPaymentDetail()], // Initialize with one payment part
});

const formData = ref(initialFormData());

// Computed property to calculate total NIS from payments
const totalPaymentInNIS = computed(() => {
  return formData.value.payments.reduce((acc, payment) => {
    if (payment.currency === 'NIS') {
      return acc + (Number(payment.amount) || 0);
    }
    return acc + (Number(payment.nisEquivalent) || 0);
  }, 0);
});

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
      payments: newVal.payments && newVal.payments.length > 0 
                  ? newVal.payments.map(p => ({ ...p, id: p.id || uuidv4(), nisEquivalent: p.currency !== 'NIS' ? p.nisEquivalent : undefined })) 
                  : [initialPaymentDetail()],
    };
  } else {
    // This condition is met when creating a new customer or after 'Cancel Edit'
    // or after a save operation if the parent clears `customerToEdit`.
    if (editMode.value) { // Only reset if was in edit mode
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

const addPaymentPart = () => {
  formData.value.payments.push(initialPaymentDetail());
};

const removePaymentPart = (index: number) => {
  if (formData.value.payments.length > 1) { // Keep at least one payment part
    formData.value.payments.splice(index, 1);
  } else {
    // Optionally, reset the single payment part if removal is attempted
    formData.value.payments[0] = initialPaymentDetail();
  }
};

const handlePaymentCurrencyChange = (payment: Omit<PaymentDetail, 'id'> & Partial<Pick<PaymentDetail, 'id'>>, index: number) => {
  if (payment.currency === 'NIS') {
    formData.value.payments[index].nisEquivalent = undefined; // Clear NIS equivalent if currency is NIS
    formData.value.payments[index].amount = formData.value.payments[index].amount || 0; // Ensure amount is a number
  } else {
    // If switching to JOD/USD, ensure nisEquivalent is a number (or 0 if not yet set)
    formData.value.payments[index].nisEquivalent = formData.value.payments[index].nisEquivalent || 0;
  }
};

const handleSubmit = async () => {
  if (!formData.value.name) {
    customersStore.setError("اسم العميل مطلوب.");
    return;
  }

  const processedAnimals = formData.value.animals.map(animal => ({
    ...animal,
    total: parseFloat(((animal.weight || 0) * (animal.price || 0)).toFixed(2)),
    compositeKey: `${animal.type}-${animal.number}` // Ensure type and number are present
  }));

  const processedPayments = formData.value.payments.map(payment => {
    const amount = Number(payment.amount) || 0;
    let nisEquivalent = payment.currency === 'NIS' ? amount : (Number(payment.nisEquivalent) || 0);

    if ((payment.currency === 'JOD' || payment.currency === 'USD') && nisEquivalent <= 0 && amount > 0) {
      customersStore.setError(`يجب إدخال القيمة المعادلة بالشيكل بشكل صحيح للدفعات بـ ${payment.currency} للدفعة بقيمة ${amount}.`);
      throw new Error("NIS equivalent is required and must be positive for JOD/USD payments if amount is positive.");
    }
    // If currency is NIS, nisEquivalent should be undefined in the store
    if (payment.currency === 'NIS') {
      nisEquivalent = undefined as any; // Casting to any to satisfy the type, it will be undefined
    }

    return {
      ...payment,
      id: payment.id || uuidv4(),
      amount: amount,
      nisEquivalent: nisEquivalent,
      paymentDate: payment.paymentDate || Date.now(),
    } as PaymentDetail; // Ensure the object matches PaymentDetail structure
  });

  const customerDataPayload = {
    ...formData.value,
    animals: processedAnimals,
    payments: processedPayments,
  } as NewCustomerData; // Cast to ensure type compatibility, store will calculate totals

  try {
    if (editMode.value && props.customerToEdit?.id) {
      await customersStore.updateCustomer({ ...customerDataPayload, id: props.customerToEdit.id } as UpdateCustomerData);
    } else {
      await customersStore.addCustomer(customerDataPayload);
    }
    emit('customer-saved'); // This will trigger refreshCustomerList in parent
    // Parent will reset the form by changing key or clearing customerToEdit, which calls resetForm() via watcher.
  } catch (e) {
    console.error("Failed to save customer:", e);
  }
};

const resetForm = () => {
  formData.value = initialFormData();
  // editMode is handled by the watcher on customerToEdit
};

const resetFormAndNotifyParent = () => {
  // This method is for the "Cancel Edit" button.
  // It signals the parent to clear the selection (by emitting 'customer-saved' which parent handles by clearing selection).
  // Clearing selection in parent will trigger the watcher for props.customerToEdit, which then calls resetForm.
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
  i { font-size: 0.8em; }
}
.payment-entry {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: #f9f9f9;
}
.payment-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.payment-group {
  flex: 1;
}
.btn-add-payment {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  i { font-size: 0.8em; }
}
.total-payment-display {
  margin-top: 10px;
  font-weight: bold;
  text-align: right;
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
  &:hover { background-color: color.scale(#007bff, $lightness: -10%); }
  &:disabled { background-color: #aaa; cursor: not-allowed; }
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
  &:hover { background-color: color.scale(#6c757d, $lightness: -10%); }
}
.btn-outline {
  background-color: transparent;
  color: var(--app-primary-color, #007bff);
  border: 1px solid var(--app-primary-color, #007bff);
  &:hover { background-color: rgba(0,123,255,.1); }
}
.card-style {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
