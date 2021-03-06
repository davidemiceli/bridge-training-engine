import pkg from './package.json'

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

  // https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {
    appVersion: pkg.version,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bridge Training Engine',
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'author', name: 'author', content: 'Davide Miceli' },
      { hid: 'description', name: 'description', content: 'A Free and Open Source platform for Bridge Training.' },
      { hid: 'keywords', name: 'keywords', content: 'bridge, free, online bridge, play bridge, play cards, rubber bridge, acbl, duplicate bridge' }
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
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css'
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
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
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
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  loading: '@/components/LoadingBar.vue'

}
