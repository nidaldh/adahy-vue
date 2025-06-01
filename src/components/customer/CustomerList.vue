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
      <p>لا يوجد عملاء لعرضهم حالياً. قم بإضافة عميل جديد.</p>
    </div>

    <div class="table-responsive" v-if="filteredCustomers.length">
      <table class="customer-table">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الهاتف</th>
            <th>عدد الأضاحي</th>
            <th>ملاحظات</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in filteredCustomers" :key="customer.id">
            <td>{{ customer.name }}</td>
            <td>{{ customer.phone || '-' }}</td>
            <td>{{ customer.animals?.length || 0 }}</td>
            <td class="notes-cell">
              <span v-if="customer.notes" :title="customer.notes">
                {{ customer.notes.substring(0, 50) }}{{ customer.notes.length > 50 ? '...' : '' }}
              </span>
              <span v-else>-</span>
            </td>
            <td>
              <button @click="navigateToCustomerRelationships(customer.id)" class="btn btn-info btn-sm">
                <i class="fas fa-info-circle"></i> تفاصيل
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useCustomersStore, type Customer } from '@/store/modules/customers';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';
import { useRouter } from 'vue-router';
import { useDebounce } from '@/composables/usePerformance';

const customersStore = useCustomersStore();
const router = useRouter();

// Search and filter functionality
const searchQuery = ref('');
const debouncedSearchQuery = useDebounce(searchQuery, 300);

// Computed property for filtered customers
const filteredCustomers = computed(() => {
  let customers = customersStore.customers;

  // Filter by search query
  if (debouncedSearchQuery.value) {
    const query = debouncedSearchQuery.value.toLowerCase();
    customers = customers.filter(customer => 
      customer.name.toLowerCase().includes(query) ||
      (customer.phone && customer.phone.includes(query)) ||
      (customer.notes && customer.notes.toLowerCase().includes(query))
    );
  }
  
  return customers;
});

const fetchWrapper = async () => {
  await customersStore.fetchCustomers();
};

const navigateToCustomerRelationships = (customerId: string) => {
  router.push({ name: 'CustomerRelationships', query: { customerId: customerId } });
};

onMounted(() => {
  // Fetch customers if the list is empty or hasn't been fetched recently
  if (!customersStore.customers.length || customersStore.lastFetchTimestamp === 0) {
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
  flex-wrap: wrap; // Allow wrapping for smaller screens
  gap: 15px;
}

.search-section {
  position: relative;
  flex: 1;
  max-width: 300px;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 15px; // Adjusted padding for RTL search icon
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
  left: 15px; // Icon on the left for RTL input
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  pointer-events: none;
}

.table-responsive {
  overflow-x: auto; // Allows table to scroll horizontally on small screens
}

.customer-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 0.9rem;

  th, td {
    border: 1px solid #e0e0e0;
    padding: 10px 12px;
    text-align: right; // RTL default
    vertical-align: middle;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #333;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  .notes-cell {
    max-width: 250px; // Limit width of notes column
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: help; // Indicate that full notes are available on hover/title
  }
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
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem; // Slightly smaller buttons for table

  &:hover {
    transform: translateY(-1px);
  }
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
  &:hover { background-color: darken(#6c757d, 10%); }
  &:disabled { background-color: #aaa; cursor: not-allowed; }
}
.btn-info {
  background-color: #17a2b8;
  color: white;
  &:hover { background-color: darken(#17a2b8, 10%); }
}
.btn-sm {
  padding: 0.3rem 0.7rem; // Adjusted padding for better fit in table
  font-size: .8rem;
}

.card-style {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
