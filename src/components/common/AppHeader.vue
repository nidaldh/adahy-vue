<template>
  <header class="app-header" dir="rtl">
    <div class="header-content">
      <div class="logo-title">
        <h1>نظام إدارة الأضاحي</h1>
      </div>
      <nav class="main-nav">
        <!-- Navigation links can be added here if needed -->
      </nav>
      <div class="user-info">
        <span v-if="userEmail">{{ userEmail }}</span>
        <button @click="$emit('logout')" class="btn btn-logout">تسجيل الخروج</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ userEmail: string }>();
defineEmits(['logout']);
</script>

<style scoped lang="scss">
.app-header {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo-title h1 {
    font-size: 1.8rem;
    margin: 0;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 15px;

    .btn-logout {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #c0392b;
      }
    }
  }
}
</style>
