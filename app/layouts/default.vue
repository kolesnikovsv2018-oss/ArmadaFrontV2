<template>
  <div class="app">
    <slot name="header">
      <AppHeader />
    </slot>

    <div class="app-layout-content">
      <slot name="leftside">
        <AppLeftSide />
      </slot>

      <main>
        <slot />
      </main>

      <slot name="rightside">
        <AppRightSide />
      </slot>
    </div>

    <slot name="footer">
      <AppFooter />
    </slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: var(--text-color)
}

.app-layout-content {
  display: grid;
  grid-template-columns:
    var(--left-side-width) 1fr var(--right-side-width);
  gap: 1rem;

  min-height: 100%;
}
</style>