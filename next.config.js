const { i18n } = require('./next-i18next.config')

module.exports = {
    reactStrictMode: true,
    i18n,
    images: {
        domains: ['images.ctfassets.net'],
    },
    fallbackLng: {
        default: ['en'],
        'es-AR': ['es'],
        'es-ES': ['es'],
        'es-MX': ['es'],
    },
}
