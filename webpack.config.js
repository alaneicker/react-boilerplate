const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AutoPrefixer = require('autoprefixer');
const TerserJsPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const rootDir = path.resolve(__dirname);
const srcDir = path.resolve(__dirname, 'src');
const nodeModDir = path.resolve(__dirname, 'node_modules');
const distDir = path.resolve(__dirname, 'dist');
const publicDir = path.resolve(__dirname, 'public');

const indexEntry = path.join(srcDir, 'index.js');
const publicEntry = path.join(publicDir, 'index.html');

const relativeDistJsDir = 'assets/js';
const relativeDistStylesDir = 'assets/styles';

const prod = process.env.NODE_ENV === 'prod';

const config = {
  entry: [
    indexEntry,
  ],
  output: {
    path: distDir,
    libraryTarget: 'umd',
    globalObject: 'this',
    filename: path.join(relativeDistJsDir, '[name].min.js'),
    chunkFilename: path.join(relativeDistJsDir, '[name].chunk.min.js'),
  },
  resolve: {
    modules: [rootDir, nodeModDir],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s?css|sass)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !prod,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => AutoPrefixer,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          reuseExistingChunk: true,
        }
      },
    },
    minimizer: [
      new TerserJsPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [distDir] }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    prod ? new webpack.HashedModuleIdsPlugin() : new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 5 }),
    new MiniCssExtractPlugin({
      filename: path.join(relativeDistStylesDir, '[name].css'),
      chunkFilename: path.join(relativeDistStylesDir, '[name].css'),
    }),
    new HtmlWebpackPlugin({
      hot: true,
      inject: true,
      template: publicEntry,
    }),
  ],
};

module.exports = config;