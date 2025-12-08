<script setup lang="ts">
import { useAppBannersStore } from '~/store/appBanners';

const appBannersStore = useAppBannersStore();
const banners = computed(() => appBannersStore.banners || []);

// // Preload баннеров для улучшения LCP (Largest Contentful Paint)
// if (!!banners.value.length && !!banners.value[0]) {
//   console.log('[preload] banners images for LCP', banners.value.map(b => b.backgroundImageUrl));
  
//   useHead({
//     link: [
//       {
//         rel: 'preload',
//         as: 'image',
//         href: banners.value[0].backgroundImageUrl,
//         fetchpriority: 'high'
//       },
//       ...(banners.value.map(
//         (banner) => ({
//           rel: 'preload' as const,
//           as: 'image' as const,
//           href: banner.backgroundImageUrl,
//           fetchpriority: 'low' as const
//         })
//       ))
//     ]
//   })
// }
</script>

<template>
  <div class="app">
    <slot name="header">
      <AppHeader />
    </slot>

    <slot name="banner">
      <AppBanner
        :banners="banners"
        class="h-96"
      />
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