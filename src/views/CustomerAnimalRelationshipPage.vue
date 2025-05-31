<template>
  <div class="customer-animal-relationship-page" dir="rtl">
    <div class="page-header">
      <h1><i class="fas fa-link"></i> إدارة أضاحي العملاء</h1>
      <p class="page-description">اختيار وإدارة الأضاحي للعملاء الحاليين</p>
    </div>

    <div class="main-content">
      <!-- Customer Selection Section -->
      <div class="customer-selection-section card-style">
        <CustomerSelector 
          @customer-selected="onCustomerSelected"
          @customer-cleared="onCustomerCleared"
          :selected-customer="selectedCustomer"
        />
      </div>

      <!-- Customer-Sacrifice Management Section -->
      <div v-if="selectedCustomer" class="customer-sacrifice-management">
        <CustomerSacrificeManager 
          :selected-customer="selectedCustomer"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state card-style">
        <div class="empty-state-content">
          <i class="fas fa-user-plus fa-3x"></i>
          <h3>اختر عميل لإدارة أضاحيه</h3>
          <p>استخدم القائمة أعلاه لاختيار عميل وإدارة أضاحيه</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomerSelector from '@/components/relationship/CustomerSelector.vue';
import CustomerSacrificeManager from '@/components/relationship/CustomerSacrificeManager.vue';
import type { Customer } from '@/store/modules/customers';

const selectedCustomer = ref<Customer | null>(null);

const onCustomerSelected = (customer: Customer) => {
  selectedCustomer.value = customer;
};

const onCustomerCleared = () => {
  selectedCustomer.value = null;
};
</script>

<style scoped lang="scss">
.customer-animal-relationship-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  .page-header {
    margin-bottom: 30px;
    text-align: center;
    
    h1 {
      color: #2c3e50;
      margin-bottom: 10px;
      font-size: 2rem;
      
      i {
        margin-left: 15px;
        color: #3498db;
      }
    }
    
    .page-description {
      color: #7f8c8d;
      font-size: 1.1rem;
      margin: 0;
    }
  }
  
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .customer-selection-section {
      padding: 20px;
    }
    
    .customer-sacrifice-management {
      margin-top: 10px;
    }
    
    .empty-state {
      padding: 60px 20px;
      text-align: center;
      
      .empty-state-content {
        i {
          color: #bdc3c7;
          margin-bottom: 20px;
        }
        
        h3 {
          color: #34495e;
          margin-bottom: 10px;
        }
        
        p {
          color: #7f8c8d;
          font-size: 1rem;
        }
      }
    }
  }
}

.card-style {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.07);
  
  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.12);
  }
}

@media (max-width: 768px) {
  .customer-animal-relationship-page {
    padding: 15px;
    
    .page-header h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
