<template>
  <div class="login-form-wrapper" dir="rtl">
    <div class="login-form-card">
      <h2>تسجيل الدخول</h2>
      <div v-if="initialLoading" class="initial-load-message">
        <LoadingSpinner />
        <p>جاري التحميل...</p>
      </div>
      <form v-else @submit.prevent="performLogin">
        <ErrorMessage :message="authStore.error" />
        <div class="form-group">
          <label for="email">البريد الإلكتروني</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">كلمة المرور</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="btn btn-primary" :disabled="authStore.loading">
          <LoadingSpinner v-if="authStore.loading" />
          <span v-else>دخول</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/store/modules/auth';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ErrorMessage from '@/components/common/ErrorMessage.vue';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const initialLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    initialLoading.value = false;
  }, 500);
});

const performLogin = async () => {
  if (email.value && password.value) {
    await authStore.login(email.value, password.value);
  }
};
</script>

<style scoped lang="scss">
.login-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.login-form-card {
  background: white;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  .initial-load-message {
    padding: 20px 0;
    p {
      margin-top: 10px;
    }
  }

  .form-group {
    margin-bottom: 15px;
    text-align: right;

    label {
      display: block;
      margin-bottom: 5px;
      color: #555;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }
  }

  .btn-primary {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:hover {
      background-color: #2980b9;
    }
    &:disabled {
      background-color: #a9d6f5;
      cursor: not-allowed;
    }
  }
}
</style>
