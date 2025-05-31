<template>
  <div class="payment-list-page" dir="rtl">
    <div class="container">
      <div class="actions-bar">
        <router-link :to="{ name: 'PaymentForm' }" class="btn-add">
          <i class="fas fa-plus-circle"></i> إضافة دفعة جديدة
        </router-link>
      </div>
      <div class="card-style">
        <payment-history ref="paymentHistoryRef" :showCustomerFilter="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PaymentHistory from '@/components/payment/PaymentHistory.vue';
import { usePaymentsStore } from '@/store/modules/payments';

const paymentHistoryRef = ref<InstanceType<typeof PaymentHistory> | null>(null);
const paymentsStore = usePaymentsStore();

onMounted(async () => {
  if (!paymentsStore.payments.length) {
    await paymentsStore.fetchPayments();
  }
});
</script>

<style scoped lang="scss">
.payment-list-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    i { margin-left: 10px; }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .summary-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
  }

  .summary-card {
    flex: 1;
    min-width: 200px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    
    i {
      font-size: 2.5rem;
      margin-left: 15px;
      color: #007bff;
    }
    
    .summary-data {
      flex: 1;
    }
    
    .summary-title {
      font-size: 0.9rem;
      color: #6c757d;
      margin-bottom: 5px;
    }
    
    .summary-value {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }
    
    &:nth-child(1) i {
      color: #6f42c1; // Purple
    }
    
    &:nth-child(2) i {
      color: #28a745; // Green
    }
    
    &:nth-child(3) i {
      color: #fd7e14; // Orange
    }
  }

  .actions-bar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    .btn-add {
      background-color: #28a745;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      transition: background-color 0.2s;

      i {
        margin-left: 8px;
      }

      &:hover {
        background-color: #218838;
      }
    }
  }
  
  .card-style {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    width: 100%;
  }
}
</style>
