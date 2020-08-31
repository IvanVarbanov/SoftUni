const WebpackStripLoader = require('strip-loader');
const devConfig = require('./webpack.config');

let stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log'),
};

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;
