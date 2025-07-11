<template>
  <div class="customer-animal-relationship-page" dir="rtl">
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
          @dataUpdated="handleDataUpdated"
          :highlight-animal-id="highlightAnimalId"
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
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import CustomerSelector from '@/components/relationship/CustomerSelector.vue';
import CustomerSacrificeManager from '@/components/relationship/CustomerSacrificeManager.vue';
import { useCustomersStore, type Customer } from '@/store/modules/customers';

const selectedCustomer = ref<Customer | null>(null);
const route = useRoute();
const customersStore = useCustomersStore();
const highlightAnimalId = ref<string | null>(null);

const onCustomerSelected = (customer: Customer) => {
  selectedCustomer.value = customer;
  // Optional: Update URL if selection changes, though current flow is one-way (route -> selection)
};

const onCustomerCleared = () => {
  selectedCustomer.value = null;
  highlightAnimalId.value = null;
  // Optional: Clear URL query param if customer is cleared
};

const loadCustomerFromRoute = async (isRefreshAfterUpdate = false) => {
  const customerIdFromRoute = route.query.customerId as string;
  // Check for animalId to highlight
  highlightAnimalId.value = route.query.highlightAnimalId as string || null;

  if (customerIdFromRoute) {
    // If it's a refresh after an update, we expect the customer to be in the store.
    if (isRefreshAfterUpdate) {
      const customer = customersStore.getCustomerById(customerIdFromRoute);
      if (customer) {
        selectedCustomer.value = { ...customer }; // Use a new object for reactivity
        console.log(`Selected customer ${customerIdFromRoute} data refreshed from store after update.`);
      } else {
        // This is unexpected if the update was successful in the store.
        console.error(`CRITICAL: Customer ${customerIdFromRoute} not found in store after dataUpdated event. Clearing selection. This might indicate an issue with store reactivity or update logic.`);
        selectedCustomer.value = null;
        highlightAnimalId.value = null;
        // Potentially, we might want to fetch this specific customer if the store failed to update its list
        // await customersStore.fetchCustomerById(customerIdFromRoute); // Example: if such an action exists
        // const refreshedCustomer = customersStore.getCustomerById(customerIdFromRoute);
        // if (refreshedCustomer) selectedCustomer.value = { ...refreshedCustomer };
      }
      return; // Exit after attempting to load the updated customer from store
    }

    // Standard load: Not a refresh after update (e.g., initial load or direct navigation)
    let customer = customersStore.getCustomerById(customerIdFromRoute);

    // If customer not found, and store is empty, and not loading, try fetching all customers.
    // This is for initial load scenarios where the store might not be populated yet.
    if (!customer && customersStore.customers.length === 0 && !customersStore.loading) {
      console.log(`Customer ${customerIdFromRoute} not in empty store, fetching all customers.`);
      await customersStore.fetchCustomers();
      customer = customersStore.getCustomerById(customerIdFromRoute); // Try getting again
    }

    if (customer) {
      selectedCustomer.value = { ...customer };
    } else {
      console.warn(`Customer ${customerIdFromRoute} not found (initial load/direct nav). Clearing selection.`);
      selectedCustomer.value = null;
      highlightAnimalId.value = null;
    }
  } else {
    selectedCustomer.value = null;
    highlightAnimalId.value = null;
  }
};

const handleDataUpdated = () => {
  console.log('dataUpdated event received in CustomerAnimalRelationshipPage. Refreshing customer data...');
  loadCustomerFromRoute(true); // Pass true for isRefreshAfterUpdate
};

onMounted(() => {
  loadCustomerFromRoute();
});

// Watch for changes in route query if the user navigates to this page
// with a different customerId or animalId without full page reload.
watch(() => route.query, (newQuery, oldQuery) => {
  if (newQuery.customerId !== oldQuery.customerId || newQuery.highlightAnimalId !== oldQuery.highlightAnimalId) {
    loadCustomerFromRoute();
  }
}, { deep: true });
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
