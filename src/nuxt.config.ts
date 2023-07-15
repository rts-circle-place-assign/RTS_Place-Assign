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
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
});
