<script setup lang="ts">
import type { INews } from '~/types/News';

const props = defineProps<{
  item: INews;
}>();  
</script>

<template>
  <div class="p-4 bg-amber-200 rounded-lg w-full">
    <h3 class="news-item__title">{{ item.title }}</h3>
    <p class="news-item__content">{{ item.content }}</p>
    <span class="news-item__date">{{ item.publishedAt }}</span>
    <span class="news-item__author">By {{ item.author }}</span>
  </div>
</template>

<style scoped>
.news-item {
  padding: 1rem;
  border: 1px solid var(--text-secondary-color);
  border-radius: 4px;
  background-color: var(--body-background-color);
}

.news-item__title {
  color: var(--primary-color);
  margin: 0 0 0.5rem 0;
}

.news-item__content {
  color: var(--text-color);
  margin: 0 0 0.5rem 0;
}

.news-item__date {
  font-size: 0.875rem;
  color: var(--secondary-color);
  margin-right: 1rem;
}

.news-item__author {
  font-size: 0.875rem;
  color: var(--secondary-color);
}
</style>