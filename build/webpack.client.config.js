const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')

const config = merge(base, {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    plugins: [
        new webpack.EnvironmentPlugin({
            // use 'development' unless process.env.NODE_ENV is defined
            NODE_ENV: 'development',
            DEBUG: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'server/styles.css',
        }),
    ],
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    name: 'vendor',
                    filename: 'assets/js/[name].js',
                },
            },
        },
    },
})

config.module.rules.filter(x => { return x.loader === 'vue-loader' }).forEach(x => { x.options.extractCSS = true })

module.exports = config
