import { ref, watch, computed, shallowRef, type Ref } from 'vue';

/**
 * Custom composable for debouncing input values
 * @param value - The reactive value (Ref) to debounce
 * @param delay - Debounce delay in milliseconds (default: 300ms)
 * @returns The debounced value as a Ref
 */
export function useDebounce<T>(value: Ref<T>, delay = 300): Ref<T> {
  const debouncedValue = ref(value.value) as Ref<T>; // Initialize with the current value of the ref
  let timeoutId: NodeJS.Timeout;

  watch(
    value, // Watch the ref directly
    (newValue) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        debouncedValue.value = newValue;
      }, delay);
    }
    // No immediate: true needed here as we initialize debouncedValue with value.value
  );

  return debouncedValue;
}

/**
 * Custom composable for throttling function calls
 * @param fn - Function to throttle
 * @param delay - Throttle delay in milliseconds (default: 300ms)
 * @returns Throttled function
 */
export function useThrottle<T extends (...args: any[]) => any>(fn: T, delay = 300) {
  let lastCall = 0;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args);
    }
  };
}

/**
 * Memoization composable for expensive computations
 * @param fn - Function to memoize
 * @param keyFn - Function to generate cache key (optional)
 * @param maxSize - Maximum cache size (default: 50)
 */
export function useMemoize<T extends (...args: any[]) => any>(
  fn: T,
  keyFn?: (...args: Parameters<T>) => string,
  maxSize = 50
) {
  const cache = new Map<string, ReturnType<T>>();
  
  const memoizedFn = (...args: Parameters<T>): ReturnType<T> => {
    const key = keyFn ? keyFn(...args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = fn(...args);
    
    // Manage cache size
    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value as string | undefined;
      if (firstKey !== undefined) {
        cache.delete(firstKey);
      }
    }
    
    cache.set(key, result);
    return result;
  };
  
  const clearCache = () => cache.clear();
  const getCacheSize = () => cache.size;
  const getCacheKeys = () => Array.from(cache.keys());
  
  return {
    memoizedFn,
    clearCache,
    getCacheSize,
    getCacheKeys
  };
}

/**
 * Performance-aware computed property with caching
 * @param getter - Computed getter function
 * @param deps - Dependencies to watch for changes
 * @param enableCache - Whether to enable caching (default: true)
 */
export function usePerformantComputed<T>(
  getter: () => T,
  deps: any[] = [],
  enableCache = true
) {
  const cache = shallowRef<T>();
  const isStale = ref(true);
  
  // Watch dependencies for changes
  watch(
    deps,
    () => {
      isStale.value = true;
    },
    { deep: true }
  );
  
  return computed(() => {
    if (enableCache && !isStale.value && cache.value !== undefined) {
      return cache.value;
    }
    
    const result = getter();
    
    if (enableCache) {
      cache.value = result;
      isStale.value = false;
    }
    
    return result;
  });
}

/**
 * Batch updates to prevent excessive re-renders
 * @param delay - Delay before executing batched updates (default: 16ms)
 */
export function useBatchUpdates(delay = 16) {
  const pendingUpdates = new Set<() => void>();
  let timeoutId: NodeJS.Timeout | null = null;
  
  const batchUpdate = (updateFn: () => void) => {
    pendingUpdates.add(updateFn);
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      pendingUpdates.forEach(fn => fn());
      pendingUpdates.clear();
      timeoutId = null;
    }, delay);
  };
  
  const flushUpdates = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    
    pendingUpdates.forEach(fn => fn());
    pendingUpdates.clear();
  };
  
  return {
    batchUpdate,
    flushUpdates,
    getPendingCount: () => pendingUpdates.size
  };
}

/**
 * Frame-based animation utilities
 */
export function useAnimationFrame() {
  let rafId: number | null = null;
  
  const requestFrame = (callback: () => void) => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    
    rafId = requestAnimationFrame(callback);
  };
  
  const cancelFrame = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };
  
  return {
    requestFrame,
    cancelFrame
  };
}

/**
 * Image lazy loading with performance optimization
 * @param threshold - Intersection threshold (default: 0.1)
 * @param rootMargin - Root margin for intersection observer (default: '50px')
 */
export function useLazyImage(threshold = 0.1, rootMargin = '50px') {
  const imageRef = ref<HTMLImageElement>();
  const isLoaded = ref(false);
  const isLoading = ref(false);
  const hasError = ref(false);
  
  let observer: IntersectionObserver | null = null;
  
  const startLoading = (src: string) => {
    if (isLoading.value || isLoaded.value) return;
    
    isLoading.value = true;
    hasError.value = false;
    
    const img = new Image();
    img.onload = () => {
      if (imageRef.value) {
        imageRef.value.src = src;
        isLoaded.value = true;
        isLoading.value = false;
      }
    };
    img.onerror = () => {
      hasError.value = true;
      isLoading.value = false;
    };
    img.src = src;
  };
  
  const setupObserver = (src: string) => {
    if (!imageRef.value) return;
    
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startLoading(src);
          observer?.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(imageRef.value);
  };
  
  return {
    imageRef,
    isLoaded,
    isLoading,
    hasError,
    setupObserver
  };
}
