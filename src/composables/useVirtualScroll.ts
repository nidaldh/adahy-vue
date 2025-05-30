import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useVirtualizer } from '@tanstack/vue-virtual';

/**
 * Enhanced virtual scrolling composable for large lists
 * @param items - Reactive array of items to virtualize
 * @param estimateSize - Function to estimate item height
 * @param overscan - Number of items to render outside visible area (default: 5)
 * @returns Virtual scrolling utilities
 */
export function useVirtualScroll(
  items: any,
  estimateSize: () => number = () => 100,
  overscan = 5
) {
  const parentRef = ref<HTMLElement>();
  
  const rowVirtualizer = useVirtualizer(
    computed(() => ({
      count: items.value.length,
      getScrollElement: () => parentRef.value || null,
      estimateSize,
      overscan,
    }))
  );

  return {
    parentRef,
    rowVirtualizer,
    virtualItems: computed(() => rowVirtualizer.value.getVirtualItems()),
    totalSize: computed(() => rowVirtualizer.value.getTotalSize()),
  };
}

/**
 * Performance-optimized list component wrapper
 * @param threshold - Minimum items before enabling virtualization (default: 100)
 */
export function usePerformantList<T>(threshold = 100) {
  const shouldVirtualize = (items: T[]) => items.length > threshold;
  
  const getOptimizedProps = (items: T[]) => ({
    shouldVirtualize: shouldVirtualize(items),
    itemCount: items.length,
    performance: {
      enableVirtualization: shouldVirtualize(items),
      renderStrategy: shouldVirtualize(items) ? 'virtual' : 'standard'
    }
  });

  return {
    shouldVirtualize,
    getOptimizedProps
  };
}

/**
 * Intersection Observer for lazy loading
 * @param callback - Function to call when element intersects
 * @param options - Intersection observer options
 */
export function useIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) {
  const targetRef = ref<HTMLElement>();
  const isIntersecting = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (targetRef.value) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          isIntersecting.value = entry.isIntersecting;
          if (entry.isIntersecting) {
            callback(entry);
          }
        },
        {
          rootMargin: '50px',
          threshold: 0.1,
          ...options
        }
      );
      
      observer.observe(targetRef.value);
    }
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    targetRef,
    isIntersecting
  };
}
