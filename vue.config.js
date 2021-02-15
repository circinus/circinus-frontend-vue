const path = require('path')

module.exports = {
  publicPath: '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/app.scss')]
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
    moment: {
      locales: [
        'npm run serve'
      ]
    }
  }
}
