import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export const assets = path.resolve(__dirname, 'public')
export const docs = path.resolve(__dirname, "docs")

const config: webpack.Configuration = {
  mode: 'production',
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(assets, 'index.html') }),
  ],
  devtool: 'source-map',
  output: {
    path: docs,
    filename: "hello-geolonia-plugin.min.js",
  }
};

export default config
