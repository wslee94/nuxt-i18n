export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],

  i18n: {
    /* module options */
    locales: [
      { name: "한국어", code: "ko", iso: "ko-KR" },
      { name: "English", code: "en", iso: "en-US" },
    ],
    defaultLocale: "ko",
    vueI18n: {
      fallbackLocale: "ko",
      messages: {
        ko: {
          welcome: "반가워요.",
        },
        en: {
          welcome: "Welcome",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
