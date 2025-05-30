import { ref as vueRef, onUnmounted, type Ref } from 'vue';
import { database } from '@/services/firebase'; // Corrected import
import { ref as dbRef, onValue, set, push, update, remove, get } from 'firebase/database'; // Removed unused DatabaseReference and Query
import { useAuthStore } from '@/store/modules/auth';

interface FirebaseDBOptions<T> {
  transform?: (data: any) => T; // Optional data transformation function
}

export function useFirebaseDB<T>(collectionPath: string, options?: FirebaseDBOptions<T>) {
  const data: Ref<T[] | T | null> = vueRef(null); // Can be an array for collections, or single object for a document
  const loading = vueRef(false);
  const error = vueRef<Error | null>(null);
  const authStore = useAuthStore();

  let unsubscribe: (() => void) | null = null;

  const getFullPath = (pathSuffix?: string): string | null => {
    if (!authStore.userId) {
      console.warn('useFirebaseDB: User not authenticated.');
      return null;
    }
    let fullPath = `users/${authStore.userId}/${collectionPath}`;
    if (pathSuffix) {
      fullPath += `/${pathSuffix}`;
    }
    return fullPath;
  };

  const subscribe = (pathSuffix?: string, isSingleDoc = false) => {
    const fullPath = getFullPath(pathSuffix);
    if (!fullPath) return;

    const targetRef = dbRef(database, fullPath);
    loading.value = true;
    error.value = null;

    unsubscribe = onValue(targetRef, (snapshot) => {
      if (snapshot.exists()) {
        const rawData = snapshot.val();
        let processedData: any;
        if (isSingleDoc) {
          processedData = options?.transform ? options.transform(rawData) : rawData;
        } else { // Collection
          processedData = Object.keys(rawData).map(key => ({
            id: key,
            ...(options?.transform ? options.transform(rawData[key]) : rawData[key])
          }));
        }
        data.value = processedData;
      } else {
        data.value = isSingleDoc ? null : [];
      }
      loading.value = false;
    }, (err) => {
      console.error(`useFirebaseDB Error (${fullPath}):`, err);
      error.value = err;
      loading.value = false;
    });
  };

  const fetchData = async (pathSuffix?: string, isSingleDoc = false): Promise<T | T[] | null> => {
      const fullPath = getFullPath(pathSuffix);
      if (!fullPath) return null;

      loading.value = true;
      error.value = null;
      try {
          const snapshot = await get(dbRef(database, fullPath));
          if (snapshot.exists()) {
              const rawData = snapshot.val();
              let processedData: any;
               if (isSingleDoc) {
                  processedData = options?.transform ? options.transform(rawData) : rawData;
              } else {
                  processedData = Object.keys(rawData).map(key => ({
                      id: key,
                      ...(options?.transform ? options.transform(rawData[key]) : rawData[key])
                  }));
              }
              data.value = processedData; // Also update reactive ref
              return processedData;
          } else {
              data.value = isSingleDoc ? null : [];
              return data.value;
          }
      } catch (err: any) {
          error.value = err;
          return null;
      } finally {
          loading.value = false;
      }
  };


  const addData = async (itemData: Omit<T, 'id'>, pathSuffix?: string) => {
    const fullPath = getFullPath(pathSuffix);
    if (!fullPath) throw new Error("User not authenticated or path error.");

    // If pathSuffix is provided, it means we are adding to a sub-collection or a specific path.
    // If not, we add to the base collectionPath.
    const targetRef = dbRef(database, fullPath);
    const newItemRef = push(targetRef);
    await set(newItemRef, { ...itemData, createdAt: Date.now() });
    return newItemRef.key;
  };

  const updateData = async (itemId: string, itemData: Partial<T>, pathSuffix?: string) => {
    const itemFullPath = getFullPath(pathSuffix ? `${pathSuffix}/${itemId}` : itemId);
    if (!itemFullPath) throw new Error("User not authenticated or path error.");
    await update(dbRef(database, itemFullPath), { ...itemData, updatedAt: Date.now() });
  };

  const setData = async (itemId: string, itemData: T, pathSuffix?: string) => {
    const itemFullPath = getFullPath(pathSuffix ? `${pathSuffix}/${itemId}` : itemId);
    if (!itemFullPath) throw new Error("User not authenticated or path error.");
    await set(dbRef(database, itemFullPath), itemData);
  };


  const removeData = async (itemId: string, pathSuffix?: string) => {
    const itemFullPath = getFullPath(pathSuffix ? `${pathSuffix}/${itemId}` : itemId);
    if (!itemFullPath) throw new Error("User not authenticated or path error.");
    await remove(dbRef(database, itemFullPath));
  };

  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  return { data, loading, error, subscribe, fetchData, addData, updateData, setData, removeData };
}
