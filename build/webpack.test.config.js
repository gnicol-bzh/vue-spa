const base = require('./webpack.base.config')
const merge = require('webpack-merge')

const config = merge(base, {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
})

// no need for app entry during tests
delete config.entry

module.exports = config
