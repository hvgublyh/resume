---
title: '@layout'
updated: 2020-02-10T15:00:06
created: 2020-02-10T14:56:06
---

@layout : 布局标签函数,相当于jsp的tag,layout标签会把标签体{ }部分内容渲染出来之后，传给layout指定的模板页面，默认接收变量名为layoutContent，同时携带title变量进行传递。

使用方法 :
@layout("/inc/layout.html", {title:'主题'}){
\<p\>Hello Beetl\</p\>
@}

接受页面 :
layout.html
\<title\>\${title}\</title\>
\<div\>
\${layoutContent}
\</div\>

