'use strict';

module.exports = {
    entry: './src/scripts/main.js',
    resolve: {
        alias: {
            createjs: 'PreloadJS/lib/preloadjs-0.6.2.combined.js'
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate' },
            { test: /\.json$/, loader: 'json' },
            { test: /.*gsap.*/, loader: 'imports?gs=>window.GreenSockGlobals={}!exports?gs' },
            { test: /.*PreloadJS.*/, loader: 'imports?this=>global!exports?window.createjs' }
        ]
    }
};
