// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        {
          hid: 'description',
          name: 'description',
          content: '何かのお祭りの配置関連ウェブシステムです。',
        },
        { hid: 'robots', name: 'robots', content: 'noindex' },
      ],
    },
  },
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
    auth: {
      basic_auth_enabled: process.env.BASIC_AUTH_ENABLED,
      basic_auth_user: process.env.BASIC_AUTH_USER,
      basic_auth_password: process.env.BASIC_AUTH_PASSWORD,
    },
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
})
