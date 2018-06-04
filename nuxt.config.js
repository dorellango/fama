module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Fundacion AMA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fundación Ama' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Libre+Baskerville:400,400i' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.0.9/js/all.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~plugins/vue-js-modal', 
    '~plugins/vue2-google-maps', 
    // {
    //   src: '~/plugins/wow.js',
    //   ssr: false
    // }
],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'animate.css',
      // '~/plugins/wow.js'
    ],
    postcss: [
      require('tailwindcss')('./tailwind.js')
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      /*
      ** Change the behavior to manage .svg files
      */
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          // svgo: {
          //   plugins: [
          //     {removeDoctype: true},
          //     {removeDimensions: true},
          //     // {removeComments: true}
          //   ]
          // }
        },
        exclude: /(node_modules)/
      })

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
