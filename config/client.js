import 'dotenv/config'

export default {
    server: {
        port: process.env.SERVER_PORT,
        host: process.env.SERVER_HOST
    },

    buildModules: [
        '@nuxtjs/tailwindcss'
    ],

    modules: [
        '@nuxtjs/axios'
    ],

    plugins: [
        '~/plugins/componentloader',
        '~/plugins/editorconfig',
        { src: '~/plugins/tinymce', ssr: false }
    ],

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css'
    },

    css: [
        '~/assets/css/ui'
    ],

    build: {
        extractCSS: process.env.NODE_ENV !== 'development',

        splitChunks: {
            layouts: true,
            pages: true,
            commons: true
        },

        loaders: {
            vue: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        },

        postcss: {
            plugins: {
                cssnano: {
                    preset: 'default',
                    discardComments: { removeAll: true },
                    zIndex: false
                }
            },
            preset: {
                autoprefixer: {
                    cascade: false,
                    grid: true
                }
            }
        },

        extend(config, ctx) { }
    }
}