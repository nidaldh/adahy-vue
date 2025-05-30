<template>
  <div class="animal-form-fields" dir="rtl">
    <h4>أضحية {{ animalIndex + 1 }}</h4>
    <div class="form-row">
      <div class="form-group">
        <label :for="`animalType-${animalIndex}`">النوع</label>
        <select :id="`animalType-${animalIndex}`" v-model="editableAnimal.type" required>
          <option value="" disabled>اختر النوع</option>
          <option value="خروف">خروف</option>
          <option value="ماعز">ماعز</option>
          <option value="عجل">عجل</option>
          <option value="جمل">جمل</option>
          <option value="تيس">تيس</option>
          <option value="بقرة">بقرة</option>
        </select>
      </div>
      <div class="form-group">
        <label :for="`animalNumber-${animalIndex}`">رقم الأضحية/التعريف</label>
        <input type="text" :id="`animalNumber-${animalIndex}`" v-model="editableAnimal.number" placeholder="مثال: A101 أو اسم مميز" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label :for="`animalWeight-${animalIndex}`">الوزن (كجم)</label>
        <input type="number" step="0.01" :id="`animalWeight-${animalIndex}`" v-model.number="editableAnimal.weight" @input="calculateTotal" placeholder="0.00" />
      </div>
      <div class="form-group">
        <label :for="`animalPrice-${animalIndex}`">سعر الكيلو / السعر الإجمالي</label>
        <input type="number" step="0.01" :id="`animalPrice-${animalIndex}`" v-model.number="editableAnimal.price" @input="calculateTotal" placeholder="0.00" />
        <!-- Clarify if price is per kg or total. Assuming per kg for now based on 'calculateTotal' -->
      </div>
    </div>
    <div class="form-row">
       <div class="form-group">
        <label :for="`animalTotal-${animalIndex}`">المجموع</label>
        <input type="number" :id="`animalTotal-${animalIndex}`" :value="editableAnimal.total" readonly />
      </div>
      <div class="form-group">
        <label :for="`animalStatus-${animalIndex}`">الحالة</label>
        <select :id="`animalStatus-${animalIndex}`" v-model="editableAnimal.status">
          <option value="حي">حي</option>
          <option value="محجوز">محجوز</option>
          <option value="جاهز للذبح">جاهز للذبح</option>
          <option value="مذبوح">مذبوح</option>
          <option value="تم التسليم">تم التسليم</option>
          <option value="ملغي">ملغي</option>
        </select>
      </div>
    </div>
    <button type="button" @click="$emit('remove-animal')" class="btn btn-danger btn-sm">
      <i class="fas fa-trash-alt"></i> إزالة الأضحية
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type PropType, onMounted } from 'vue';
import type { Animal } from '@/store/modules/customers';

const props = defineProps({
  modelValue: {
    type: Object as PropType<Animal>,
    required: true
  },
  animalIndex: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['update:modelValue', 'remove-animal']);

const editableAnimal = ref<Animal>({ ...props.modelValue });

watch(() => props.modelValue, (newVal) => {
  editableAnimal.value = { ...newVal };
  // Ensure total is recalculated if dependent props change from parent
  calculateTotal();
}, { deep: true });

watch(editableAnimal, (newVal) => {
  emit('update:modelValue', newVal);
}, { deep: true });

const calculateTotal = () => {
  const weight = editableAnimal.value.weight || 0;
  const price = editableAnimal.value.price || 0;
  editableAnimal.value.total = parseFloat((weight * price).toFixed(2));
};

onMounted(() => {
  // Initial calculation on mount, especially if values are pre-filled
  calculateTotal();
});

// Watch for changes in weight or price to recalculate total
watch(() => [editableAnimal.value.weight, editableAnimal.value.price], () => {
  calculateTotal();
});

</script>

<style scoped lang="scss">
.animal-form-fields {
  h4 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #555;
    font-size: 1.1em;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
  }
  .form-row {
    display: flex;
    flex-wrap: wrap; // Allow wrapping on smaller screens
    gap: 15px;
    margin-bottom: 10px;
    .form-group {
      flex: 1 1 calc(50% - 10px); // Two items per row, responsive
      min-width: 150px; // Minimum width for form groups
    }
  }
  .form-group {
    label {
      font-size: 0.9em;
      margin-bottom: 3px;
    }
    input, select {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
  .btn-danger {
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    font-size: 0.9em;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover { background-color: darken(#dc3545, 10%); }
    i { font-size: 0.9em; }
  }
}
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: .875rem;
  border-radius: .2rem;
}
</style>
