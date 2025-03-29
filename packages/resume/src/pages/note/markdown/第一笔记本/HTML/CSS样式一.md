---
title: CSS样式一
updated: 2020-01-15T14:57:24
created: 2019-08-19T08:50:25
---

CSS样式一
2019年8月19日
8:50

[HTML_ch05_CSS样式一.pptx](../../resources/fafdcc8e7113456aabcbce7f150b249b.pptx)
**一、什么是CSS**
CSS:Cascading Style Sheets层叠样式表，通俗来说，html是内容，css是内容的

实现风格，比如说字体的大小、颜色等。
**二、CSS的基本语法**
\<head\>

\<style\>

选择器（要修饰的对象）{

属性1：属性值1；

属性2：属性值2；

}

\</style\>

\</head\>
**三、选择器的分类**
**1、标签选择器**

作用：用于修饰同类html标签的共性风格

li{
color: red;
font-size: 28px;
}
**2、类选择器**

给相同类名的标签加上相同的样式

.blue{
color: aqua;
}
**3、id选择器**

\#d1{
background-color: azure;
}
**4、组合选择器**

组合选择器不是一种新的选择器，而是对上述选择器的综合使用

h1,#d1,#d2,p{
color: azure;
}
**5、派生选择器**

见解: 派生选择器实际上是对自定义标签使用的标签选择器

**HTML部分:**

\<li\>\<strong\>我是斜体字。这是因为 strong 元素位于 li 元素内。\</strong\>\</li\>

**CSS部分:**

li strong {

font-style: italic;

font-weight: normal;

}

**根据引用方式分为：**

**1）外部样式：**通过link标签引用\<link href="css/style.css" rel="stylesheet" type="text/css"\>

**2）内部样式：**写在\<style\>\</style\>标签中

**3）内联样式：**写在开始标签中
**四、CSS样式的优先级**
1、浏览器默认样式

2、外部样式

3、内部样式

4、内联样式

\<body bgcolor="aqua"\>不是内联样式，为标签，优先级低于样式。
**五、列表风格**
\#d1 li{

list-style: none;
}
\#d2 li{
list-style: disc;
}
\#d3 li{
list-style: circle;
}
\#d4 li{
list-style: square}
\#d5 li{
list-style: decimal}

**六、导航菜单的制作**
li{
list-style: none;
color: aqua;
float: left;
width: 150px;
}
