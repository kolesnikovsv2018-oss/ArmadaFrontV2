<script setup lang="ts">
import { useAppBannersStore } from '~/store/appBanners';

// definePageMeta({
//   layout: 'news-item',
// });

const appBannersStore = useAppBannersStore();

await appBannersStore.initBanners('newsItem');
useBannersPreload(appBannersStore.banners);

const route = useRoute();
const slug = route.params.slug as string;
const newsComposables = useNews();

const newsById = await newsComposables.getNewsBySlug(slug);

useHead({
  title: newsById ? newsById.title : 'News item',
  meta: [
    {
      name: 'description',
      content: newsById ? newsById.subtitle || '' : '',
    },
  ],
});
</script>

<template>
  <NewsItem
    v-if="!!newsById"
    :item="newsById"
  />
</template>