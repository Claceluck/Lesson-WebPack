// webpack.config.js - настройки webpack
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // настройки webpack
    // точки входа для нашего проекта index.js, для других ( шлавный js файл )
    entry: {
        main: './src/main/js/index.js', // путь к главному js файлу папки main
        about: './src/about/js/index.js',// путь к главному js файлу папки about
    },
    output: {
        filename: '[name].js', // имя будет создано соглассно свойству entry
        path: path.resolve(__dirname, 'dist') // имя папки где окажутся созданные папки
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-transform-runtime"]
                        }
                    }
                ]
            },

            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    // генерация новых css файлов

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css' // так же имена сво  свойств, файлики будут в той же папке что и js файлы в папке dist
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};