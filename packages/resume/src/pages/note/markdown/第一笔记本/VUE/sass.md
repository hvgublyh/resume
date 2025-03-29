---
title: sass
updated: 2022-04-01T18:10:47
created: 2021-10-14T23:27:48
---

1.  安装依赖
npm install --save-dev sass-loader

//sass-loader依赖于node-sass

npm install --save-dev node-sass
1.  修改vue文件的style标签
\<style lang="sass"\>
**注意:**
- sass不使用大括号和分号, 如果需要使用, 修改标签为 \<style lang="scss"\>
- 引用sass/scss文件, 需要添加分号 @import "./common/scss/mixin";
- 如果使用sass,注意要添加
css: {

loaderOptions: {

sass: {

sourceMap: false

}

}

}

否则在Chrome控制台修改样式, 样式将崩掉

**如何使用vue中的变量**
1.  **在style中绑定变量**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

**或者通过JS绑定到元素上(绑定变量到body上需要用此方法)**

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

1.  **在style中使用**
**\<style lang="scss"\>**

**\*\*\***

**transform: scale(var(--rate));**

**\*\*\***

**\</style\>**
1.  **要注意的是, 如果需要计算px, 可以如此**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

**带px的常量放在前面**
