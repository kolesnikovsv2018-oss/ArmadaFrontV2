<script lang="ts" setup>
import type { INews } from '~/types/News';

const props = defineProps<{
  news: INews[];
}>();

const hasNews = computed(() => {
  return !!props.news?.length;
});
</script>

<template>
  <div
    v-if="!hasNews"
    class=""
  >
    No news available
  </div>
  <div
    v-else
    class="flex flex-col gap-4 news-list"
  >
    <template
      v-for="item in news"
      :key="item.id"
    >
      <NewsItem :item="item" />
      <div>
        <a :href="`/news/${item.slug}`">Read more</a>
      </div>
    </template>
  </div>
</template>

<style scoped>
.news-empty-list {
  font-style: italic;
  color: var(--text-secondary-color);
}
</style>