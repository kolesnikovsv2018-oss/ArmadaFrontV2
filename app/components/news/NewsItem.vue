<script setup lang="ts">
import type { INews } from '~/types/News';

const props = defineProps<{
  item: INews;
}>();  
</script>

<template>
  <div class="p-4 bg-amber-200 rounded-lg w-full">
    <h3 class="mb-2 text-2xl text-primary">{{ item.title }}</h3>
    <p class="text-justify mb-4">{{ item.content }}</p>
    <div class="flex text-sm justify-between">
      <span>{{ item.publishedAt }}</span>
      <span>By {{ item.author }}</span>
    </div>
  </div>
</template>

<style scoped></style>