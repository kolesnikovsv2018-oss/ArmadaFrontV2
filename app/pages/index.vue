<script setup lang="ts">
import { useAppBannersStore } from '~/store/appBanners';

const appBannersStore = useAppBannersStore();
const newsComposables = useNews();

await appBannersStore.initBanners('default');
useBannersPreload(appBannersStore.banners);

// инициирует useAsyncData внутри композабла (один раз для обоих сервера и клиента)
await newsComposables.initNews();
</script>

<template>
  <h2 class="mb-6 text-3xl">Last news</h2>
  <NewsList :news="newsComposables.news.value" />
</template>

<style scoped></style>