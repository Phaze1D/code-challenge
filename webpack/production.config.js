const base = require('./base.config');
const merge = require('webpack-merge');
const path = require('path');


module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'index.[hash].js',
    chunkFilename: '[name].index.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
});
