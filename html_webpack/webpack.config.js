/**
 * `const` is a ES6 or ES 2015 keyword, which is by default supported by
 * `Webpack` even if you're not installing ES6 Transpiler and `require` method
 * is from CommonJS, which is the current module system used by NodeJS to allow
 * us to load modules dynamically.
 */
// Get a `path` module as an object from NodeJS environment.
const path = require('path');
// include the js minification plugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
/**
 * Load a Webpack plugin `MiniCssExtractPlugin` which helps to extract CSS from
 * Javascript files.
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Load a Html-Webpack-plugin to create out html files
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Clean Webpack plugin
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Html-Minfy returns an object or boolean
const htmlMinfy = {
    html5: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: false,
    removeComments: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributese: true,
    useShortDoctype: true
};
// Exclue
module.exports = function(env) {
    return ({
        entry: {
            // Output order is important
            'vendor': './src/js/vendor.js',
            'utility': './src/js/utility.js',
            'bundle': './src/js/app.js',
            'bundle.black': './src/js/colors/app.black.js',
            'bundle.blue': './src/js/colors/app.blue.js',
            'bundle.green': './src/js/colors/app.green.js',
            'bundle.green-munsell': './src/js/colors/app.green-munsell.js',
            'bundle.orange': './src/js/colors/app.orange.js',
            'bundle.pink': './src/js/colors/app.pink.js',
            'bundle.purple': './src/js/colors/app.purple.js',
            'bundle.skyblue': './src/js/colors/app.skyblue.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'), // Absolute path
            filename: env.mode === 'production' ? 'js/[name].[chunkhash].js' : 'js/[name].js',
            //    publicPath: '/',
        },
        module: {
            rules: [
                /**
                 * Config a babel-loader, which compiles all our new Javascript
                 * into Javascript that will work in most browsers.
                 */
                {
                    /**
                     * Regular expression that will look all the files end with
                     * `.js`.
                     */
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            /**
                             * Enable transformations based on the environment that
                             * our project is in.
                             */
                            presets: ['babel-preset-env']
                        }
                    }
                },
                // Loads a Sass/SCSS file and compiles it to CSS.
                {
                    test: /\.scss$/,
                    /**
                     * Webpack parse arrays in reverse order, first it use
                     * `sass-loader', 'css-loader' then MiniCssExtractPlugin.
                     */
                    use: [{
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // publicPath, aimed to change urls to resources inside CSS
                                publicPath: '../'
                            }
                        }, {
                            loader: 'css-loader',
                            options: {
                                minimize: env.mode === 'production' || false,
                            }
                        }, // translates CSS into CommonJS
                        {
                            loader: 'sass-loader',
                        } // compiles Sass to CSS
                    ]
                }, {
                    test: /\.html$/,
                    use: {
                        loader: 'underscore-template-loader',
                        query: {
                            attributes: ['img:src', 'iframe:src','img:data-zoom-image', 'a:data-image', 'a:data-zoom-image']
                        }
                    }

                },
                // file-loader copies file and returns the public url
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: env.mode === 'production' ? '[name].[hash].[ext]' : '[name].[ext]',
                            useRelativePath: true,
                        }
                    }
                }, {
                    test: /\.ico$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            useRelativePath: true,
                        }
                    }
                },
            ]
        },
        optimization: {
            // This array is parse in webpack4 only on production mode
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false
                        }
                    }
                }),
            ]

        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: env.mode === 'production' ? 'css/[name].[contenthash].css' : 'css/[name].css'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/404.html',
                filename: '404.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/about.html',
                filename: 'about.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/account.html',
                filename: 'account.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/blog.html',
                filename: 'blog.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/blog-detail.html',
                filename: 'blog-detail.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/cart.html',
                filename: 'cart.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/cart-empty.html',
                filename: 'cart-empty.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/checkout.html',
                filename: 'checkout.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/confirmation.html',
                filename: 'confirmation.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/contact.html',
                filename: 'contact.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/custom-deal-page.html',
                filename: 'custom-deal-page.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/faq.html',
                filename: 'faq.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/home.html',
                filename: 'home.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/lost-password.html',
                filename: 'lost-password.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/shop-v1-root-category.html',
                filename: 'shop-v1-root-category.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/shop-v2-sub-category.html',
                filename: 'shop-v2-sub-category.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/shop-v3-sub-sub-category.html',
                filename: 'shop-v3-sub-sub-category.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/shop-v4-filter-as-category.html',
                filename: 'shop-v4-filter-as-category.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/shop-v5-product-not-found.html',
                filename: 'shop-v5-product-not-found.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/shop-v6-search-results.html',
                filename: 'shop-v6-search-results.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/single-product.html',
                filename: 'single-product.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/store-directory.html',
                filename: 'store-directory.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/terms-and-conditions.html',
                filename: 'terms-and-conditions.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/track-order.html',
                filename: 'track-order.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/wishlist.html',
                filename: 'wishlist.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: './src/wishlist-empty.html',
                filename: 'wishlist-empty.html',
                minify: env.mode === 'production' ? htmlMinfy : false,
            }),
            new CleanWebpackPlugin(['dist']),
        ]
    });
};
