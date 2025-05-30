<!-- Memory-efficient lazy loading image component -->
<template>
  <div 
    ref="containerRef"
    :class="[
      'lazy-image-container',
      { 'loading': isLoading, 'loaded': isLoaded, 'error': hasError }
    ]"
    :style="containerStyle"
  >
    <!-- Placeholder while loading -->
    <div 
      v-if="isLoading || (!isLoaded && !hasError)"
      class="lazy-image-placeholder"
      :style="placeholderStyle"
    >
      <slot name="placeholder">
        <div class="placeholder-shimmer"></div>
      </slot>
    </div>

    <!-- Actual image -->
    <img
      v-if="shouldLoadImage"
      ref="imageRef"
      :src="optimizedSrc"
      :alt="alt"
      :loading="nativeLoading ? 'lazy' : 'eager'"
      :class="imageClasses"
      :style="imageStyle"
      @load="handleLoad"
      @error="handleError"
    >

    <!-- Error state -->
    <div 
      v-if="hasError"
      class="lazy-image-error"
    >
      <slot name="error">
        <div class="error-placeholder">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
          <span>Failed to load image</span>
        </div>
      </slot>
    </div>

    <!-- Loading indicator overlay -->
    <div 
      v-if="isLoading && showLoadingIndicator"
      class="lazy-image-loading"
    >
      <slot name="loading">
        <div class="loading-spinner"></div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

interface Props {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  placeholder?: string;
  fallback?: string;
  lazy?: boolean;
  rootMargin?: string;
  threshold?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  sizes?: string;
  responsive?: boolean;
  blur?: boolean;
  fadeIn?: boolean;
  retryAttempts?: number;
  cache?: boolean;
  nativeLoading?: boolean;
  showLoadingIndicator?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  lazy: true,
  rootMargin: '50px',
  threshold: 0.1,
  quality: 80,
  format: 'webp',
  responsive: true,
  blur: true,
  fadeIn: true,
  retryAttempts: 3,
  cache: true,
  nativeLoading: false,
  showLoadingIndicator: true
});

// Refs
const containerRef = ref<HTMLElement>();
const imageRef = ref<HTMLImageElement>();

// State
const isIntersecting = ref(false);
const isLoading = ref(false);
const isLoaded = ref(false);
const hasError = ref(false);
const retryCount = ref(0);

// Image cache for memory efficiency
const imageCache = new Map<string, {
  blob: Blob;
  url: string;
  timestamp: number;
}>();

// Intersection Observer
let observer: IntersectionObserver | null = null;

// Computed properties
const shouldLoadImage = computed(() => {
  return !props.lazy || isIntersecting.value;
});

const optimizedSrc = computed(() => {
  if (!props.src) return '';
  
  // Check cache first
  const cached = imageCache.get(props.src);
  if (cached && props.cache) {
    return cached.url;
  }
  
  // Return original src for now (could be enhanced with CDN optimization)
  return props.src;
});

const containerStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  position: 'relative' as const,
  overflow: 'hidden' as const,
  backgroundColor: '#f0f0f0'
}));

const placeholderStyle = computed(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
  backgroundImage: props.placeholder ? `url(${props.placeholder})` : undefined,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: props.blur ? 'blur(5px)' : undefined
}));

const imageClasses = computed(() => [
  'lazy-image',
  {
    'fade-in': props.fadeIn && isLoaded.value,
    'responsive': props.responsive
  }
]);

const imageStyle = computed(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  transition: props.fadeIn ? 'opacity 0.3s ease-in-out' : undefined,
  opacity: isLoaded.value ? 1 : 0
}));

// Methods
const setupIntersectionObserver = () => {
  if (!props.lazy || !containerRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        isIntersecting.value = true;
        observer?.disconnect();
      }
    },
    {
      rootMargin: props.rootMargin,
      threshold: props.threshold
    }
  );

  observer.observe(containerRef.value);
};

const handleLoad = async () => {
  isLoading.value = false;
  isLoaded.value = true;
  hasError.value = false;

  // Cache the image if enabled
  if (props.cache && imageRef.value) {
    await cacheImage(props.src);
  }
};

const handleError = () => {
  isLoading.value = false;
  hasError.value = true;

  // Retry logic
  if (retryCount.value < props.retryAttempts) {
    retryCount.value++;
    setTimeout(() => {
      hasError.value = false;
      isLoading.value = true;
      // Force reload by adding timestamp
      const img = imageRef.value;
      if (img) {
        img.src = `${props.src}?retry=${retryCount.value}`;
      }
    }, 1000 * retryCount.value); // Exponential backoff
  } else if (props.fallback) {
    // Use fallback image
    const img = imageRef.value;
    if (img) {
      img.src = props.fallback;
    }
  }
};

const cacheImage = async (src: string) => {
  try {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    
    // Clean up old cache entries (simple LRU)
    if (imageCache.size > 50) {
      const oldestKey = Array.from(imageCache.keys())[0];
      const oldEntry = imageCache.get(oldestKey);
      if (oldEntry) {
        URL.revokeObjectURL(oldEntry.url);
        imageCache.delete(oldestKey);
      }
    }
    
    imageCache.set(src, {
      blob,
      url,
      timestamp: Date.now()
    });
  } catch (error) {
    console.warn('Failed to cache image:', error);
  }
};

const cleanupCache = () => {
  imageCache.forEach(entry => {
    URL.revokeObjectURL(entry.url);
  });
  imageCache.clear();
};

// Watchers
watch(shouldLoadImage, (should) => {
  if (should && !isLoaded.value && !hasError.value) {
    isLoading.value = true;
  }
});

// Lifecycle
onMounted(async () => {
  await nextTick();
  
  if (props.lazy) {
    setupIntersectionObserver();
  } else {
    isIntersecting.value = true;
    isLoading.value = true;
  }
});

onUnmounted(() => {
  observer?.disconnect();
  // Don't cleanup cache on unmount to allow reuse
});

// Cleanup on app unmount
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', cleanupCache);
}
</script>

<style scoped>
.lazy-image-container {
  display: inline-block;
  position: relative;
  background-color: #f0f0f0;
}

.lazy-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lazy-image.responsive {
  max-width: 100%;
  height: auto;
}

.lazy-image.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

.lazy-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
}

.placeholder-shimmer {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.lazy-image-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #999;
}

.error-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  font-size: 12px;
}

.lazy-image-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .lazy-image-placeholder,
  .placeholder-shimmer {
    background-color: #2a2a2a;
  }
  
  .placeholder-shimmer {
    background: linear-gradient(
      90deg,
      #2a2a2a 25%,
      #3a3a3a 50%,
      #2a2a2a 75%
    );
  }
  
  .lazy-image-error {
    background-color: #1a1a1a;
    color: #666;
  }
}
</style>
