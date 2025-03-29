---
title: transition
updated: 2019-12-26T15:36:20
created: 2019-12-10T08:59:44
---

transition
2019年12月10日
8:59

transition 简写属性，用于在一个属性中设置四个过渡属性
transition-property规定应用过渡的 CSS 属性的名称。
transition-duration定义过渡效果花费的时间。默认是 0
transition-timing-function规定过渡效果的时间曲线。默认是 "ease"。
transition-delay 规定过渡效果何时开始。默认是 0。

例子:
div
{
transition: width 2s;
-moz-transition: width 2s;/\* Firefox 4 \*/
-webkit-transition: width 2s;/\* Safari 和 Chrome \*/
-o-transition: width 2s;/\* Opera \*/
}
**注意 :**
1.  **transition只改变节点的显示,并不改变节点真正的位置和大小.**
1.  **transition只有改变节点属性的值(高度和宽度等)时才起作用,改变属性时是不会起作用的,例如 :hover{width: fit-content}不起作用**
1.  **设置变化的基准点 : transform-origin: center bottom;**
**使用例子 :**
1.  实现hover放大的效果
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

.transition:hover{

transform: scale(1.05);

}
1.  实现卡片飞入效果

