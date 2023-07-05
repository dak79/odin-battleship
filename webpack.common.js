const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/imgs/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: " ",
      template: "./src/index.html",
      filename: "./index.html",
      minify: true,
    }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: ".src/assets/imgs/favicon/",
      prefix: "",
      publicPath: "assets/favicons",
      outputPath: "assets/favicons",
    }),
    new MiniCSSExtractPlugin({
      filename: "style/style.css",
      chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
