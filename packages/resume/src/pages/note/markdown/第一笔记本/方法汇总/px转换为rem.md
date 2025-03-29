---
title: px转换为rem
updated: 2019-12-18T16:13:16
created: 2019-12-18T16:08:39
---

相关链接: <https://blog.csdn.net/u012302552/article/details/79215918>

1.  下载lib-flexible npm i lib-flexible --save
2.  引入lib-flexible import 'lib-flexible/flexible'
3.  设置meta标签 \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>
4.  安装px2rem-loader npm install px2rem-loader --save-dev
5.  配置px2rem-loader: 在build文件中找到util.js，将px2rem-loader添加到cssLoaders中,如:

const cssLoader = {

loader: 'css-loader',

options: {

minimize: process.env.NODE_ENV === 'production',

sourceMap: options.sourceMap

}

}

const px2remLoader = {

loader: 'px2rem-loader',

options: {

remUnit: 75

}

}
1.  在generateLoaders方法中添加px2remLoader
function generateLoaders (loader, loaderOptions) {

const loaders = \[cssLoader,px2remLoader\]

if (loader) {

loaders.push({

loader: loader + '-loader',

options: Object.assign({}, loaderOptions, {

sourceMap: options.sourceMap

})

})

}
1.  重启

