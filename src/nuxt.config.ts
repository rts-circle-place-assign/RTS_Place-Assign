// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [{ path: '~/components', pathPrefix: false }],
  buildModules: ['@nuxtjs/style-resources'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/helpers.scss',
    '@/assets/scss/common.scss',
  ],
  plugins: ['@/plugins/fontawesome.ts'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
})
