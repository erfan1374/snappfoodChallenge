const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: '/src/index.js',
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "[name].[contenthash].js", // the name of the bundle
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/static/index.html", // to import index.html file inside index.js
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3030, // you can change the port
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png)$/, // to import images and fonts
        loader: "url-loader",
        options: { name: '[name].[contenthash].[ext]',  outputPath: 'image/' },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]'
        }
      }
    ],
  },
};
