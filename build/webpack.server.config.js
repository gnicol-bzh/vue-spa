const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.base.config')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const config = merge(base, {
    entry: path.resolve(__dirname, '../src/server-entry.js'),
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server/[name].js',
        libraryTarget: 'commonjs2',
    },
    externals: nodeExternals({
        whitelist: /\.css$/,
    }),
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'server/styles.css',
        }),
    ],
})

module.exports = config
