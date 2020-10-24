const mix = require('laravel-mix')

mix.js('src/main.js', 'assets')
    .sass('src/assets/app.scss', 'assets').options({
    processCssUrls: false
}).setPublicPath('public').sourceMaps();
