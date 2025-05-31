<template>
  <div class="add-customer-page" dir="rtl">
    <h2>{{ pageTitle }}</h2>
    <customer-form
      :key="customerFormKey"
      @customer-saved="handleCustomerSaved"
      :customer-to-edit="customerDataForForm"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CustomerForm from '@/components/customer/CustomerForm.vue';
import type { Customer } from '@/store/modules/customers';
// Assuming a Pinia store setup for customers. Adjust the import path and store name if necessary.
// Example: import { useCustomersStore } from '@/store/modules/customersStore';
import { useCustomersStore } from '@/store/modules/customers';

const route = useRoute();
const router = useRouter();
const customersStore = useCustomersStore(); // Initialize the store

const customerFormKey = ref(0); // To reset/re-render the CustomerForm
const customerDataForForm = ref<Customer | null>(null);
const currentCustomerId = ref<string | null>(null); // Stores the ID from the route parameter

const isEditMode = computed(() => !!currentCustomerId.value);
const pageTitle = computed(() => isEditMode.value ? 'Edit Customer' : 'Add New Customer');

// Watch for route parameter changes (e.g., navigating from /edit/1 to /edit/2, or to /add)
watch(
  () => route.params.id,
  async (newIdParam) => {
    const newId = newIdParam as string | undefined;

    if (newId) { // Entering edit mode or switching between customers to edit
      if (newId !== currentCustomerId.value) { // Only fetch if ID is different
        currentCustomerId.value = newId;
        // Assuming your store has an action like 'fetchCustomerById' that returns the customer or null/undefined
        // This action should fetch data from your backend/Firebase
        const fetchedCustomer = await customersStore.fetchCustomerById(newId); // Adjust method name if needed in your store
        if (fetchedCustomer) {
          customerDataForForm.value = fetchedCustomer;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          console.error(`Customer with ID ${newId} not found or failed to fetch.`);
          customerDataForForm.value = null; // Clear form if customer not found
          // Optionally, redirect to list or show a "not found" message
          // router.push({ name: 'CustomerList' });
        }
      }
    } else { // Entering add mode (no ID in route params)
      currentCustomerId.value = null;
      customerDataForForm.value = null;
      customerFormKey.value++; // Increment key to ensure CustomerForm resets
    }
  },
  { immediate: true } // Run this watcher when the component is first mounted
);

const handleCustomerSaved = () => {
  customerFormKey.value++; // Force re-render of CustomerForm to reset its internal state
  router.push({ name: 'CustomerList' }); // Navigate to the customer list page after saving
};
</script>

<style scoped lang="scss">
.add-customer-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
