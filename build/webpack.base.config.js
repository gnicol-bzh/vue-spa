const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const config = {
    entry: {
        app: path.resolve(__dirname, '../src/client-entry.js'),
    },
    mode: 'development',
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
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
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
    plugins: [new VueLoaderPlugin()],
}

module.exports = config
