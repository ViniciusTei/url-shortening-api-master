const path = require('path');
const html = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin  = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src','index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ]
  },
  plugins: [
    new html({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    process.env.NODE_ENV === 'development' && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  }
}