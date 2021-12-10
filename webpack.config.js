const HtmlWebpackPlugin = require("html-webpack-plugin");
const pages = require("./pages");

module.exports = {
  mode: process.env.NODE_ENV || "production",
  entry: "./src/scripts",
  output: {
    publicPath: "/dist/",
    path: __dirname + "/dist",
    filename: "scripts/bundle.js",
  },
  plugins: [
    ...pages.map(
      (p) =>
        new HtmlWebpackPlugin({
          title: p.title,
          template: p.template,
          filename: `${p.name}.html`,
          inject: false,
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
