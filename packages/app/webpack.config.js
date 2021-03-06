const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9001/'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },

  devServer: {
    contentBase: path.resolve(__dirname,'./dist'),
    index: 'index.html',
    port: 9001,
    historyApiFallback: true,
},
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: require.resolve('babel-loader'),
//         options: {
//           presets: [require.resolve('@babel/preset-react')]
//         }
//       },
//       {
//         test: /\.md$/,
//         loader: 'raw-loader'
//       }
//     ]
//   },

  plugins: [
    // new CopyPlugin([
    //   { from: 'fruit', to: 'fruit' },
    // ]),
    new ModuleFederationPlugin({
      name: 'app',
      filename: 'remoteEntry.js',
      remotes: {
        home: "home@http://localhost:9000/remoteEntry.js",
        ContactApp: 'ContactApp@http://localhost:9003/remoteEntry.js',
      },
      shared: []
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'App',
    }),
  ]
};