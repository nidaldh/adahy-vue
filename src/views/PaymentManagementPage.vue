<template>
  <div class="payment-management-page" dir="rtl">
    <h2><i class="fas fa-cash-register"></i> إدارة المدفوعات</h2>
    <div class="layout-container">
      <div class="form-section card-style">
        <payment-form @payment-saved="handlePaymentSaved" :customer-id-prop="selectedCustomerIdFromRoute" />
      </div>
      <div class="history-section card-style">
        <payment-history ref="paymentHistoryRef" :filter-customer-id-prop="selectedCustomerIdFromRoute" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import PaymentForm from '@/components/payment/PaymentForm.vue';
import PaymentHistory from '@/components/payment/PaymentHistory.vue';

const paymentHistoryRef = ref<InstanceType<typeof PaymentHistory> | null>(null);
const route = useRoute();
const selectedCustomerIdFromRoute = ref<string | null>(null);

const handlePaymentSaved = () => {
  if (paymentHistoryRef.value && typeof paymentHistoryRef.value.fetchPayments === 'function') {
    paymentHistoryRef.value.fetchPayments();
  }
};

// Watch for changes in route query params to update selected customer
watch(() => route.query.customerId, (newId) => {
  selectedCustomerIdFromRoute.value = typeof newId === 'string' ? newId : null;
}, { immediate: true });

onMounted(() => {
  // Initial check, though watcher should also cover it
  const customerId = route.query.customerId;
  selectedCustomerIdFromRoute.value = typeof customerId === 'string' ? customerId : null;
});

</script>

<style scoped lang="scss">
.payment-management-page {
  padding: 20px;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    i { margin-left: 10px; }
  }

  .layout-container {
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (min-width: 992px) { // Larger screens
      flex-direction: row;

      .form-section {
        flex: 1;
        min-width: 380px; // Ensure form has enough space
        max-width: 480px;
      }
      .history-section {
        flex: 2;
        min-width: 400px;
      }
    }
  }
  .card-style {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
}
</style>
