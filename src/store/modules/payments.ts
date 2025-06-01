import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useAuthStore } from './auth';
import { useFirebaseDB } from '@/composables/useFirebaseDB';

// Renamed to StoredPayment to differentiate from Customer's PaymentDetail array items
// This represents a single logged transaction.
export interface StoredPayment {
  id: string;
  customerId: string;
  customerName?: string; // For display convenience, might be populated post-fetch
  amount: number; // Amount in the specified currency
  currency: 'NIS' | 'JOD' | 'USD';
  nisEquivalent?: number; // NIS value if currency is JOD or USD (should be same as amount if currency is NIS)
  paymentDate: number; // Timestamp
  method?: 'cash' | 'bank_transfer' | 'card' | 'online' | 'cheque' | 'other';
  notes?: string;
  originalPaymentDetailId?: string; // Optional: Link to the ID in Customer.payments array
}

export type NewPaymentData = Omit<StoredPayment, 'id' | 'customerName'>; // Renamed for clarity

export const usePaymentsStore = defineStore('payments', () => {
  const storePayments = ref<StoredPayment[]>([]);
  const storeLoading = ref(false);
  const storeError = ref<string | null>(null);
  const lastFetchTimestamp = ref(0);
  const authStore = useAuthStore();

  const { 
    data: firebasePayments, 
    loading: firebaseLoading, 
    error: firebaseError, 
    subscribe, 
    addData: firebaseAddData, 
    updateData: firebaseUpdateData,
    removeData: firebaseRemoveData 
  } = useFirebaseDB<StoredPayment>('payments'); // Base path for payments collection

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
  const getPaymentsByCustomerId = (customerId: string): StoredPayment[] => {
    return storePayments.value.filter(p => p.customerId === customerId);
  };

  const addPayment = async (paymentData: NewPaymentData) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot add payment log entry.";
      throw new Error("User not authenticated for adding payment log entry");
    }
    try {
      // This now only logs the payment transaction. Customer balance is updated via customersStore.
      const newPaymentId = await firebaseAddData(paymentData); 
      return newPaymentId;
    } catch (err: any) {
      storeError.value = `Failed to log payment: ${err.message}`;
      throw err; 
    }
  };

  const updatePayment = async (paymentId: string, paymentData: Partial<NewPaymentData>) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot update payment log entry.";
      throw new Error("User not authenticated for updating payment log entry");
    }
    try {
      await firebaseUpdateData(paymentId, paymentData);
    } catch (err: any) {
      storeError.value = `Failed to update payment log: ${err.message}`;
      throw err;
    }
  };
  
  const deletePayment = async (paymentId: string) => { // customerId and amount removed, as this only deletes the log
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot delete payment log entry.";
      throw new Error("User not authenticated for deleting payment log entry");
    }
    try {
      // This now only deletes the payment log. Customer balance is updated via customersStore.
      await firebaseRemoveData(paymentId); 
    } catch (err: any) {
      storeError.value = `Failed to delete payment log: ${err.message}`;
      throw err;
    }
  };

  const totalPaidForCustomerNIS = computed(() => {
    return (customerId: string) => 
      storePayments.value
        .filter(p => p.customerId === customerId)
        .reduce((sum, p) => sum + (p.currency === 'NIS' ? p.amount : (p.nisEquivalent || 0)), 0);
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

  const clearError = () => {
    storeError.value = null;
  };

  return { 
    payments: allUserPayments, // Expose all payments for the current user
    loading: computed(() => storeLoading.value),
    error: computed(() => storeError.value),
    lastFetchTimestamp: computed(() => lastFetchTimestamp.value), // Expose as computed
    getPaymentsByCustomerId, // Getter to filter payments by customer ID
    addPayment, 
    updatePayment, // Add updatePayment method
    deletePayment,
    totalPaidForCustomerNIS, // Renamed for clarity
    fetchPayments, // Add this method
    setError, // Add this method
    clearError, // Add clearError method
  };
});
