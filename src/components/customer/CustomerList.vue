<template>
  <div class="customer-list-container card-style" dir="rtl">
    <h3><i class="fas fa-users"></i> قائمة العملاء</h3>
    <div class="toolbar">
      <div class="search-section">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="البحث عن عميل..." 
          class="search-input"
        />
        <i class="fas fa-search search-icon"></i>
      </div>
      <button @click="fetchWrapper" class="btn btn-secondary" :disabled="customersStore.loading">
        <i class="fas fa-sync-alt"></i> تحديث القائمة
      </button>
    </div>
    <loading-spinner :loading="customersStore.loading && !customersStore.customers.length" />
    <error-message v-if="customersStore.error" :message="customersStore.error" />

    <div v-if="!customersStore.loading && !customersStore.customers.length && !customersStore.error" class="empty-state">
      <p>لا يوجد عملاء لعرضهم حالياً. قم بإضافة عميل جديد من النموذج أعلاه.</p>
    </div>

    <div class="customer-grid" v-if="filteredCustomers.length">
      <customer-card
        v-for="customer in filteredCustomers"
        :key="customer.id"
        :customer="customer"
        @edit-customer="onEditCustomer"
        @view-payments="onViewPayments"
        @delete-customer="confirmDelete"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useCustomersStore, type Customer } from '@/store/modules/customers';
import CustomerCard from '@/components/customer/CustomerCard.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';
import { useRouter } from 'vue-router';
import { useDebounce } from '@/composables/usePerformance';

const customersStore = useCustomersStore();
const emit = defineEmits(['edit-customer']);
const router = useRouter();

// Search functionality with debouncing
const searchQuery = ref('');
const debouncedSearchQuery = useDebounce(searchQuery, 300);

// Computed property for filtered customers
const filteredCustomers = computed(() => {
  if (!debouncedSearchQuery.value) {
    return customersStore.customers;
  }
  
  const query = debouncedSearchQuery.value.toLowerCase();
  return customersStore.customers.filter(customer => 
    customer.name.toLowerCase().includes(query) ||
    customer.phone?.includes(query)
  );
});

const fetchWrapper = async () => {
  await customersStore.fetchCustomers();
};

const onEditCustomer = (customer: Customer) => {
  emit('edit-customer', customer);
};

const onViewPayments = (customerId: string) => {
  router.push({ name: 'PaymentList', query: { customerId: customerId } });
};

const confirmDelete = async (customerId: string) => {
  if (window.confirm('هل أنت متأكد من رغبتك في حذف هذا العميل وجميع بياناته المتعلقة؟ لا يمكن التراجع عن هذا الإجراء.')) {
    try {
      await customersStore.deleteCustomer(customerId);
      // Optionally, show a success message
      fetchWrapper(); // Refresh list
    } catch (error) {
      // Error should be set in store and displayed by ErrorMessage
      console.error("Failed to delete customer:", error);
    }
  }
};

onMounted(() => {
  if (!customersStore.customers.length || customersStore.lastFetchTimestamp === 0) { // Assuming lastFetchTimestamp in store
    fetchWrapper();
  }
});

defineExpose({
  fetchCustomers: fetchWrapper
});
</script>

<style scoped lang="scss">
.customer-list-container {
  padding: 20px;
}
h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  i { margin-left: 8px;}
}
.toolbar {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.search-section {
  position: relative;
  flex: 1;
  max-width: 300px;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  direction: rtl;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  pointer-events: none;
}
.customer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}
.empty-state {
  text-align: center;
  padding: 30px;
  color: #777;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px dashed #ddd;
}

.btn {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
  &:hover { background-color: darken(#6c757d, 10%); }
  &:disabled { background-color: #aaa; cursor: not-allowed; }
}
.card-style {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
