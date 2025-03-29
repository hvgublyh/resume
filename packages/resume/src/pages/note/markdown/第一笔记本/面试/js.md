---
title: js
updated: 2022-01-27T10:14:49
created: 2021-04-02T14:08:29
---

几种继承方式:
- 原型链继承
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

缺点:
1.  可以在子类中增加实例属性，如果要新增加原型属性和方法需要在new 父类构造函数的后面
2.  无法实现多继承
3.  创建子类实例时，不能向父类构造函数中传参数
- 借用构造函数继承
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

缺点:
1.  方法都在构造函数中定义，无法复用
2.  不能继承原型属性/方法，只能继承父类的实例属性和方法
- 实例继承
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

缺点:
1.  不能多继承
- 组合式继承
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)

缺点:
- 调用了两次父类构造函数, 所以生成了两份属性
- 寄生组合继承
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)

