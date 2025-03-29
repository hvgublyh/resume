---
title: CSS样式二
updated: 2019-08-19T10:25:25
created: 2019-08-19T08:49:42
---

CSS样式二
2019年8月19日
8:49

[HTML_ch06_CSS样式二.pptx](../../resources/7f77ea291afa4b66a60a82c4e5b8170b.pptx)

[DIV+CSS布局大全.pdf](../../resources/4571224b0fc348ca894de65fb187b283.pdf)

一、CSS常见属性
1、dasplay属性（显示和隐藏）

none：不显示

block：以块级标签的形式来显示

inline：以行级标签的形式来显示

\<style\>
p{
/\*display:none;\*/
display: inline;
}
\</style\>

2、position属性（定位）

static：缺省值，浏览器在默认情况下，会按照从左到右，从上到下，依次摆放

各个标记。即没有定位，元素出现在正常的流里面，这种定位不会受到top、bottom、left、right

的影响。

relative：相对定位，相对自身正常位置进行定位。不脱离标准文档流，

参考自身位置通过top、bottom、left、right进行定位。对下面的元素没有影响。

absolute：绝对定位，绝对定位的元素相对于最近的以定位的父元素进行定位，脱离标准

文档流，通过top、bottom、left、right进行定位。

如果元素没有已定位的父元素，那么它的位置相对于\<html\>进行定位。

1、父元素无定位

元素相对于html（窗口左上角）进行定位。

2、父元素有定位

1）父元素相对定位

子元素相对父元素进行定位，父元素不脱离标准文档流，对下面的元素无影响。

2）父元素绝对定位

子元素相对父元素进行定位，父元素脱离标准文档流，下面的元素当其不存在。

二、CSS其他常见的属性

1、文本属性

font-size: 30px;

font-family: 微软雅黑;

font-weight: 900/bold（加粗）;

font-style: italic;

text-align: center;

text-decoration: underline;

cursor: wait、auto、pointer\default;/\*光标的形状\*/

2、背景

background-color: red;

background-image: url(image/image1.jpg);

background-repeat: repeat-x;

background-size: 10%;

background-position: 20px 30px;

background-attachment: fixed;

或者合起来写

background: red url(image/image1.jpg) no-repeat 20px 30px fixed;

3、在CSS样式中写border，需要写三个属性。

\#h1{
border: solid 1px black;
}

三、超链接的四种状态
未访问状态：a:linked

已访问状态：a:visited

鼠标移上状态：a:hover

激活选定状态：a:active

四、盒子模型
margin: 0 0 0 0;

顺时针，上右下左

margin：0 0；

上下 左右

padding: 0 0 0 0;

顺时针，上右下左

width: 200px;

height: 200px;

background-color: aqua;

margin: 0 0 0 0;/\*外间距\*/

padding:0 0 0 50px;/\*内边距\*/

border: solid 10px black;/\*边框\*/

border-radius: 7px;/\*圆角\*/

五、float浮动属性
1、什么是float浮动属性？

脱离标准文档流，表现为向左或向右移动。

2、浮动的三个特征

1）div等块级元素失去了块状换行显示的特征，变为行内元素。

2）紧贴上一个浮动元素（同方向）或者是父级元素的边框，如果宽度不够就换行显示。

3）占据行内元素的空间，导致行内元素围绕显示。
六、clear清除浮动
clear：none/left/right/both

none:两边都允许有浮动元素。

left:左边不允许有浮动元素。

right:右边不允许有浮动元素。

both:两边都不允许有浮动元素。
