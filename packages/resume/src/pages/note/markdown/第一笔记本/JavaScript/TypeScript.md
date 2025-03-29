---
title: TypeScript
updated: 2022-07-09T17:38:00
created: 2020-12-17T13:40:07
---

1.  文件后缀名 ts
2.  使用接口
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)
1.  接口与类
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)
1.  函数参数类型与返回值类型
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)
1.  构建类型
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)
1.  函数参数和返回值可以是多种类型
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)
1.  泛型
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image6.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image7.png)
1.  泛型接口实例化
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image8.png)

1.  接口例子
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image9.png)

1.  **声明文件 XXX.d.ts**
**作用:** 很多主流库都是用JS编写的, 不支持ts的类型系统. 因此, 在引入这些库的时候, 项目不能获取到库API的信息. 为了提供类型信息, 我们(或者提供商)需要编写声明文件, 定义类型信息

**在项目中使用:**

声明文件要和js文件放同一层;

如果导入项目中的ts文件, 由于已有类型信息, 声明文件不起作用
