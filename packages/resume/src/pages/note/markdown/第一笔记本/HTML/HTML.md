---
title: HTML
updated: 2021-07-16T02:35:48
created: 2019-08-17T22:51:46
---

[HTML_ch01_HTML基本标签一.pptx](../../resources/9017c7a20bd649678936b11b03bc3793.pptx)
|     |     |
|-----|-----|
| 1   |    |

**一、什么是HTML**
1、HTML是Hyper Text Markup Language超文本标记语言

2、它是用来制作页面的，以.HTML或.htm为后缀

3、HTML 需要借助浏览器把页面呈现给用户
**二、HTML 文档的基本结构**
以\<html\>开头，以\</html\>结尾。

HTML 文档包括两部分：\<head\>头部部分和\<body\>主体部分。

\<html\>

\<head\>\</head\>

\<body\>\</body\>

\</html\>

\<body bgcolor="aqua"\>（通过bgcolor标记body背景色）
**三、认识HTML标记**
1、HTML 超文本标记语言，主要通过各种标记来显示和排列个对象，通常由尖括号

\<\>和所包括的标记元素组成。

2、在HTML中几乎所有标记都是成对出现的，结束标记总是在开始标记前加一个/，

标记之间可以嵌套，每个标记都有自己相应的属性。

3、HTML 超文本标记语言不区分大小写，建议小写。

标记语法：

1）封闭类型的标记，又叫双标记。

\<标记\>内容\</标记\>

\<标记 属性1="值1" 属性2="值2"\>内容\</标记\>

2）非封闭类型的标记，又叫单标记

没有内容，但是有属性。

\<标记\>或\<标记/\>

\<br\>或\<br/\>
**四、网页的摘要信息**
网页的摘要信息主要放在HTML文档的head区域，主要通过\<titile\>和\<meta\>

标签来实现。

1、\<title\>\</titile\>

说明网页的用途，显示在浏览器的标题栏中。

2、\<meta\>

主要用来描述HTML网页的属性

\<meta charset="UTF-8"\>

charset="UTF-8",告诉浏览器以utf-8这种编码方式来解析代码。

\<meta name="description" content="?????"\>

\<meta name="keywords" content="?????"\>

keywords:网页关键字

description:网页描述

**WEB语义化:** body,article, nav, aside, section, header, footer, hgroup, 还有 h1-h6 address
1.  hgroup : 内置多个h1-h6标签
2.  nav : 导航链接,内置ul
3.  article : 代表一个在网页,网站中自成一体的内容,其目的是为了让开发者独立开发或重用,除了内容,还有一个标题和页脚
\<article\>

\<h1\>你好，我是这边文章的标题\</h1\>

\<p\>你好，我是文章的内容\</p\>

\<footer\>

\<p\>最终解释权归XXX所有\</p\>

\</footer\>

\</article\>
1.  section :代表文档中的节或段

**SEO(search engine optimization):**
1.  TDK优化(tiltle, description, Keywords)
2.  使用HTML结构化
    1.  h 标签 合理设置h1-h6
    2.  alt 注释 优化图像
    3.  strong , em
    4.  no follow ,避免链接影响网站权重
\<a href=”URL地址” rel=”external nofollow”\>
1.  链接URL
    1.  统一URL
    2.  301跳转
    3.  URL层级
**五、HTML 页面中的块级标签**
1、**标题标签**

\<h1\>--\<h6\>

\<h1\>最大，\<h6\>最小

2、**段落标签**\<p\>\</p\>

1）前后换行，\<p\>标签中的内容以段落的形式显示，行间距比\<br\>大

2）可以不写关闭，开始下一个段落标签之前，前一个会自动关闭

3）水平对齐方式：align（left、center、right）

3、**水平线标签**\<hr\>

\<hr color="red" size="5px"\>

用于内容的分割

4、**列表**

1）**有序列表ol**(ordered list)

列表项li(list item)

\<ol\>

\<li\>填写信息\</li\>

\<li\>接受电子邮件\</li\>

\<li\>注册成功\</li\>

\</ol\>

2）**无序列表ul**(unordered list)

\<ul\>

\<li\>填写信息\</li\>

\<li\>接受电子邮件\</li\>

\<li\>注册成功\</li\>

\</ul\>

5、**定义描述标签**，适用于图文混编的场合

\<dl\>

\<dt\>\<img src="imgs/img1.png"\>\</dt\>

\<dd\>这个包包降价了\</dd\>

\<dd\>走过路过千万不要错过\</dd\>

\</dl\>

6、**表格**\<table\>\<table/\>

\<table width="200px" height="200px" border="1" align="center"\>
\<tr align="center"\>\<td valign="top"\>百度\</td\>
\<td\>百度\</td\>
\</tr\>
\<tr\>
\<td valign="bottom"\>搜狐\</td\>
\<td\>搜狐\</td\>
\</tr\>
\</table\>

1)表格的属性

width/height：宽高

align:水平对齐方式 left、center、right

valign:垂直对齐方式 top、bottom、middle（td的属性）

cellpadding="20px"：单元格内容和单元格边框之间的距离

cellspacing="20px"：单元格与单元格之间的距离

2)表格标题

\<caption\>我的表格\</caption\>

7、**表单**

\<form action="" method="post"\>

\</form\>

action：定义表单内容提交到哪里去

method：表单内容的提交方式，取值为post或get

\<form\>表单标签一般和\<table\>一起使用，即table写在form里

**8、分区标签\<div\>**

一般当作容器来使用

\<div style="background-color:aqua;width: 600px;height: 600px"\>
123
\</ul\>
\<dl\>
\<dt\>咖啡\</dt\>
\<dd\>咖啡是黑色的，很苦\</dd\>
\<dd\>可以提神\</dd\>
\</dl\>
咖啡
\<ul\>
\</div\>
**六、行级标签**
1、图像标签

\<img src="imgs/img1.png" width="300px" alt="包包" title="包包"\>

常用属性：

width/height：不建议宽高都设置，因为如果不知道原图比例，都设置可能会导致变形

alt：图片无法显示时的提示文本

title：鼠标划过时的提示文本

2、范围标签\<span\>\</span\>显示某行内的独特样式。

\<p\>商品降价了，仅售\<span style="color: red;font-size: 70px；letter-spacing:1px"\>1\</span\>元\</p\>

3、换行标签\<br\>

小结：块级元素：前后换行，独占一块地方
行级元素：只要一行内能显示开，就在一行显示
