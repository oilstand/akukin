
export default {
  ssr: false/*true*/,
  target: 'static',
  generate: {
    routes: [
        '/news/20201031001',
        '/news/20201027001',
        '/news/20201004001',
        '/news/20200121001',
        '/news/20200120001'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | AKUKIN建設',
    title: 'AKUKIN建設',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'content-language', content:'ja' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `AKUKIN建設のコーポレートサイトです。` },
        { hid: 'keywords', name: 'keywords', content: 'AKUKIN建設' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'AKUKIN建設' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://akukin.jp' },
        { hid: 'og:title', property: 'og:title', content: `AKUKIN建設` },
        { hid: 'og:description', property: 'og:description', content: 'AKUKIN建設' },
        { hid: 'og:image', property: 'og:image', content: 'https://akukin.jp/logo.png' },
        { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', href: '/icon-192x192.png' }
    ],
    script: [
      { src: 'https://www.youtube.com/iframe_api' }
    ]

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    /*'@nuxtjs/google-analytics'
    ['@nuxtjs/google-analytics', {id: 'G-QWJ6PVMT34'}]/**/
  ],
/*  googleAnalytics: {
    id: 'G-QWJ6PVMT34'
  },*/
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',/**/
  ],
  gtm: {
    id: 'GTM-WXZD9PP',
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    analyze: false,
    hardSource: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
