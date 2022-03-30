export default {
  // Build only client-side (https://go.nuxtjs.dev/config-ssr)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    base: '/bridge-training-engine/'
  },

  static: {
    prefix: false
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bridge Training Engine',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Free and Open Source platform for Bridge training.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined' }
    ],
    script: [
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/node_modules/bulma/css/bulma.min.css',
    '@/assets/css/custom.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/toast',
  ],

  toast: {
    position: 'top-right',
    duration: 2000
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  loading: '@/components/loadingBar.vue'

}
