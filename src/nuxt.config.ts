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
  vue: {
    compilerOptions: {
      comments: false,
    },
  },
  runtimeConfig: {
    public: {
      thisPlaceAssign: process.env.GAS_URL,
      pastPlaceAssign: process.env.GAS_PAST_URL,
      studentDiscount: process.env.GAS_STUDENTDISCOUNT_URL,
      pastGaisyu: process.env.GAS_PAST_GAISYU_URL,
    },
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
})
