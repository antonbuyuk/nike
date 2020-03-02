module.exports = {
    mode: 'universal',
    server: {
        port: 8001,
        host: 'localhost'
    },
    env: {
        API_URL: 'http://206.189.53.125',
        CLIENT_URL: 'http://localhost:8001'
    },
    router: {
        linkExactActiveClass: 'is-active'
    },
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    loading: { name: 'circle', color: '#0081D7' },
    css: [
        '@/assets/styles/style.scss',
        'element-ui/lib/theme-chalk/index.css'
    ],
    plugins: [
        '~/plugins/axios',
        '~/plugins/element-ui',
        '~/plugins/repository',
        { src: '~/plugins/vue-awesome-swiper.js', mode: 'client', ssr: false }
    ],
    buildModules: [

    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/device',
        'cookie-universal-nuxt',
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        scss: [
            './assets/styles/helpers/variables.scss'
        ]
    },
    axios: {
        credentials: true,
        proxy: false,
        baseURL: 'http://localhost:8001/'
    },
    build: {
        extractCSS: true,
        vendor: ['axios', 'babel-polyfill'],
        transpile: [/^element-ui/],
        extend (config, ctx) {
        }
    }
};
