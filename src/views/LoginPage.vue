<template>
  <div class="login-page-container" dir="rtl">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<style scoped lang="scss">
.login-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea77 0%, #764ba277 100%); // Removed background image for now
  // background: linear-gradient(135deg, #667eea77 0%, #764ba277 100%), url('@/assets/images/background.jpg'); // Optional background
  background-size: cover;
}
</style>
