import type { INews } from "~/types/News";

export function generateTestNewsItem(id: number): INews {
  return {
    id,
    slug: `test-news-item-${id}`,
    title: `Test News Item ${id}`,
    content: `This is the content of test news item ${id}.`,
    publishedAt: new Date(`2024-0${id}-01T10:00:00Z`),
    author: `Test Author ${id}`,
  };
}

export function generateMultipleTestNewsItems(count: number): INews[] {
  const newsItems: INews[] = [];
  for (let i = 1; i <= count; i++) {
    newsItems.push(generateTestNewsItem(i));
  }
  return newsItems;
}

export const testNews: INews[] = generateMultipleTestNewsItems(30);