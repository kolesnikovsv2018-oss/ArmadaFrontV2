/**
 * Интерфейс новости
 * согласно ТЗ
 */
export interface INews {
  id: number;
  slug: string;
  title: string; // заголовок новости;
  subtitle?: string; // подзаголовок / лид (может отсутствовать);
  content: string; // основной текст (средний объем ~3000 знаков, иногда длиннее);
  publishedAt: Date; // дата и время публикации;
  source?: string; // источник / первоисточник;
  images?: string[]; // 1–2 изображения (или их отсутствие);
  tags?: string[]; // список тегов и категорий
  author?: string;
}
