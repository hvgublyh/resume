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
   
      return webpackConfig;
    },
  },
  devServer: {
    port: 8000, // 设置启动端口为 8000
  },
   style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            [
              'postcss-pxtorem',
              {
                rootValue: 16, // 根元素字体大小
                // propList: ['width', 'height']
                propList: ['*'],
                // 排除类
                selectorBlackList: [
                  'no-rem',        // 排除包含.no-rem类的元素
                ],
              },
            ],
          ],
        },
      },
    },
  },
}