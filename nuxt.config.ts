import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: true },
  // devServer: {
  //   port: 3001
  // }

  modules: [
    '@pinia/nuxt',
  ],

  css: [
    '~/assets/css/main.css',
    '~/assets/scss/main.scss'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
