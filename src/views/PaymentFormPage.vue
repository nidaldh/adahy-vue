<template>
  <div class="payment-form-page" dir="rtl">
    <h2><i class="fas fa-plus-circle"></i> إضافة دفعة جديدة</h2>
    <div class="container">
      <div class="card-style">
        <payment-form @payment-saved="handlePaymentSaved" :customer-id-prop="selectedCustomerIdFromRoute" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PaymentForm from '@/components/payment/PaymentForm.vue';

const route = useRoute();
const router = useRouter();
const selectedCustomerIdFromRoute = ref<string | null>(null);

const handlePaymentSaved = () => {
  // Show success notification or alert
  alert('تم حفظ الدفعة بنجاح!');
  
  // Redirect to the payment list after successful save
  if (selectedCustomerIdFromRoute.value) {
    router.push({ 
      name: 'PaymentList', 
      query: { customerId: selectedCustomerIdFromRoute.value } 
    });
  } else {
    router.push({ name: 'PaymentList' });
  }
};

// Only set customer ID if explicitly provided in the route
if (route.query.customerId && typeof route.query.customerId === 'string') {
  selectedCustomerIdFromRoute.value = route.query.customerId;
}
</script>

<style scoped lang="scss">
.payment-form-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    i { margin-left: 10px; }
  }

  .container {
    display: flex;
    justify-content: center;
  }
  
  .card-style {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 600px;
  }
}
</style>
