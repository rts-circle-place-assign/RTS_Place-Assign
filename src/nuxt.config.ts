// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

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
      script: [
        {
          src: `https://use.typekit.net/${process.env.ADOBE_FONTS_ID}.js`,
        },
      ],
    },
  },

  devtools: { enabled: false },
  components: [{ path: '~/components', pathPrefix: false }],

  // @ts-ignore
  buildModules: ['@nuxtjs/style-resources'],

  modules: ['@pinia/nuxt', '@nuxt/image'],
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '@/assets/scss/helpers.scss', '@/assets/scss/common.scss'],
  plugins: ['@/plugins/fontawesome.ts'],

  nitro: {
    plugins: ['~/server/database.ts'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },

  vue: {
    compilerOptions: {
      comments: false,
    },
  },

  image: {
    domains: ['https://drive.google.com', `${process.env.SUPABASE_URL}`],
  },

  runtimeConfig: {
    gas: {
      applicationData: process.env.GAS_URL,
      beforeFixData: process.env.GAS_BEFORE_FIX_URL,
      pastPlaceAssign: process.env.GAS_PAST_URL,
      studentDiscount: process.env.GAS_STUDENTDISCOUNT_URL,
      studentDiscountApplication: process.env.GAS_STUDENTDISCOUNT_APPLICATION_URL,
      beforeResult: process.env.GAS_BEFORE_CROWD_URL,
      blockNumber: process.env.GAS_BLOCK_NUMBER_URL,
      placeAssignMaster: process.env.GAS_PLACE_ASSIGN_MASTER_URL,
      emailMaster: process.env.GAS_EMAIL_URL,
    },
    auth: {
      basic_auth_enabled: process.env.BASIC_AUTH_ENABLED,
      basic_auth_user: process.env.BASIC_AUTH_USER,
      basic_auth_password: process.env.BASIC_AUTH_PASSWORD,
    },
    mongo: {
      MONGO_URL: process.env.MONGO_URL,
    },
    fonts: {
      adobeFontsId: process.env.ADOBE_FONTS_ID,
    },
    public: {
      pri_staff_password: process.env.PRI_STAFF_PASSWORD,
      google_password: process.env.GOOGLE_PASSWORD,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },

  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  compatibilityDate: '2025-01-11',
})
