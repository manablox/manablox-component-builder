import 'dotenv/config'

export default {

    buildModules: [
        '@nuxtjs/tailwindcss'
    ],

    plugins: [
        '~/plugins/componentloader',
        '~/plugins/editorconfig',
        { src: '~/plugins/tinymce', ssr: false }
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