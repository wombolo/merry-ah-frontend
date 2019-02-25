const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'main.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    port: 5050,
  },
});
