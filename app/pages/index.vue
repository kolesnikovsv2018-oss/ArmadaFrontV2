<script setup lang="ts">
const newsComposables = useNews();

// инициирует useAsyncData внутри композабла (один раз для обоих сервера и клиента)
await newsComposables.initNews();
</script>

<template>
  <h2>Last news</h2>
  <NewsList :news="newsComposables.news.value" />
</template>

<style scoped></style>