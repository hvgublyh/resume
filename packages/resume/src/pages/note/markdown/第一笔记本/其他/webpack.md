---
title: webpack
updated: 2025-03-29T15:53:05
created: 2021-02-20T17:46:59
---

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image6.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image7.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image8.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image9.png)

1.  Mock.js
[mock.zip](../../resources/a941b99f67224f90aad4c10cefbeeab7.zip)

1.  动态import，分割JS
    1.  npm install @babel/plugin-syntax-dynamic-import --save-dev
    2.  修改.babelrc
"plugins": \["@babel/plugin-syntax-dynamic-import"\]

**报错**
**\_\_webpack_require\_\_(...).context is not a function**
require.context路径必须是静态字符串，禁止写作变量
检查是否是webpack项目

**Error: Cannot find module 'undefined'**
**at webpackMissingModule (markdown-content.js:8:1)**
require.context的path路径不对，使用相对路径。

**Property 'context' does not exist on type 'NodeRequire'.**
创建typings.d.ts，添加到tsconfig.json的include中
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image10.png)

**react配置md通过raw-loader加载，返回的始终是文件路径。**
配置rules，注意如果webpack中配置了oneOfRule，需要将md配置加到oneOfRule中，否则会被覆盖。
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image11.png)

