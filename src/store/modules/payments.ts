import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useAuthStore } from './auth';
import { useCustomersStore } from './customers';
import { useFirebaseDB } from '@/composables/useFirebaseDB'; // Import the actual composable

export interface Payment {
  id: string;
  customerId: string;
  customerName?: string; // For display convenience, might be populated post-fetch
  amount: number;
  paymentDate: number; // Timestamp
  method?: 'cash' | 'card' | 'transfer';
  notes?: string;
}

export type NewPaymentData = Omit<Payment, 'id' | 'customerName'>;
export type PaymentData = Payment; // Add this alias for backward compatibility

export const usePaymentsStore = defineStore('payments', () => {
  const storePayments = ref<Payment[]>([]);
  const storeLoading = ref(false);
  const storeError = ref<string | null>(null);
  const lastFetchTimestamp = ref(0); // Add for tracking last fetch
  const authStore = useAuthStore();
  const customersStore = useCustomersStore();

  const { 
    data: firebasePayments, 
    loading: firebaseLoading, 
    error: firebaseError, 
    subscribe, 
    addData: firebaseAddData, 
    removeData: firebaseRemoveData 
  } = useFirebaseDB<Payment>('payments'); // Base path for payments collection

  // Watch for changes from the composable and update store state
  watch(firebasePayments, (newData) => {
    storePayments.value = newData ? (Array.isArray(newData) ? newData : [newData]) : [];
  }, { deep: true, immediate: true });

  watch(firebaseLoading, (newLoading) => {
    storeLoading.value = newLoading;
  }, { immediate: true });

  watch(firebaseError, (newError) => {
    storeError.value = newError ? newError.message : null;
  }, { immediate: true });

  // Watch for authentication changes to subscribe/unsubscribe
  watch(() => authStore.userId, (newUserId) => {
    if (newUserId) {
      subscribe(); // Subscribe to the main 'payments' path for the user
    } else {
      storePayments.value = [];
      storeError.value = null;
    }
  }, { immediate: true });

  // This function now filters the already loaded storePayments.
  const getPaymentsByCustomerId = (customerId: string): Payment[] => {
    return storePayments.value.filter(p => p.customerId === customerId);
  };

  const addPayment = async (paymentData: NewPaymentData) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot add payment.";
      throw new Error("User not authenticated for adding payment");
    }
    try {
      const newPaymentId = await firebaseAddData(paymentData); // Adds to the 'payments' collection
      await customersStore.updateCustomerFinancials(paymentData.customerId, paymentData.amount);
      return newPaymentId;
    } catch (err: any) {
      throw err; 
    }
  };
  
  const deletePayment = async (paymentId: string, customerId: string, amount: number) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot delete payment.";
      throw new Error("User not authenticated for deleting payment");
    }
    try {
      await firebaseRemoveData(paymentId); // Removes from the 'payments' collection
      await customersStore.updateCustomerFinancials(customerId, -amount); // Subtract the payment amount
    } catch (err: any) {
      throw err;
    }
  };

  const totalPaidForCustomer = computed(() => {
    return (customerId: string) => 
      storePayments.value
        .filter(p => p.customerId === customerId)
        .reduce((sum, p) => sum + p.amount, 0);
  });

  const allUserPayments = computed(() => storePayments.value);

  // Add fetchPayments method for components that expect it
  const fetchPayments = async () => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot fetch payments.";
      return;
    }
    try {
      subscribe(); // This will trigger the data loading
      lastFetchTimestamp.value = Date.now();
    } catch (err: any) {
      storeError.value = `Failed to fetch payments: ${err.message}`;
    }
  };

  // Add setError method for components that expect it
  const setError = (message: string | null) => {
    storeError.value = message;
  };

  return { 
    payments: allUserPayments, // Expose all payments for the current user
    loading: computed(() => storeLoading.value),
    error: computed(() => storeError.value),
    lastFetchTimestamp: computed(() => lastFetchTimestamp.value), // Expose as computed
    getPaymentsByCustomerId, // Getter to filter payments by customer ID
    addPayment, 
    deletePayment,
    totalPaidForCustomer,
    fetchPayments, // Add this method
    setError, // Add this method
  };
});
