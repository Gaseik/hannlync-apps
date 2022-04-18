const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "hannlyncApps.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
     
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] },
      },
    ],
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      "@mui/base": "@mui/base/legacy",
      "@mui/lab": "@mui/lab/legacy",
      "@mui/material": "@mui/material/legacy",
      "@mui/styled-engine": "@mui/styled-engine/legacy",
      "@mui/system": "@mui/system/legacy",
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
    "@mui/material":'@mui/material',
    "@mui/styles":"@mui/styles"
  }
};
