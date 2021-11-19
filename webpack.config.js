const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const globImporter = require("node-sass-glob-importer");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const generateHtmlPlugins = (dir) => {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, dir));
    return templateFiles.map((item) => {
        const parts = item.split(".");
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${dir}/${name}.${extension}`),
            minify: {
                collapseWhitespace: isProd,
            },
            inject: true,
        });
    });
};

const htmlPlugins = generateHtmlPlugins("./src/views/pages");
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all",
        },
    };
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin(),
        ];
    }
    return config;
};

const config = {
    devServer: {},
    entry: {
        styles: "./src/scss/styles.scss",

    },
    output: {
        path: path.resolve(__dirname, "build"),
        // filename: `./js/${filename("js")}`,
        // chunkFilename: "[id].[hash:8].js",
    },
    devtool: isDev ? "source-map" : "",
    resolve: {
        //extensions: ['.js', '.json', '.png'],
        alias: {
            "@base": path.resolve(__dirname, "src/views"),
            "@views": path.resolve(__dirname, "src/views"),
            "@scss": path.resolve(__dirname, "src/scss"),
            "@": path.resolve(__dirname, "src"),
        },
    },
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.(html)$/,
                include: [
                    path.resolve(__dirname, "src/views/base"),
                    path.resolve(__dirname, "src/views/components")
                ],
                loader: "html-loader",
                options: {
                    sources: false,
                    minimize: false,
                    esModule: false
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            esModule: false,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                importer: globImporter(),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                exclude: path.resolve(__dirname, "src/assets/images"),
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: path.resolve(__dirname, "build/img"),
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|otf|svg|woff|woff2|eot)$/,
                exclude: path.resolve(__dirname, "src/assets/fonts"),
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: path.resolve(__dirname, "build/fonts"),
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
        new MiniCssExtractPlugin({
            filename: `./css/${filename("css")}`,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/fonts",
                    to: "assets/fonts",
                },
                {
                    from: "src/assets/libs",
                    to: "assets/libs",
                },
                {
                    from: "src/assets/images",
                    to: "assets/images",
                },
                {
                    from: "src/js/ui.js",
                    to: "js",
                },
                {
                    from: "src/js/dynamic.js",
                    to: "js",
                },
            ],
        }),
    ].concat(htmlPlugins),
};

module.exports = () => {
    if (isDev) {
        config.devtool = "source-map";
        config.devServer = {
            contentBase: "./build",
            writeToDisk: true,
            port: 9000,
            hot: isDev,
        };
    } else {
        runHotModuleReplacement = false;
        config.devtool = false;
        config.output = {
            path: __dirname + "/build",
            publicPath: "/",
            filename: `./js/${filename("js")}`,
            chunkFilename: `./js/${filename("js")}`,
        };
    }
    return config;
};
