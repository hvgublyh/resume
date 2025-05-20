const { defineConfig } = require("@vue/cli-service");
const TerserPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production"

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  devServer: {
    client: {
      overlay: false,
    },
    proxy: {
      "/api": {
        target: "http://localhost:8900", //跨域地址
        changeOrigin: true, //支持跨域
        pathRewrite: { "^/api": "/dyFormApi" }, //重写路径,替换/api
      },
    },
  },
  configureWebpack: () => {
    if (isProd) {
      return {
        plugins: [
          new TerserPlugin({
            // 多进程
            parallel: true,
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log'], // 移除console
              },
            },
          }),

        ]
      }
    }
  }
});
