<template>
  <div id="vue-app-root" :dir="direction">
    <template v-if="authStore.isAuthenticated">
      <AppHeader :userEmail="authStore.user?.email || ''" @logout="authStore.logout" />
      <main class="main-container">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </template>
    <template v-else-if="authStore.loading && !authStore.user">
      <div class="loading-full-page">
        <LoadingSpinner />
        <p>جاري التحميل...</p>
      </div>
    </template>
    <template v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '@/store/modules/auth';
import { useUIStore } from '@/store/modules/ui'; // Import UI store
import AppHeader from '@/components/common/AppHeader.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

const authStore = useAuthStore();
const uiStore = useUIStore(); // Use UI store

// Use computed property for direction based on UI store
const direction = computed(() => uiStore.direction);

// Initialize language (optional, if you want to set it from App.vue, otherwise store handles it)
// uiStore.setLanguage('ar'); 

</script>

<style lang="scss">
// Import global styles and RTL specific styles
@use '@/assets/styles/main.scss';
@use '@/assets/styles/rtl.scss';

.main-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - 120px); // Adjust based on header/footer
}

.loading-full-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
}

// Transitions for router-view
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
