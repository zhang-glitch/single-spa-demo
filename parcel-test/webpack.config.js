const { merge } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa-react")

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "study",
    projectName: "parcel-test",
    webpackConfigEnv,
    argv
  })

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["react-router-dom"]
  })
}
