import { defineStore } from "pinia";
import { useBannersApi } from "~/composables/api/banners";

import type { IAppBanner } from "~/types/AppBanner"

export const useAppBannersStore = defineStore('appBanners', () => {
  const { fetchBanners } = useBannersApi();

  const banners = ref<IAppBanner[]>([]);

  async function getBannersBySlug(bannersSlug: string): Promise<IAppBanner[]> {
    const { data } = useAsyncData(
      `getBanners-${bannersSlug}`,
      () => fetchBanners(bannersSlug),
      {
        server: true,
        lazy: false,
      },
    );
    // на клиенте данные восстанавливаются из пайлоада
    if (data.value) {
      banners.value = data.value;
    }

    return banners.value;
  }

  function initBanners(bannersSlug: string) {
    return getBannersBySlug(bannersSlug);
  }

  return {
    banners,
    getBannersBySlug,
    initBanners,
  };
})