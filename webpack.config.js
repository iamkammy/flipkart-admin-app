const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Target .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Use Babel to transpile the files
        },
      },
      {
        test: /\.css$/, // Target .css files
        use: ["style-loader", "css-loader"], // Inject CSS into the page
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve .js and .jsx files
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Use static instead of contentBase
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML file
    }),
  ],
  mode: "development", // Set mode to development
};
