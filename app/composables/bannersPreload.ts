import type { IAppBanner } from "~/types/AppBanner";

export function useBannersPreload(
  bannersToLoad: Ref<IAppBanner[]> | IAppBanner[] | (() => IAppBanner[])
) {
  const banners = computed<IAppBanner[]>(
    () => toValue(bannersToLoad) || []
  );

  // Preload баннеров для улучшения LCP (Largest Contentful Paint)
  if (!!banners.value.length && !!banners.value[0]) {
    console.log('[preload] banners images for LCP', banners.value.map(b => b.backgroundImageUrl));
    
    useHead({
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: banners.value[0].backgroundImageUrl,
          fetchpriority: 'high'
        },
        ...(banners.value.map(
          (banner) => ({
            rel: 'preload' as const,
            as: 'image' as const,
            href: banner.backgroundImageUrl,
            fetchpriority: 'low' as const
          })
        ))
      ]
    })
  }
}