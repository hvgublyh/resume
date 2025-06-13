const path = require("node:path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

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
      // 添加webpack-bundle-analyzer
      webpackConfig.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: "bundle-report.html",
        })
      );
      // Configure splitChunks
      // 保留原始配置
      const originalSplitChunks = webpackConfig.optimization.splitChunks || {};

      // 合并配置而非替换
      webpackConfig.optimization.splitChunks = {
        ...originalSplitChunks,
        // 只修改 cacheGroups，保留其他配置
        cacheGroups: {
          ...(originalSplitChunks.cacheGroups || {}),
          message: {
            enforce: true,
            minSize: 0, // 确保即使很小也会被分割
            name: 'message',
            priority: 10,
            test: /[\\/]assert[\\/]ts[\\/]message\.(ts|js)$/,
          },
          reactDom: {
            enforce: true,
            name: 'react-dom',
            priority: 20,
            test: /[\\/]node_modules[\\/].*react-dom[\\/]/,
          },
          utils: {
            enforce: true,
            minSize: 0, // 确保即使很小也会被分割
            name: 'utils', // 修改为正确的名称
            priority: 10,
            test: /[\\/]utils[\\/].*\.ts$/, // 匹配utils目录下的所有ts文件
          },
        }
      };
      //返回配置
      return webpackConfig;
    },
  },
};
