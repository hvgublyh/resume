---
title: 个人编辑CSS预定义样式
updated: 2020-05-14T11:59:20
created: 2019-12-30T09:33:45
---

个人编辑CSS预定义样式
2019年12月30日
9:33

html,body{

position: absolute;

left: 0;

top: 0;

font-size: 14px;

min-width: 1200px;

width: 100%;

height: 100%;
}

body,p,h1,h2,h3,h4,h5,h6{margin:0;}

ul,ol{ list-style: none; margin:0; padding:0;}

div{overflow:hidden}

p{
height: 20px;
line-height: 20px;
overflow: hidden;
}
a{
color: inherit;

text-decoration: none;
}
a:link{

}
a:visited{

}
a:hover{
cursor: pointer;
color: red;
text-decoration: underline;
}
a:active{

}

**//左右分离的标题栏**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

HTML部分:

\<div class="wrapper"\>

\<div class="leftPart"\>123\</div\>

\<div class="rightPart"\>123\</div\>

\</div\>

CSS部分 :

.Bar{

width: 100%;

height: 28px;

}

.wrapper{

width: 90%;

margin: auto;

height: 28px;

}

.leftPart{

float: left;

text-align: left;

}

.rightPart{

float: right;

text-align: right;

}
**//ul 菜单**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

HTML: 部分

\<ul\>

\<li class="list"\>123\</li\>

\<li class="list"\>123\</li\>

\<li class="list"\>123\</li\>

\<li class="list"\>123\</li\>

\<li class="list"\>123\</li\>

\<li class="list"\>123\</li\>

\</ul\>

CSS:部分

ul{

margin: 0;

height: 30px;

padding-left: 15px;

border: solid 1px indianred;

}

.list{

height: 30px;

width: 40px;

float: left;

line-height: 30px;

list-style: none;

}

**//设置 text-align: justify 方法**

HTML:

\<div class="justify"\>test sass\<span\>\</span\>\</div\>

CSS :

.justify{

text-align: justify;

line-height: 20px;

}

.justify \> span{

display: inline-block;

padding-left: 100%;

}
