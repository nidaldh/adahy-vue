import { defineAsyncComponent, type Component } from 'vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';

/**
 * Create a lazy-loaded component with loading and error states
 * @param componentLoader - The dynamic import function
 * @param delay - Delay before showing loading spinner (default: 200ms)
 * @returns Async component with loading and error handling
 */
export function createLazyComponent(
  componentLoader: () => Promise<Component>,
  delay = 200
) {
  return defineAsyncComponent({
    loader: componentLoader,
    loadingComponent: LoadingSpinner,
    errorComponent: ErrorMessage,
    delay,
    timeout: 10000, // 10 seconds timeout
  });
}

/**
 * Preload a component for better performance
 * @param componentLoader - The dynamic import function
 */
export function preloadComponent(componentLoader: () => Promise<Component>) {
  // Preload the component in the background
  componentLoader().catch(() => {
    // Silently fail if preloading fails
  });
}

/**
 * Create a lazy route component
 * @param routePath - The route path for the component
 * @returns Async component for routing
 */
export function createLazyRoute(routePath: string) {
  return createLazyComponent(() => import(`@/views/${routePath}.vue`));
}
