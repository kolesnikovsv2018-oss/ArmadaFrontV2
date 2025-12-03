<script setup lang="ts">
const primaryColor = '#EE0000';
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
