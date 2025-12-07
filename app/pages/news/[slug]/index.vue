<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const newsComposables = useNews();

const newsById = await newsComposables.getNewsBySlug(slug);
</script>

<template>
  <NewsItem
    v-if="!!newsById"
    :item="newsById"
  />
</template>