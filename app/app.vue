<script setup lang="ts">
import type { IAppCssVariables } from './types/ICssColors';

const startCssColors = await useApi().fetchCssVariables();

const colors = ref<IAppCssVariables>(startCssColors);

function changeAppCssVariables(
  appCssVariables: IAppCssVariables
) {
  colors.value = appCssVariables;
  useCssVariables().setCssVariables(colors.value);
}

watch(
  colors,
  (newColors) => {
    useCssVariables().setCssVariables(newColors);
  }
);

onBeforeMount(() => {
});

changeAppCssVariables(colors.value);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
