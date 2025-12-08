import type { IAppBanner } from "~/types/AppBanner";

export const testBanners: Record<string, IAppBanner[]> = {
  default: [
    {
      title: 'Title 1',
      backgroundImageUrl: '/images/banner-1.png',
      subtitle: 'subtitle example 1',
    },
    {
      title: 'Title 2',
      backgroundImageUrl: '/images/banner-2.png',
      subtitle: 'subtitle example 2',
    },
    {
      title: 'Title 3',
      backgroundImageUrl: '/images/banner-3.png',
      subtitle: 'subtitle example 3',
    },
  ],
  newsItem: [
    {
      title: 'Title 4',
      backgroundImageUrl: '/images/banner-4.png',
      subtitle: 'subtitle example 4',
    },
  ]
};

export const testBannerImages: string[] = [
  '/images/banner-1.png',
  '/images/banner-2.png',
  '/images/banner-3.png',
  '/images/banner-4.png',
]