---
title: slot
updated: 2023-02-16T17:14:25
created: 2023-02-15T16:47:22
---

1.  什么是children?
在父组件中引用子组件, 子组件所包裹的元素被以prop.children传递给子组件; 该元素既可以是文本, 也可以是变量, 也可以是DOM(DOM被处理为一个特殊的对象);
1.  如何使用
父组件

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

子组件

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

注意: 如果需要传递多个slot, 可以使用prop的形式直接传递, 值可以是DOM，也可以是数组
