import type { INews } from "~/types/News";

import { testNews } from "~/testData/testNews";

export function useNewsApi() {
  async function fetchNews(): Promise<INews[]> {
    // TODO заменить на реальный API вызов
    return new Promise<INews[]>((resolve) => {
      resolve(testNews);
    });
    // return fetchData('/api/news');
  };

  async function fetchNewsById(id: number): Promise<INews | null> {
    // TODO заменить на реальный API вызов
    return new Promise<INews | null>((resolve) => {
      const foundNews = testNews.find((item) => item.id === id) || null;
      resolve(foundNews);
    });
    // return fetchData(`/api/news/${id}`);
  }

  async function fetchNewsBySlug(slug: string): Promise<INews | null> {
    // TODO заменить на реальный API вызов
    return new Promise<INews | null>((resolve) => {
      const foundNews = testNews.find((item) => item.slug === slug) || null;
      resolve(foundNews);
    });
    // return fetchData(`/api/news/${id}`);
  }

  return {
    fetchNews,
    fetchNewsById,
    fetchNewsBySlug,
  };
}