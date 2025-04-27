module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      minPixelValue: 2, // 最小转换值，小于此值不转换
      propList: ['*'], // 需要转换的属性，*表示所有
      rootValue: 16, // 基准值，1rem = 16px
      selectorBlackList: ['.norem'] // 不转换的类名
    },
    tailwindcss: {}
  }
};
