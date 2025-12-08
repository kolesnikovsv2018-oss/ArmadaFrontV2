import { testBanners } from "~/testData/testBanners";
import type { IAppBanner } from "~/types/AppBanner";

export function useBannersApi() {
  function fetchBanners(bannersSlug: string): Promise<IAppBanner[]> {
    // Имитация запроса к API
    return new Promise((resolve) => {
      resolve(testBanners[bannersSlug] || []);
    });
  }

  return {
    fetchBanners,
  };
}
