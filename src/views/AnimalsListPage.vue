<template>
  <div class="animals-list-page" dir="rtl">
    <div class="page-header">
      <h2>
        <i class="fas fa-list"></i>
        قائمة الأضاحي
      </h2>
      <p class="page-description">
        جميع الأضاحي مرتبة حسب النوع والرقم المركب
      </p>
    </div>

    <div v-if="loading" class="loading-container">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">جاري التحميل...</span>
      </div>
      <p>جاري تحميل البيانات...</p>
    </div>

    <div v-else class="page-content">
      <AnimalsTable :animals="allAnimals" :loading="loading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import AnimalsTable from '@/components/animal/AnimalsTable.vue';
import { useCustomersStore } from '@/store/modules/customers';

const customersStore = useCustomersStore();

// Get the allAnimals getter from the store
const allAnimals = computed(() => customersStore.allAnimals);
const loading = computed(() => customersStore.loading);

// Fetch customers data if needed
onMounted(async () => {
  if (customersStore.customers.length === 0 && !customersStore.loading) {
    await customersStore.fetchCustomers();
  }
});
</script>

<style scoped lang="scss">
.animals-list-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  .page-header {
    margin-bottom: 30px;
    text-align: center;

    h2 {
      color: #2c3e50;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      i {
        color: #3498db;
      }
    }

    .page-description {
      color: #6c757d;
      font-size: 1.1rem;
      margin: 0;
    }
  }

  .loading-container {
    padding: 40px;
    text-align: center;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);

    .spinner-border {
      width: 3rem;
      height: 3rem;
      border-width: 0.25em;
      margin-bottom: 1rem;
      display: inline-block;
      border: 0.25em solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: spinner-border 0.75s linear infinite;
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    p {
      color: #6c757d;
      font-size: 1.1rem;
    }
  }

  .page-content {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    overflow: hidden;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .animals-list-page {
    padding: 15px;

    .page-header {
      margin-bottom: 20px;

      h2 {
        font-size: 1.5rem;
        flex-direction: column;
        gap: 5px;
      }

      .page-description {
        font-size: 1rem;
      }
    }
  }
}
</style>
