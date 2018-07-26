const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  const isProduction = env == 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module:
    {
      rules:
        [
          {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          },
          {
            test: /\.s?css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
    },
    plugins: [
      CSSExtract,
      new ClearWebpackPlugin([path.join(__dirname, 'public', 'dist')])
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/dist/',
      historyApiFallback: true
    }
  };
};