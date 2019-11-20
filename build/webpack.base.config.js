const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/client-entry.js'),
        //vendor: ['vue', 'vue-router', 'vuex', 'axios'],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /(\.js$)|(\.vue$)/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                },
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } },
                ],
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve(
                                __dirname,
                                '../babel.config.js'
                            ),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'assets/js/[name].js',
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/style.css',
        }),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
          }),
    ],
}
