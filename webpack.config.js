const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {
  const isProduction = env === 'production',
      webpack = require('webpack'),
      CleanWebpackPlugin = require("clean-webpack-plugin"),
      chunkFileName = "chunks/" + (!isProduction ? "[name]." : "") + "[chunkhash].js";

  return {

    entry: {
        app: ['@babel/polyfill', './src/js/app.js']
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: "[name].bundle.js",
      chunkFilename: chunkFileName,
      publicPath: "/public/"
    },
    mode: env ? env : "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:{
            loader: "babel-loader",
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(eot|woff2|woff|ttf|svg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                  publicPath: "./../",
                  name: '[path][name].[ext]',
                  emitFile: false
              }
            }
          ]
        },
        {
          test: /\.font\.js/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'webfonts-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: '[name].css',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["public/chunks/*.*"],
        verbose: true,
        dry: !isProduction,
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '/public/'),
      historyApiFallback: true,
      publicPath: '/public/',
    },
    optimization: {
        splitChunks: {
            name: !isProduction
        }
    }
  };
};