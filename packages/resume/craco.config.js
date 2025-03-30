const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    // 添加对 .md 文件的支持
    // 通过 raw-loader 加载 .md 文件
    configure: (webpackConfig) => {
      // 找到 oneOf 规则
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);

      if (oneOfRule) {
        // 在 oneOf 中添加对 .md 文件的处理规则
        oneOfRule.oneOf.unshift({
          test: /\.md$/,
          use: 'raw-loader',
        });
      } else {
        // 如果没有 oneOf，直接添加到 rules
        webpackConfig.module.rules.unshift({
          test: /\.md$/,
          use: 'raw-loader',
        });
      }
      // 处理css
      // 找到 css 规则
      console.log(JSON.stringify(oneOfRule));
      return webpackConfig;
    },
  },
  devServer: {
    port: 8000, // 设置启动端口为 8000
  },
   style: {
    postcss: {
      mode: 'file' // 使用外部的postcss.config.js文件
    },
  },
  
}