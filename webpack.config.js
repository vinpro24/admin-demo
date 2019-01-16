const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const vendors = [
    'bootstrap',
    'jquery',
    'masonry-layout',
    'moment',
    'perfect-scrollbar',
    'react',
    'react-dom',
    'react-google-maps',
    'react-router-dom',
    'recharts'
];

module.exports = (env, options) => {
    const devMode = options.mode !== 'production';
    return {
        mode: options.mode,
        entry: {
            bundle: './src/index.js',
            vendor: vendors,
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'build'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    loader: 'file-loader',
                    test: /\.(png|gif|jpg|svg|ico|woff|woff2|eot|ttf)$/i,
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/index.html' }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery',
                'window.$': 'jquery',
                'window.jQuery': 'jquery'
            })
        ],
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            runtimeChunk: true,
        }
    };
}
