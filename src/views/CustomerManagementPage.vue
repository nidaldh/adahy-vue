<template>
  <div class="customer-management-page" dir="rtl">
    <customer-form :key="customerFormKey" @customer-saved="refreshCustomerList" :customer-to-edit="selectedCustomerForEdit" />
    <hr class="section-divider">
    <customer-list ref="customerListRef" @edit-customer="loadCustomerForEdit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomerForm from '@/components/customer/CustomerForm.vue';
import CustomerList from '@/components/customer/CustomerList.vue';
import type { Customer } from '@/store/modules/customers'; // Assuming this type will be defined

const customerListRef = ref<InstanceType<typeof CustomerList> | null>(null);
const customerFormKey = ref(0);
const selectedCustomerForEdit = ref<Customer | null>(null);

const refreshCustomerList = () => {
  selectedCustomerForEdit.value = null; // Clear selection
  customerFormKey.value++; // Reset form by changing key, forcing CustomerForm to reset
  if (customerListRef.value && typeof customerListRef.value.fetchCustomers === 'function') {
    customerListRef.value.fetchCustomers();
  }
};

const loadCustomerForEdit = (customer: Customer) => {
  selectedCustomerForEdit.value = customer;
  // CustomerForm will react to the change in customerToEdit prop
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped lang="scss">
.customer-management-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.section-divider {
  margin: 30px 0;
  border: 0;
  border-top: 1px solid #eee;
}
</style>
