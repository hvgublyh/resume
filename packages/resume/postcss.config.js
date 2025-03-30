module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 基准值，1rem = 16px
      propList: ['*'], // 需要转换的属性，*表示所有
      selectorBlackList: ['.norem'], // 不转换的类名
      minPixelValue: 2 // 最小转换值，小于此值不转换
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
