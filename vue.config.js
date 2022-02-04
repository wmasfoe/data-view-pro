const { name } = require("./package");

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 8080, // 端口
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  lintOnSave: false, // 取消 eslint 验证
};
