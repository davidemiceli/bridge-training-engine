import pkg from './package.json'

const baseRootURL = '/bridge-training-engine/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt'
    ],

    app: {
        baseURL: baseRootURL,
        buildAssetsDir: baseRootURL,
        cdnURL: baseRootURL,
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
            script: []
        }
    },

    runtimeConfig: {
        public: {
          baseURL: baseRootURL,
          appVersion: pkg.version
        },
    },

    css: ['@/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        },
    },
    
    routeRules: {
        // Static page generated on-demand once
        '/index': { static: true },
        // Render these routes with SPA
        '/game/**': { ssr: false },
        // Static page generated on-demand, revalidates in background
        '/help/**': { swr: true }
      }
});
