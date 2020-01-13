/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    theme: {
        extend: {
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
