const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack-base.config');
const path =  require('path')

module.exports = () => (
  merge(baseConfig(), {
    mode: "development",
    devtool: "source-map",
    devServer: {
      host: '192.168.88.170',
      historyApiFallback: true,
      contentBase: path.join(__dirname, "../public/"),
      port: 3000,
      publicPath: "http://192.168.88.170:3000/dist/",
      hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  })
);
