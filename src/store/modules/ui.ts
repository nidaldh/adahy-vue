import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUIStore = defineStore('ui', () => {
  const language = ref('ar'); // Default language: Arabic
  const direction = computed(() => (language.value === 'ar' ? 'rtl' : 'ltr'));

  function setLanguage(lang: string) {
    language.value = lang;
    // Optionally, save to localStorage or update html lang attribute here if needed globally
    if (document.documentElement) {
      document.documentElement.lang = lang;
      document.documentElement.dir = direction.value;
    }
  }

  // Initialize with Arabic
  if (document.documentElement) {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }

  return {
    language,
    direction,
    setLanguage,
  };
});