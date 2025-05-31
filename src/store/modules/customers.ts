import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useFirebaseDB } from '@/composables/useFirebaseDB';
import { useAuthStore } from './auth';

// Define interfaces based on original app data structure
export interface Animal {
  id: string; 
  type: string; 
  number: string; 
  weight: number; 
  price: number; 
  total: number; 
  status: 'حي' | 'جاهز' | 'مذبوح' | 'ملغي'; 
  compositeKey: string; 
}

export interface PaymentPart {
  id: string; // Unique ID for this part of the payment
  amount: number;
  currency: 'NIS' | 'JOD' | 'USD';
  nisEquivalent?: number; // Required if currency is JOD or USD
}

export interface PaymentDetail {
  id: string; // Unique ID for the overall payment transaction
  parts: PaymentPart[]; // Array of payment parts
  totalTransactionNIS: number; // Sum of nisEquivalent for all parts in this transaction
  paymentDate: number; // Timestamp for the transaction
  method?: 'cash' | 'bank_transfer' | 'card' | 'online' | 'cheque' | 'other'; // Optional: payment method for the transaction
  notes?: string; // Optional: notes for the transaction
}

export interface Customer {
  id: string; 
  name: string;
  phone?: string;
  address?: string; // Add address field
  notes?: string;   // Add notes field
  animals: Animal[];
  totalAmount: number; // Total due from animals
  payments: PaymentDetail[]; // Array of payment transactions
  totalPaidNIS: number; // Sum of all totalTransactionNIS from all PaymentDetail objects
  balance: number; // totalAmount - totalPaidNIS
  createdAt?: number;
  updatedAt?: number;
}

export type NewCustomerData = Omit<Customer, 'id' | 'createdAt' | 'updatedAt' | 'totalAmount' | 'totalPaidNIS' | 'balance'> & {
  animals: Array<Omit<Animal, 'id' | 'total' | 'compositeKey'> & Partial<Pick<Animal, 'id' | 'status'>>>;
  payments?: Array<Omit<PaymentDetail, 'id' | 'totalTransactionNIS'> & { // totalTransactionNIS will be calculated
    parts: Array<Omit<PaymentPart, 'id'> & Partial<Pick<PaymentPart, 'id'>>>;
  } & Partial<Pick<PaymentDetail, 'id'>>>;
};

export type UpdateCustomerData = Partial<Omit<Customer, 'id' | 'createdAt' | 'updatedAt' | 'balance' | 'totalPaidNIS'>> & {
  id: string;
  payments?: Array<Omit<PaymentDetail, 'id' | 'totalTransactionNIS'> & { // totalTransactionNIS will be calculated
    parts: Array<Omit<PaymentPart, 'id'> & Partial<Pick<PaymentPart, 'id'>>>;
  } & Partial<Pick<PaymentDetail, 'id'>>>;
};


export const useCustomersStore = defineStore('customers', () => {
  const storeCustomers = ref<Customer[]>([]);
  const storeLoading = ref(false);
  const storeError = ref<string | null>(null);
  const lastFetchTimestamp = ref(0); // Add this for tracking last fetch
  const authStore = useAuthStore();

  const { 
    data: firebaseCustomers, 
    loading: firebaseLoading, 
    error: firebaseError, 
    subscribe, 
    addData: firebaseAddData, 
    updateData: firebaseUpdateData, 
    removeData: firebaseRemoveData 
  } = useFirebaseDB<Customer>('customers');

  watch(firebaseCustomers, (newData) => {
    storeCustomers.value = newData ? (Array.isArray(newData) ? newData : [newData]) : [];
  }, { deep: true, immediate: true });

  watch(firebaseLoading, (newLoading) => {
    storeLoading.value = newLoading;
  }, { immediate: true });

  watch(firebaseError, (newError) => {
    storeError.value = newError ? newError.message : null;
  }, { immediate: true });

  // Helper function to calculate total NIS for a single transaction's parts
  const calculateTransactionNISTotal = (parts: PaymentPart[]): number => {
    return parts.reduce((sum, part) => {
      if (part.currency === 'NIS') {
        return sum + (part.amount || 0);
      }
      // For JOD/USD, use nisEquivalent. Ensure it's provided or default to 0.
      return sum + (part.nisEquivalent || 0);
    }, 0);
  };

  // Helper function to calculate total paid in NIS from all transactions
  const calculateTotalPaidNIS = (payments: PaymentDetail[]): number => {
    return payments.reduce((sum, payment) => {
      return sum + (payment.totalTransactionNIS || 0);
    }, 0);
  };

  watch(() => authStore.userId, (newUserId) => {
    if (newUserId) {
      subscribe(); 
    } else {
      storeCustomers.value = [];
      storeError.value = null; 
      // Unsubscription is handled by onUnmounted in useFirebaseDB or when subscribe is called again.
    }
  }, { immediate: true });

  const addCustomer = async (customerData: NewCustomerData) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot add customer.";
      throw new Error("User not authenticated");
    }
    try {
      let totalAmount = 0;
      const processedAnimals: Animal[] = customerData.animals.map(animal => {
        const total = (animal.weight || 0) * (animal.price || 0);
        totalAmount += total;
        return {
          type: animal.type,
          number: animal.number,
          weight: animal.weight,
          price: animal.price,
          id: animal.id || crypto.randomUUID(), 
          total,
          compositeKey: `${animal.type}-${animal.number}`,
          status: animal.status || 'حي',
        };
      });

      const processedPayments: PaymentDetail[] = (customerData.payments || []).map(p => {
        const partsWithIds = p.parts.map(part => ({
          ...part,
          id: part.id || crypto.randomUUID(),
        }));
        const totalTransactionNIS = calculateTransactionNISTotal(partsWithIds);
        return {
          ...p,
          id: p.id || crypto.randomUUID(),
          parts: partsWithIds,
          totalTransactionNIS,
          paymentDate: p.paymentDate || Date.now(),
        };
      });
      const totalPaidNIS = calculateTotalPaidNIS(processedPayments);

      const newCustomer: Omit<Customer, 'id'> = {
        ...customerData,
        animals: processedAnimals,
        payments: processedPayments,
        totalAmount,
        totalPaidNIS,
        balance: totalAmount - totalPaidNIS,
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      const newId = await firebaseAddData(newCustomer);
      return newId;
    } catch (err: any) {
      // storeError will be updated by the firebaseError watcher
      throw err;
    }
  };

  const updateCustomer = async (customerData: UpdateCustomerData) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot update customer.";
      throw new Error("User not authenticated");
    }
    try {
      const existingCustomer = storeCustomers.value.find(c => c.id === customerData.id);
      if (!existingCustomer) {
        throw new Error("Customer not found for update.");
      }

      let processedAnimals: Animal[] = existingCustomer.animals;
      let newTotalAmount = existingCustomer.totalAmount;

      if (customerData.animals && Array.isArray(customerData.animals)) {
        let currentTotalAmountForAnimals = 0;
        processedAnimals = customerData.animals.map(animalInput => {
          const total = (animalInput.weight || 0) * (animalInput.price || 0);
          currentTotalAmountForAnimals += total;
          return {
            id: animalInput.id || crypto.randomUUID(),
            type: animalInput.type,
            number: animalInput.number,
            weight: animalInput.weight,
            price: animalInput.price,
            status: animalInput.status || 'حي',
            total,
            compositeKey: `${animalInput.type}-${animalInput.number}`,
          };
        });
        newTotalAmount = currentTotalAmountForAnimals;
      }
      
      let processedPayments: PaymentDetail[] = existingCustomer.payments || [];
      if (customerData.payments && Array.isArray(customerData.payments)) {
        processedPayments = customerData.payments.map(p => {
          const partsWithIds = p.parts.map(part => ({
            ...part,
            id: part.id || crypto.randomUUID(),
          }));
          const totalTransactionNIS = calculateTransactionNISTotal(partsWithIds);
          return {
            ...p,
            id: p.id || crypto.randomUUID(),
            parts: partsWithIds,
            totalTransactionNIS,
            paymentDate: p.paymentDate || Date.now(),
          };
        });
      }
      const newTotalPaidNIS = calculateTotalPaidNIS(processedPayments);
      const finalTotalAmount = customerData.totalAmount !== undefined ? customerData.totalAmount : newTotalAmount;
      const newBalance = finalTotalAmount - newTotalPaidNIS;

      const updatePayload: Partial<Omit<Customer, 'id'>> = { ...customerData }; 
      delete (updatePayload as any).id; 
      
      if (customerData.animals && Array.isArray(customerData.animals)) {
        updatePayload.animals = processedAnimals;
      }
      if (customerData.payments && Array.isArray(customerData.payments)) {
        updatePayload.payments = processedPayments;
      }
      updatePayload.totalAmount = finalTotalAmount;
      updatePayload.totalPaidNIS = newTotalPaidNIS;
      updatePayload.balance = newBalance;
      updatePayload.updatedAt = Date.now();

      await firebaseUpdateData(customerData.id, updatePayload);
    } catch (err: any) {
      // storeError will be updated by the firebaseError watcher
      throw err;
    }
  };
  
  const deleteCustomer = async (customerId: string) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot delete customer.";
      throw new Error("User not authenticated");
    }
    try {
      await firebaseRemoveData(customerId);
    } catch (err: any) {
      // storeError will be updated by the firebaseError watcher
      throw err;
    }
  };

  const localSetError = (message: string | null) => { // Renamed to avoid conflict if setError is imported
    storeError.value = message; 
  };

  const clearError = () => {
    localSetError(null);
  };

  // This function might need to be re-evaluated or removed if payments are handled directly through updateCustomer
  /*
  const updateCustomerFinancials = async (customerId: string, paymentDetails: PaymentDetail) => {
    if (!authStore.userId) {
      localSetError("User not authenticated. Cannot update financials.");
      throw new Error("User not authenticated for financial update");
    }
    const customer = storeCustomers.value.find(c => c.id === customerId);
    if (customer) {
      const updatedPayments = [...(customer.payments || []), { 
        ...paymentDetails, 
        id: paymentDetails.id || crypto.randomUUID(), 
        paymentDate: paymentDetails.paymentDate || Date.now(),
        // Ensure totalTransactionNIS is calculated for the new payment detail
        totalTransactionNIS: calculateTransactionNISTotal(paymentDetails.parts.map(part => ({...part, id: part.id || crypto.randomUUID()})))
      }];
      const newTotalPaidNIS = calculateTotalPaidNIS(updatedPayments);
      const newBalance = customer.totalAmount - newTotalPaidNIS;
      try {
        await firebaseUpdateData(customerId, { 
          payments: updatedPayments, 
          totalPaidNIS: newTotalPaidNIS, 
          balance: newBalance, 
          updatedAt: Date.now() 
        });
      } catch (err: any) {
        localSetError(`Failed to update financials for customer ${customerId}: ${err.message}`);
        throw err; 
      }
    } else {
      localSetError(`Customer ${customerId} not found for financial update.`);
      throw new Error(`Customer ${customerId} not found for financial update.`);
    }
  };
  */

  const getCustomerById = computed(() => {
    return (id: string) => storeCustomers.value.find(c => c.id === id) || null;
  });

  // Add fetchCustomers method for components that expect it
  const fetchCustomers = async () => {
    if (!authStore.userId) {
      localSetError("User not authenticated. Cannot fetch customers.");
      return;
    }
    try {
      subscribe(); // This will trigger the data loading
      lastFetchTimestamp.value = Date.now();
    } catch (err: any) {
      localSetError(`Failed to fetch customers: ${err.message}`);
    }
  };

  return {
    customers: computed(() => storeCustomers.value),
    loading: computed(() => storeLoading.value),
    error: computed(() => storeError.value),
    lastFetchTimestamp: computed(() => lastFetchTimestamp.value), // Expose as computed
    addCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomerById,
    setError: localSetError, // Expose the local error setter
    clearError, // Expose the clearError function
    fetchCustomers, // Add this method
    // Add fetchCustomerById if it's not implicitly covered or needed directly
    fetchCustomerById: async (id: string): Promise<Customer | null> => {
      if (!authStore.userId) {
        localSetError("User not authenticated. Cannot fetch customer.");
        return null;
      }
      // Attempt to get from local store first
      const localCustomer = storeCustomers.value.find(c => c.id === id);
      if (localCustomer) return localCustomer;

      // If not found, and assuming useFirebaseDB might not have a direct single fetch by ID method exposed here,
      // this might require either enhancing useFirebaseDB or relying on the subscription to eventually populate it.
      // For now, we'll rely on the existing subscription and local find.
      // A more direct fetch from Firebase might be needed if the customer isn't in the local cache.
      // This is a placeholder for potential direct fetch logic if needed.
      console.warn(`Customer with ID ${id} not found in local store. Ensure data is fetched.`);
      return null; // Or trigger a specific fetch if available
    },
  };
});
