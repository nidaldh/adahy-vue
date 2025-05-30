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

export interface Customer {
  id: string; 
  name: string;
  phone?: string;
  address?: string; // Add address field
  notes?: string;   // Add notes field
  animals: Animal[];
  totalAmount: number; 
  totalPayments: number; 
  balance: number; 
  createdAt?: number;
  updatedAt?: number;
}

export type NewCustomerData = Omit<Customer, 'id' | 'createdAt' | 'updatedAt' | 'totalAmount' | 'totalPayments' | 'balance'> & {
  animals: Array<Omit<Animal, 'id' | 'total' | 'compositeKey'> & Partial<Pick<Animal, 'id' | 'status'>>>
};
export type UpdateCustomerData = Partial<Omit<Customer, 'id' | 'createdAt' | 'updatedAt' | 'balance' | 'totalPayments'>> & { id: string };


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

      const newCustomer: Omit<Customer, 'id'> = {
        ...customerData,
        animals: processedAnimals,
        totalAmount,
        totalPayments: 0,
        balance: totalAmount,
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
      
      const totalPayments = existingCustomer.totalPayments || 0;
      const finalTotalAmount = customerData.totalAmount !== undefined ? customerData.totalAmount : newTotalAmount;
      const newBalance = finalTotalAmount - totalPayments;

      const updatePayload: Partial<Omit<Customer, 'id'>> = { ...customerData }; 
      delete (updatePayload as any).id; 
      
      if (customerData.animals && Array.isArray(customerData.animals)) {
        updatePayload.animals = processedAnimals;
      }
      updatePayload.totalAmount = finalTotalAmount;
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

  const updateCustomerFinancials = async (customerId: string, paymentAmountDelta: number) => {
    if (!authStore.userId) {
      localSetError("User not authenticated. Cannot update financials.");
      throw new Error("User not authenticated for financial update");
    }
    const customer = storeCustomers.value.find(c => c.id === customerId);
    if (customer) {
      const newTotalPayments = (customer.totalPayments || 0) + paymentAmountDelta;
      const newBalance = customer.totalAmount - newTotalPayments;
      try {
        await firebaseUpdateData(customerId, { totalPayments: newTotalPayments, balance: newBalance, updatedAt: Date.now() });
      } catch (err: any) {
        localSetError(`Failed to update financials for customer ${customerId}: ${err.message}`);
        throw err; 
      }
    } else {
      localSetError(`Customer ${customerId} not found for financial update.`);
      throw new Error(`Customer ${customerId} not found for financial update.`);
    }
  };

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
    updateCustomerFinancials,
    getCustomerById,
    setError: localSetError, // Expose the local error setter
    fetchCustomers, // Add this method
  };
});
