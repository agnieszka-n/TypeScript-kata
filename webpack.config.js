const path = require('path');

module.exports = {
  entry: './task.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'all.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true
};
