<template>
  <div class="dashboard-page" dir="rtl">
    <nav class="tabs-navigation">
      <ul>
        <li v-for="tab in tabs" :key="tab.name">
          <router-link :to="{ name: tab.name }" :class="{ 'active-tab': $route.name === tab.name }">
            {{ tab.label }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="tab-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tabs = ref([
  { label: 'إدارة العملاء والأضاحي', name: 'CustomerList', path: '/customer-list' },
  { label: 'قائمة المدفوعات', name: 'PaymentList', path: '/payments/list' },
  { label: 'إضافة دفعة', name: 'PaymentForm', path: '/payments/add' },
  { label: 'التقارير', name: 'Reports', path: '/reports' },
]);

</script>

<style scoped lang="scss">
.dashboard-page {
  padding: 20px;
}

.tabs-navigation {
  margin-bottom: 20px;
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  li a {
    padding: 10px 20px;
    text-decoration: none;
    color: #333;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-weight: 500;

    &:hover {
      background-color: #e9ecef;
    }

    &.active-tab {
      background-color: #007bff;
      color: white;
    }
  }
}

.tab-content {
  padding: 1px; // Add a dummy padding to avoid empty ruleset error
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
