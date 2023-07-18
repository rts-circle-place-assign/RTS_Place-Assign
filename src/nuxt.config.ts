// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{ path: "~/components", pathPrefix: false }],
  buildModules: ["@nuxtjs/style-resources"],
  css: ["@/assets/scss/common.scss", "@/assets/scss/helpers.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      thisPlaceAssign: process.env.GAS_URL,
      pastPlaceAssign: process.env.GAS_PAST_URL,
      studentDiscount: process.env.GAS_STUDENTDISCOUNT_URL,
      pastGaisyu: process.env.GAS_PAST_GAISYU_URL
    }
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
});
