<template>
  <div class="app">
    <slot name="header">
      <AppHeader />
    </slot>

    <div class="app-layout-content">
      <slot name="leftside">
        <AppLeftSide />
      </slot>

      <main class="app-main">
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
  color: var(--text-color);

  padding-top: var(--header-height);
  padding-bottom: var(--footer-height);
}

.app-layout-content {
  display: grid;
  grid-template-columns:
    var(--left-side-width) 1fr var(--right-side-width);
  gap: 1rem;

  min-height: 100%;
}

.app-main {
  flex: 1;
  padding: 1rem;
  background-color: var(--body-background-color);
}
</style>