<template>
  <div class="payment-management-page" dir="rtl">
    <h2><i class="fas fa-exclamation-triangle"></i> تم نقل هذه الصفحة</h2>
    <div class="message card-style">
      <p>تم فصل إدارة المدفوعات إلى صفحتين منفصلتين:</p>
      <div class="buttons">
        <router-link :to="{ name: 'PaymentList', query: route.query }" class="btn">
          <i class="fas fa-list"></i> قائمة المدفوعات
        </router-link>
        <router-link :to="{ name: 'PaymentForm', query: route.query }" class="btn">
          <i class="fas fa-plus-circle"></i> إضافة دفعة جديدة
        </router-link>
      </div>
      <p>سيتم توجيهك تلقائيًا بعد 3 ثوانٍ...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(() => {
  // Auto-redirect after 3 seconds
  setTimeout(() => {
    router.replace({ name: 'PaymentList', query: route.query });
  }, 3000);
});
</script>

<style scoped lang="scss">
.payment-management-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #e74c3c;
    i { margin-left: 10px; }
  }

  .message {
    text-align: center;
    padding: 20px;
    
    p {
      margin-bottom: 20px;
      font-size: 1.1rem;
    }
    
    .buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-bottom: 20px;
      
      .btn {
        background-color: #007bff;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        
        &:hover {
          background-color: #0056b3;
        }
        
        i {
          margin-left: 8px;
        }
      }
    }
  }
  
  .card-style {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
}
</style>
