const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: './src/index.tsx',
  resolve: {
    modules: ['node_modules','src'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'ts-loader',
        }],
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
};
