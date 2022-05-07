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
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/techno-agony' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/bai-jamjuree-2' },
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/ubuntu-condensed-2' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/ekonomicznykod/icons/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/ekonomicznykod/icons/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/ekonomicznykod/icons/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/ekonomicznykod/icons/favicon/site.webmanifest' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/_animations.scss',
    '@/assets/scss/_global_variables.scss',
    '@/assets/scss/_light_colors.scss',
    '@/assets/scss/_dark_colors.scss',
    '@/assets/scss/markdown.scss',
    '@/assets/scss/navigation.scss',
    '@/assets/scss/footer.scss',
    '@/assets/scss/article.scss',
    '@/assets/scss/chat.scss',
    '@/assets/scss/header.scss',
    '@/assets/scss/main.scss', 
    '@/assets/scss/panel.scss', 
    '@/assets/scss/pages/index.scss',
    '@/assets/scss/pages/about/me.scss',
    '@/assets/scss/pages/about/blog.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/router-extras'
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

  router: {
    base: '/ekonomicznykod/'
  },

  env: {
    baseURL: process.env.BASE_URL
  }
}
