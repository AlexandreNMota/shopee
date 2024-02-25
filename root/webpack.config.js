const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = (webpackConfigEnv, argv) => {
  const orgName = "plansul";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    devServer: {
      static: [
        {
          directory: path.join(__dirname, "assets", "libs"), // Caminho para a pasta assets/libs
          publicPath: "/assets/libs/", // Caminho público para a pasta
        },
        {
          directory: path.join(__dirname, "assets", "maps"), // Caminho para a pasta assets/libs
          publicPath: "/assets/maps/", // Caminho público para a pasta
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
