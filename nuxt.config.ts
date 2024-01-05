// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  },
  ui: {
    icons: ['heroicons', 'material-symbols']
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  modules: ['@nuxt/ui', '@sidebase/nuxt-session'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
