const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
   entry: './src/app.js',
   output: {
       path: path.join(__dirname, 'output', '[hash]'),
       publicPath: './'
       filename: './js/bundle.min.js'
   },
   plugins: [
       new CleanWebpackPlugin() 
   ],
   module: {
       rules: [
           {
               test: /\.js$/,
               use: {
               loader: 'babel-loader',
               options: {
                       presets: ['@babel/preset-env']
                   }
               }
           }
       ]
   },
   optimization: {
       minimizer: [
           new TerserPlugin({
           cache: true,
           parallel: true,
           terserOptions: {
               output: {
                   comments: false,
                   }
               }
           })
      ]
   }
};
