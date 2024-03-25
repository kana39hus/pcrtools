

export default {
  target: 'static',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kana39hus.github.io',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  render: {
    csp: {
      reportOnly: false,
      addMeta: true,
      hashAlgorithm: 'sha256',
      unsafeInlineCompatiblity: true,
      policies: {
        'default-src': ["'self'", 'https:', "*.googleapis.com"],
        'script-src': ["'self'", "'strict-dynamic'", 'https:', "unsafe-inline"],
        'style-src': ["'self'", "'strict-dynamic'", 'https:'],
        'frame-src': [],
        'object-src': ["'none'"],
        'base-uri': ["'self"]
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fetcher.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-fontawesome',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
  ],

  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },


  googleFonts: {
    families: {
      // a simple name
      Roboto: true,
      Nunito: true,
      // a name with spaces
      'Josefin+Sans': true,
      // specific font weights
      Lato: [100, 300],
    }
  },

  router: {
    //middleware: ['auth']
  },

  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}

