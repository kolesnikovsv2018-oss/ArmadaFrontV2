import type { INews } from "~/types/News";

import { useNewsApi } from "./api/newsApi";

export function useNews() {
  const {
    fetchNews,
    fetchNewsById,
    fetchNewsBySlug
  } = useNewsApi();

  const news: Ref<INews[]> = ref([]);

  async function fetchAndSetNews(): Promise<INews[] | null> {
    try {
      news.value = await fetchNews();
      return news.value;
    } catch (error) {
      console.error("Failed to fetch news:", error);
      return null;
    }
  }

  async function getNewsById(id: number): Promise<INews | null> {
    const { data } = await useAsyncData<INews | null>(
      `getNewsById-${id}`,
      () => fetchNewsById(id),
      {
        server: true,
        lazy: false,
      },
    );
    return data.value || null;
  }

  async function getNewsBySlug(slug: string): Promise<INews | null> {
    const { data } = await useAsyncData<INews | null>(
      `getNewsBySlug-${slug}`,
      () => fetchNewsBySlug(slug),
      {
        server: true,
        lazy: false,
      },
    );
    return data.value || null;
  }

  // инициирует данные через useAsyncData (SSR + пайлоад на клиент)
  async function initNews() {
    const { data } = await useAsyncData(
      'getNews',
      fetchAndSetNews,
      {
        server: true,  // только на сервере
        lazy: false,   // блокирует рендер до загрузки
      },
    );
    // на клиенте данные восстанавливаются из пайлоада
    if (data.value) {
      news.value = data.value;
    }
  }

  return {
    news,
    getNewsById,
    getNewsBySlug,
    initNews,
  };
}