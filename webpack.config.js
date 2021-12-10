const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const pages = require("./pages");

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: "./src/scripts",
  output: {
    publicPath: "/",
    path: __dirname + "/dist",
    filename: "scripts/bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
  plugins: [
    ...pages.map(
      (p) =>
        new HtmlWebpackPlugin({
          title: p.title,
          template: p.template,
          filename: `${p.name}.html`,
          inject: false,
          ...p,
        })
    ),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules",
      },
      { test: /\.hbs$/, use: "handlebars-loader" },
    ],
  },
};
