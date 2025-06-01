<template>
  <div class="discount-input">
    <div class="discount-header">
      <h4 class="discount-title">خصم العميل</h4>
      <div class="discount-toggle">
        <label class="toggle-label">
          <input 
            type="checkbox" 
            v-model="discountEnabled" 
            @change="handleToggleChange"
            class="toggle-checkbox"
          />
          <span class="toggle-text">تفعيل الخصم</span>
        </label>
      </div>
    </div>

    <transition name="discount-fade">
      <div v-if="discountEnabled" class="discount-form">
        <div class="discount-amount-section">
          <label for="discountAmount" class="form-label">مبلغ الخصم (ش.ج)</label>
          <input
            id="discountAmount"
            type="number"
            v-model.number="localDiscount.amount"
            @input="handleAmountChange"
            :max="maxDiscountAmount"
            min="0"
            step="0.01"
            class="form-input"
            :class="{ 'error': amountError }"
            placeholder="أدخل مبلغ الخصم"
          />
          <div v-if="amountError" class="error-message">
            {{ amountError }}
          </div>
        </div>

        <div class="discount-reason-section">
          <label for="discountReason" class="form-label">سبب الخصم</label>
          <input
            id="discountReason"
            type="text"
            v-model="localDiscount.reason"
            @input="handleReasonChange"
            class="form-input"
            :class="{ 'error': reasonError }"
            placeholder="أدخل سبب الخصم (اختياري)"
            maxlength="200"
          />
          <div v-if="reasonError" class="error-message">
            {{ reasonError }}
          </div>
        </div>

        <div class="discount-calculation">
          <div class="calculation-row">
            <span class="calc-label">المجموع قبل الخصم:</span>
            <span class="calc-value">{{ formatCurrency(totalBeforeDiscount) }}</span>
          </div>
          <div class="calculation-row discount-row">
            <span class="calc-label">مبلغ الخصم:</span>
            <span class="calc-value discount-amount">- {{ formatCurrency(effectiveDiscount) }}</span>
          </div>
          <div class="calculation-row total-row">
            <span class="calc-label">المجموع النهائي:</span>
            <span class="calc-value final-total">{{ formatCurrency(finalTotal) }}</span>
          </div>
          <div v-if="savingsAmount > 0" class="savings-info">
            <span class="savings-text">توفير: {{ formatCurrency(savingsAmount) }} ({{ savingsPercentage }}%)</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { 
  calculateDiscountedAmount, 
  validateDiscount, 
  formatDiscountDisplay,
  calculateDiscountPercentage,
  calculateSavings
} from '@/utils/customerDiscounts';

interface DiscountData {
  amount: number;
  reason?: string;
  appliedBy?: string;
  appliedAt?: number;
}

interface Props {
  modelValue?: DiscountData | null;
  totalAmount: number;
  disabled?: boolean;
  appliedBy?: string; // Current user who would apply the discount
}

interface Emits {
  (e: 'update:modelValue', value: DiscountData | null): void;
  (e: 'change', value: DiscountData | null): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disabled: false,
  appliedBy: 'مستخدم النظام'
});

const emit = defineEmits<Emits>();

// Local state
const discountEnabled = ref(false);
const localDiscount = ref<DiscountData>({
  amount: 0,
  reason: '',
  appliedBy: props.appliedBy
});

// Error states
const amountError = ref<string | null>(null);
const reasonError = ref<string | null>(null);

// Computed properties
const maxDiscountAmount = computed(() => props.totalAmount);

const discountCalculation = computed(() => {
  if (!discountEnabled.value || localDiscount.value.amount <= 0) {
    return calculateDiscountedAmount(props.totalAmount, 0);
  }
  return calculateDiscountedAmount(props.totalAmount, localDiscount.value.amount);
});

const totalBeforeDiscount = computed(() => props.totalAmount);
const effectiveDiscount = computed(() => discountCalculation.value.effectiveDiscount);
const finalTotal = computed(() => discountCalculation.value.finalTotalAmount);
const savingsAmount = computed(() => calculateSavings(totalBeforeDiscount.value, finalTotal.value));
const savingsPercentage = computed(() => 
  calculateDiscountPercentage(effectiveDiscount.value, totalBeforeDiscount.value)
);

// Methods
const formatCurrency = (amount: number): string => {
  return `${amount.toLocaleString()} ش.ج`;
};

const validateAmount = (amount: number): string | null => {
  if (amount < 0) {
    return 'مبلغ الخصم لا يمكن أن يكون سالب';
  }
  if (amount > props.totalAmount) {
    return 'مبلغ الخصم لا يمكن أن يكون أكبر من المجموع الإجمالي';
  }
  return null;
};

const handleToggleChange = (): void => {
  if (!discountEnabled.value) {
    // Discount disabled, emit null
    localDiscount.value = {
      amount: 0,
      reason: '',
      appliedBy: props.appliedBy
    };
    amountError.value = null;
    reasonError.value = null;
    emit('update:modelValue', null);
    emit('change', null);
  } else {
    // Discount enabled, validate and emit current values
    handleAmountChange();
  }
};

const handleAmountChange = (): void => {
  amountError.value = validateAmount(localDiscount.value.amount);
  
  if (!amountError.value && discountEnabled.value) {
    const discountData: DiscountData = {
      ...localDiscount.value,
      appliedBy: props.appliedBy,
      appliedAt: Date.now()
    };
    emit('update:modelValue', discountData);
    emit('change', discountData);
  }
};

const handleReasonChange = (): void => {
  // Optional validation for reason
  if (localDiscount.value.reason && localDiscount.value.reason.length > 200) {
    reasonError.value = 'سبب الخصم لا يمكن أن يكون أكثر من 200 حرف';
  } else {
    reasonError.value = null;
  }
  
  if (!reasonError.value && discountEnabled.value && !amountError.value) {
    const discountData: DiscountData = {
      ...localDiscount.value,
      appliedBy: props.appliedBy,
      appliedAt: Date.now()
    };
    emit('update:modelValue', discountData);
    emit('change', discountData);
  }
};

// Watchers
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    discountEnabled.value = true;
    localDiscount.value = { ...newValue };
  } else {
    discountEnabled.value = false;
    localDiscount.value = {
      amount: 0,
      reason: '',
      appliedBy: props.appliedBy
    };
  }
}, { immediate: true });

watch(() => props.totalAmount, (newTotalAmount, oldTotalAmount) => {
  if (discountEnabled.value && newTotalAmount !== oldTotalAmount) {
    // Re-validate the current discount amount based on the new totalAmount.
    amountError.value = validateAmount(localDiscount.value.amount);

    // If the current discount amount exceeds the new total amount,
    // and the new total amount is non-negative, auto-cap the discount.
    if (localDiscount.value.amount > newTotalAmount && newTotalAmount >= 0) {
      localDiscount.value.amount = newTotalAmount; // Cap the discount
      // Only emit if the amount actually changed to prevent recursive updates
      if (localDiscount.value.amount !== (props.modelValue?.amount || 0)) {
        handleAmountChange();
      }
    }
    // If localDiscount.value.amount is still valid or becomes invalid (but not auto-capped here),
    // no emit is made from this watcher. The error display will update, and user input
    // into the discount field will trigger handleAmountChange for further emits.
  }
});

// Lifecycle
onMounted(() => {
  // Initialize based on model value
  if (props.modelValue) {
    discountEnabled.value = true;
    localDiscount.value = { ...props.modelValue };
  }
});
</script>

<style scoped>
.discount-input {
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #f8f9fa;
}

.discount-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.discount-title {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
}

.discount-toggle {
  display: flex;
  align-items: center;
}

.toggle-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
}

.toggle-checkbox {
  margin-left: 8px;
  transform: scale(1.2);
}

.toggle-text {
  color: #495057;
}

.discount-form {
  display: grid;
  gap: 16px;
}

.discount-amount-section,
.discount-reason-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 500;
  color: #495057;
  font-size: 0.9rem;
}

.form-input {
  padding: 10px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-input.error {
  border-color: #dc3545;
}

.form-input.error:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 4px;
}

.discount-calculation {
  background-color: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 12px;
  margin-top: 8px;
}

.calculation-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
}

.calc-label {
  font-weight: 500;
  color: #495057;
}

.calc-value {
  font-weight: 600;
  color: #2c3e50;
}

.discount-row .calc-value {
  color: #e74c3c;
}

.total-row {
  border-top: 2px solid #007bff;
  margin-top: 8px;
  padding-top: 8px;
}

.total-row .calc-value {
  color: #007bff;
  font-size: 1.1rem;
}

.savings-info {
  text-align: center;
  margin-top: 8px;
  padding: 8px;
  background-color: #d1ecf1;
  border-radius: 4px;
}

.savings-text {
  color: #0c5460;
  font-weight: 500;
  font-size: 0.9rem;
}

/* Transitions */
.discount-fade-enter-active,
.discount-fade-leave-active {
  transition: all 0.3s ease;
}

.discount-fade-enter-from,
.discount-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* RTL Support */
[dir="rtl"] .toggle-checkbox {
  margin-left: 0;
  margin-right: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .discount-header {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  
  .discount-toggle {
    justify-content: center;
  }
}
</style>
