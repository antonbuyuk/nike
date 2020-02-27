module.exports = {
    mode: 'universal',
    server: {
        port: 8001,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'
    },
    env: {
        API_URL: 'http://206.189.53.125',
        CLIENT_URL: process.env.NODE_ENV !== 'production' ? 'http://localhost:8001' : '',
        BASE_API_URL: `${process.env.API_URL}/v1`,
        CLIENT_ID: 'front',
        CLIENT_SECRET: 'ca3f1681c69aa6a63cd64fe6b6bc27bf0cd6bf3ba70f77c4fa1550f06b8312ce'
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
        '@/plugins/element-ui',
        { src: '@/plugins/vue-awesome-swiper.js', mode: 'client', ssr: false }
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
        proxy: false
    },
    build: {
        extractCSS: true,
        vendor: ['axios', 'babel-polyfill'],
        transpile: [/^element-ui/],
        extend (config, ctx) {
        }
    }
};
