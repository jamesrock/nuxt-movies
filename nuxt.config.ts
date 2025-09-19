// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/fonts'],
  fonts: {
    defaults: {
      weights: ['400', '500', '600', '700'],
      styles: ['italic', 'normal'],
      subsets: ['latin']
    }
  }
})