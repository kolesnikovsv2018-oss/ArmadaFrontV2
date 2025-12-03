<script setup lang="ts">
interface IColors {
  primary: string;
  secondary: string;
}

const colors = ref<IColors>({
  primary: '#EE0000',
  secondary: '#0000EE',
});

function onChangeColors(
  { secondary, primary }: IColors
) {
  colors.value.primary = primary;
  colors.value.secondary = secondary;

  // Устанавливаем CSS переменные
  if (import.meta.client) {
    document.documentElement.style.setProperty('--color-primary', colors.value.primary);
    document.documentElement.style.setProperty('--color-secondary', colors.value.secondary);
  }
}

onBeforeMount(() => {
  onChangeColors(colors.value);
});
</script>

<template>
  <div>
    <AppHeader />
    <button @click="onChangeColors({ primary: '#00AA00', secondary: '#AA00AA' })">Change Colors</button>
    <div class="text-primary">This is primary color text.</div>
    <div class="text-secondary">This is secondary color text.</div>
  </div>
</template>
