<template>
  <div class="customer-list-page" dir="rtl">
    <h2>Customer List</h2>
    <div class="actions">
      <router-link to="/add-customer" class="add-button">Add New Customer</router-link>
    </div>
    <customer-list ref="customerListRef" @edit-customer="navigateToEditCustomer" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CustomerList from '@/components/customer/CustomerList.vue';
import type { Customer } from '@/store/modules/customers'; // Assuming this type will be defined

const customerListRef = ref<InstanceType<typeof CustomerList> | null>(null);
const router = useRouter();

const navigateToEditCustomer = (customer: Customer) => {
  // Navigate to the AddCustomerPage in edit mode
  // The AddCustomerPage will handle fetching the customer data based on the ID
  if (customer.id) {
    router.push({ name: 'EditCustomer', params: { id: customer.id } });
  } else {
    console.error("Customer ID is missing, cannot navigate to edit page.");
    // Optionally, navigate to a generic add page or show an error
    // router.push({ name: 'AddCustomer' });
  }
};

// If you need to refresh the list from this page (e.g., after a delete action not handled by CustomerList itself)
// const refreshCustomerList = () => {
//   if (customerListRef.value && typeof customerListRef.value.fetchCustomers === 'function') {
//     customerListRef.value.fetchCustomers();
//   }
// };
</script>

<style scoped lang="scss">
.customer-list-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.actions {
  margin-bottom: 20px;
  text-align: left; // Or right for RTL, adjust as needed
}

.add-button {
  padding: 10px 15px;
  background-color: #4CAF50; // Example button color
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
}
</style>
