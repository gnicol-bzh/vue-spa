const base = require('./webpack.base.config')
const merge = require('webpack-merge')

module.exports = merge(base, {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
})
