<script setup lang="ts"></script>

<template>
  <footer class="app-footer">
    <p class="text-primary">This is the footer with primary color text.</p>
    <p class="text-secondary">This is the footer with secondary color text.</p>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--footer-background-color, #111827);
  color: white;
  padding: 1rem;
  text-align: center;
  height: var(--footer-height, 48px);
}
</style>