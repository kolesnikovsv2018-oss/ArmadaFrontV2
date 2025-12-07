<script setup lang="ts">
import type { IAppCssVariables } from './types/CssVariables';

import { useCssApi } from './composables/api/cssApi';

const cssVariablesComposables = useCssVariables();

const startCssColors = await useCssApi().fetchCssVariables();

const styleObject = cssVariablesComposables.generateStyleObject(startCssColors as Record<string, string | null>);

useHead({
  htmlAttrs: {
    style: styleObject,
  }
})

const colors = ref<IAppCssVariables>(startCssColors);

function changeAppCssVariables(
  appCssVariables: IAppCssVariables
) {
  colors.value = appCssVariables;
  cssVariablesComposables.setCssVariables(colors.value);
}

watch(
  colors,
  (newColors) => {
    cssVariablesComposables.setCssVariables(newColors);
  }
);

onMounted(() => {
  changeAppCssVariables(colors.value);
});

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
