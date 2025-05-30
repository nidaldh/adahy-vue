<template>
  <div v-if="message" class="error-message" dir="rtl">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string | null }>();
</script>

<style scoped>
.error-message {
  color: red;
  background-color: #ffebee;
  border: 1px solid #ef9a9a;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
}
</style>
