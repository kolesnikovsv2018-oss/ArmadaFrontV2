<script setup lang="ts">
import type { IAppBanner } from '~/types/AppBanner';

interface IHeroBlockProps {
  banners: IAppBanner[];
  delayInMs?: number;
}

const props = defineProps<IHeroBlockProps>();

const heroBlockSection = ref<HTMLElement | null>(null);

const bannerNumber = ref<number>(0);

const currentBanner = computed(() => {
  return props.banners?.[bannerNumber.value];
});

const startStyle = computed(() => {
  return {
    backgroundImage: `url(${currentBanner.value?.backgroundImageUrl || ''})`,
  };
});

const changeImage = () => {
  bannerNumber.value =
    (bannerNumber.value + 1) % props.banners.length;

  // if (
  //   !!heroBlockSection.value
  //   && !!currentBanner.value?.backgroundImageUrl
  // ) {
  //   heroBlockSection.value.style.backgroundImage = `url(${currentBanner.value.backgroundImageUrl})`;
  // }
};

watch(
  () => props.banners,
  () => {
    start();
  }
)

onMounted(() => {
  start();
});

function start() {
  if (props.banners.length > 1) {
    setInterval(changeImage, props.delayInMs ?? 5000);
  }
}
</script>

<template>
  <section
    ref="heroBlockSection"
    class="w-full p-0 h-96 bg-cover bg-center"
    :style="startStyle"
  >
    <div
      v-if="!!currentBanner"
      class="container mx-auto px-4 flex flex-col justify-center h-full text-white"
    >
      <h1 class="text-4xl font-bold mb-4">{{ currentBanner?.title }}</h1>
      <p class="text-lg mb-6">{{ currentBanner?.subtitle }}</p>
    </div>
  </section>
</template>