<script setup lang="ts">
const h1Color = '#ff0000';
const h2Color = '#00ff00';
const h3Color = '#0000ff';
</script>

<template>
  <header class="p-4 fixed top-0 left-0 right-0 flex gap-3">
    <img
      src="/images/logo.png"
      alt="Logo"
      class="h-8 w-8"
    />
    <h1 class="text-3xl font-bold text-primary"> Hello world! </h1>
  </header>
</template>

<style scoped>
header {
  background-color: var(--header-background-color, #111827);
  height: var(--header-height, 48px);
}
</style>