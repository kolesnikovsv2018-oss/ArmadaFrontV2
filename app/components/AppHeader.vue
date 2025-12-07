<script setup lang="ts">
const h1Color = '#ff0000';
const h2Color = '#00ff00';
const h3Color = '#0000ff';
</script>

<template>
  <header class="p-4 bg-gray-200">
    <h1 class="text-3xl font-bold underline text-primary"> Hello world! </h1>
    <div class="text-secondary">TEST TEST TEST !!!</div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--header-background-color, #111827);
  color: white;
  padding: 1rem;
  text-align: center;
  height: var(--header-height, 48px);
}
</style>