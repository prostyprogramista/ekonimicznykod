export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ekonomiczny Kod',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'UTF-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    link: [
      { href: 'https://fonts.cdnfonts.com/css/techno-agony', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;600&family=Roboto:wght@100;400;500&display=swap', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap', rel: 'stylesheet' },
      {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
      {rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png'},
      {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"},
      {rel: "manifest", href: "/site.webmanifest"}
      // { href: '/favicon.png', rel: 'icon', type: 'image/x-icon'  }
      // { rel: 'stylesheet', src: '@store/main.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/_animations.scss',
    '@/assets/scss/_light_colors.scss',
    '@/assets/scss/_dark_colors.scss',
    '@/assets/scss/_large.scss',
    '@/assets/scss/_medium.scss',
    '@/assets/scss/_small.scss',
    '@/assets/scss/markdown.scss',
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  content: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseURL: process.env.BASE_URL
  }
}
