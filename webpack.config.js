const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack')

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
      port: 3000,
      open: true,
      hot: true,
    },
    entry: ["@babel/polyfill", path.resolve(__dirname, 'src', 'js', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext]'
    },
    resolve: {
        alias: {
            process: "process/browser"
        },
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "url": require.resolve("url/"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "util": require.resolve("util/"),
            "os": require.resolve("os-browserify/browser"),
            "assert": require.resolve("assert/"),
            "buffer": require.resolve("buffer/"),
            //
            "fs" :false,
            "net" : false,
            // "path" :false,
            // "os" :false,
            // "stream" :false,
            // "crypto" :false,
            // "url" :false,
            // "http" :false,
            // "https" :false,
            // "zlib" :false,
            // "util" :false,
            "net" :false,
            "dns" :false,
            "child_process" :false,
            "tls" :false,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/clients.json'),
                    to: path.resolve(__dirname, 'dist/clients.json')
                },
            ],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'json-loader',
                type: 'javascript/auto'
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,

                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions:{
                                plugins:  [
                                    require('postcss-preset-env')
                                ],
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false, // disable the behavior
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
              test: /\.woff2?$/i,
              type: 'asset/resource',
              generator: {
                  filename: 'fonts/[name]ext',
              }
            },
            {
              test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },

                ],
              type: 'asset/resource',
            },
        ],
    },
}
