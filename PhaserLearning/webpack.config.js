const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: {
      main: ['./src/main.js']
  },
  output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "./dist/"),
  },
  devServer: {
      contentBase: "dist",
      overlay: true,
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          },
          {
              test: /\.css$/,
              use: [
                  {
                      loader: "style-loader"
                  },
                  {
                      loader: "css-loader"
                  }
              ]
          },
          {
              test: /\.html$/,
              use: [
                  {
                      loader: "html-loader",
                      options: {
                          minimize: true,
                      }
                  }
              ]
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: {
                loader: 'url-loader',
            },
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
  ]
};
