export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'dinamic',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ChainCoin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, height=device-height' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oxygen&display=swap",
      },
    ],
    bodyAttrs: {
      class: 'has-background-grey has-navbar-fixed-top',
      style: 'min-height: 100vh'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
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
    '@nuxtjs/bulma'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
