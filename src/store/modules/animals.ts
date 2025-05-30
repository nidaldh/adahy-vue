import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useAuthStore } from './auth';
import type { Animal } from './customers';
import { useFirebaseDB } from '@/composables/useFirebaseDB'; // Import the actual composable

export const useAnimalsStore = defineStore('animals', () => {
  const storeGlobalAnimals = ref<Animal[]>([]);
  const storeLoading = ref(false);
  const storeError = ref<string | null>(null);
  const authStore = useAuthStore();

  // The composable expects the base collection path. User-specific pathing is handled inside useFirebaseDB.
  const { 
    data: firebaseGlobalAnimals, 
    loading: firebaseLoading, 
    error: firebaseError, 
    subscribe, 
    setData: firebaseSetData, // Using setData as compositeKey is the ID for these entries
    removeData: firebaseRemoveData,
    // fetchData: firebaseFetchData // fetchData might not be needed if subscribe handles initial load
  } = useFirebaseDB<Animal>('_globalAnimalRegistry'); // Path for the global animal registry

  // Watch for changes from the composable and update store state
  watch(firebaseGlobalAnimals, (newData) => {
    // The data from useFirebaseDB for a collection is expected to be T[] or null.
    // Ensure newData is treated as an array, even if it's a single object (though for collections, it should be T[] or null)
    if (newData === null) {
      storeGlobalAnimals.value = [];
    } else if (Array.isArray(newData)) {
      storeGlobalAnimals.value = newData;
    } else {
      // This case should ideally not happen if useFirebaseDB correctly returns T[] for collections
      storeGlobalAnimals.value = [newData] as Animal[]; 
    }
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
      subscribe(); // Subscribe to the '_globalAnimalRegistry' path
                   // User-specific pathing is handled within useFirebaseDB based on authStore.userId
    } else {
      // Data will be cleared by firebaseGlobalAnimals becoming null/empty via the composable's internal logic when authStore.userId is null.
      // Unsubscription is also handled by onUnmounted in useFirebaseDB or when subscribe is called again.
      storeGlobalAnimals.value = [];
      storeError.value = null;
      // storeLoading will be false as per firebaseLoading watcher if composable resets it.
    }
  }, { immediate: true });

  // addOrUpdateGlobalAnimalEntry uses compositeKey as the document ID in the _globalAnimalRegistry
  const addOrUpdateGlobalAnimalEntry = async (animal: Animal) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot update global animal registry.";
      throw new Error("User not authenticated for global animal registry operation");
    }
    try {
      // The `setData` function from useFirebaseDB is suitable here, using animal.compositeKey as the ID.
      await firebaseSetData(animal.compositeKey, animal);
      // The local storeGlobalAnimals will be updated automatically by the watcher on firebaseGlobalAnimals.
    } catch (err: any) {
      // storeError will be updated by the watcher for firebaseError
      throw err;
    }
  };

  const removeGlobalAnimalEntry = async (compositeKey: string) => {
    if (!authStore.userId) {
      storeError.value = "User not authenticated. Cannot update global animal registry.";
      throw new Error("User not authenticated for global animal registry operation");
    }
    try {
      await firebaseRemoveData(compositeKey);
      // The local storeGlobalAnimals will be updated automatically by the watcher on firebaseGlobalAnimals.
    } catch (err: any) {
      // storeError will be updated by the watcher for firebaseError
      throw err;
    }
  };

  const checkDuplicateAnimal = computed(() => {
    return (compositeKeyToCheck: string, excludeAnimalId?: string) => {
      return storeGlobalAnimals.value.some(animal => 
        animal.compositeKey === compositeKeyToCheck && 
        (!excludeAnimalId || animal.id !== excludeAnimalId) // animal.id is the individual animal's unique ID
      );
    };
  });

  return { 
    globalAnimals: computed(() => storeGlobalAnimals.value),
    loading: computed(() => storeLoading.value),
    error: computed(() => storeError.value),
    checkDuplicateAnimal, 
    addOrUpdateGlobalAnimalEntry, 
    removeGlobalAnimalEntry 
  };
});
