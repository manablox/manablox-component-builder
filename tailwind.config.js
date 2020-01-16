/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    theme: {



        extend: {
            
            fontSize: {
                'xs': 'var(--fontsize-xs)',
                'sm': 'var(--fontsize-sm)',
                'tiny': 'var(--fontsize-tiny)',
                'base': 'var(--fontsize-base)',
                'lg': 'var(--fontsize-lg)',
                'xl': 'var(--fontsize-xl)',
                '2xl': 'var(--fontsize-2xl)',
                '3xl': 'var(--fontsize-3xl)',
                '4xl': 'var(--fontsize-4xl)',
                '5xl': 'var(--fontsize-5xl)',
                '6xl': 'var(--fontsize-6xl)',
                '7xl': 'var(--fontsize-7xl)',
            },
            colors: {
                headline: {
                    primary: "var(--color-headline-primary)"
                }
            },
            textColor: {
                primary: "var(--color-text-primary)",
            },
        }
    },
    variants: {},
    plugins: []
}
