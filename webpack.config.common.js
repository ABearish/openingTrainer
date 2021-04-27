const webpack = require("webpack");
const path = require("path");
const css = require("css-loader");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "./public/"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },  
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
