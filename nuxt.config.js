const fs = require('fs');
const report_datas = JSON.parse(fs.readFileSync('posts/newsdats.json', 'utf8'));

export default {
  ssr: true,
  //target: 'static',
  generate: {
    routes() {
        return [...report_datas.map((report) => {
            return { route: '/news/'+report.url, payload: {test:'aiueo'}/*report*/ }
        })];
    }
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
        { hid: 'keywords', name: 'keywords', content: 'AKUKIN建設,アクキン建設,湊あくあ,AKUKIN,アクキン,akukin' },
        { hid: 'og:site_name', property: 'og:site_name', content: '【非公式】AKUKIN建設 コーポレートサイト' },
        { hid: 'og:type', property: 'og:type', content: 'summary_large_image' },
        { hid: 'og:url', property: 'og:url', content: 'https://akukin.jp' },
        { hid: 'og:title', property: 'og:title', content: `AKUKIN建設` },
        { hid: 'og:description', property: 'og:description', content: 'AKUKIN建設の非公式コーポレートサイトです。' },
        { hid: 'og:image', property: 'og:image', content: 'https://akukin.jp/akukin_ogp2.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
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
