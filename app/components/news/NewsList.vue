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
    class="flex flex-col gap-6 news-list"
  >
    <div
      v-for="item in news"
      :key="item.id"
    >
      <NewsItem
        :item="item"
        class="mb-2"
      />
      <div>
        <a :href="`/news/${item.slug}`">Read more</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>