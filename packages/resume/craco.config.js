const path = require("node:path");

const { dealMarkdown, injectFileList } = require("./scripts/craco/file-list.js");
const middlewares = require("./scripts/craco/middlewares.js");

module.exports = {
  devServer: {
    port: 8000, // 设置启动端口为 8000
    proxy: {
      "/api": {
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
        target: "http://127.0.0.1:4523/m1/1624492-0-default/",
      },
    },
    setupMiddlewares: (_, devServer) => {
      middlewares.setupMiddlewares(devServer);
      return _;
    },
  },

  style: {
    postcss: {
      mode: "file", // 使用外部的postcss.config.js文件
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    // 添加对 .md 文件的支持并注入文件列表
    configure: (webpackConfig) => {
      dealMarkdown(webpackConfig);
      injectFileList(webpackConfig);
      return webpackConfig;
    },
  },
};
