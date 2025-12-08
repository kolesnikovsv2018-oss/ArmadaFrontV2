<script setup lang="ts">
import type { IAppBanner } from '~/types/AppBanner';

interface IHeroBlockProps {
  banners: IAppBanner[];
  delayInMs?: number;
}

const props = defineProps<IHeroBlockProps>();

const bannerNumber = ref<number>(0);

const currentBanner = computed(() => {
  return props.banners?.[bannerNumber.value];
});

const startStyle = computed(() => {
  return {
    backgroundImage: `url(${currentBanner.value?.backgroundImageUrl || ''})`,
  };
});

let timer: number | null = null;

watch(
  () => props.banners,
  () => {
    start();
  }
)

onMounted(() => {
  start();
});

function nextImage() {
  bannerNumber.value =
    (bannerNumber.value + 1) % props.banners.length;
};

function prevImage() {
  bannerNumber.value =
    (bannerNumber.value - 1 + props.banners.length) % props.banners.length;
};

function start() {
  if (props.banners.length > 1) {
    timer = setInterval(nextImage, props.delayInMs ?? 5000);
  }
}

function stop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function next() {
  stop();
  nextImage();
  start();
}

function prev() {
  stop();
  prevImage();
  start();
}
</script>

<template>
  <section
    class="relative w-full p-0 h-96 bg-cover bg-center"
    :style="startStyle"
  >
    <div
      v-if="!!currentBanner"
      class="container mx-auto px-4 flex flex-col justify-center h-full text-white"
    >
      <h1 class="text-4xl font-bold mb-4">{{ currentBanner?.title }}</h1>
      <p class="text-lg mb-6">{{ currentBanner?.subtitle }}</p>
    </div>

    <div
      v-if="props.banners.length > 1"
      class="pointer-events-none absolute inset-0 flex items-center justify-between px-4"
    >
      <button
        type="button"
        class="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white shadow-lg transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/80"
        aria-label="Previous slide"
        @click="prev"
      >
        <Icon name="ph:caret-left-bold" size="24" />
      </button>
      <button
        type="button"
        class="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white shadow-lg transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/80"
        aria-label="Next slide"
        @click="next"
      >
        <Icon name="ph:caret-right-bold" size="24" />
      </button>
    </div>
  </section>
</template>