<script setup lang="ts">
const primaryColor = '#1e40af';
const secondaryColor = '#9333ea';

// Устанавливаем CSS переменные
if (import.meta.client) {
  document.documentElement.style.setProperty('--color-primary', primaryColor);
  document.documentElement.style.setProperty('--color-secondary', secondaryColor);
}
</script>

<template>
  <div>
    <AppHeader />
  </div>
</template>
