---
title: 项目结构与webpack
updated: 2022-04-08T15:04:22
created: 2021-08-09T21:57:18
---

1.  静态资源路径使用方式
    - **直接使用相对路径或者**
Webpack 对路径进行处理,

使用相对路径则会被打包成base64或者生成新图片

- **使用require处理路径**

使用相对路径, webpack打包图片, 使用绝对路径报错;

- **直接使用绝对路径**

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

或者

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

**注意:** 第一种情况斜杠表示相对项目根路径, 如果项目不在根路径下,则会报错; **建议使用第二种**

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)

1.  如何修改vue-cli项目的webpack配置
    - Vue inspect \> output.json 获取默认配置
    - 使用configureWebpack或者chainWebpack修改webpack配置
    - 如果要修改rules中的某一条的具体内容, 可以通过rules对应的id来进行修改
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image6.png)

