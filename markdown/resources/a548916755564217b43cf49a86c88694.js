
module.exports = {
  'plugins': {
    'postcss-px2rem-exclude': {
      remUnit: 37.5,
      propList: ['*','!border'],
//这里的大小等于rem.js里面的scale最好是75 10 或者37.5 20 （可能是因为插件的标准就是75）
//remUnit的值很小的话比列严重失调 至于原因还不知道 
      exclude: /node_modules|pc/i   //过滤插件
    }
  }
}
