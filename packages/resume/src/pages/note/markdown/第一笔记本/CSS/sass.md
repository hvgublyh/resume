---
title: sass
updated: 2021-07-16T22:34:43
created: 2020-01-03T10:30:35
---

1.  **变量** : SASS变量使用\$符号
\$myFontSize: 18px;
1.  **作用域** : SASS变量只在当前的层级有效
\$myColor: red;

h1 {

\$myColor: green; // 只在 h1 里头有用，局部作用域

color: \$myColor; **//green**

}

p {

color: \$myColor; **//red**

}

**设置全局作用域 : !grobal**

\$myColor: green !global; // 只在 h1 里头有用，局部作用域
1.  **嵌套选择器**
nav {

ul {

margin: 0;

padding: 0;

list-style: none;

}

li {

display: inline-block;

}

a {

display: block;

padding: 6px 12px;

text-decoration: none;

}

}

编译结果 :

nav ul {

margin: 0;

padding: 0;

list-style: none;

}

nav li {

display: inline-block;

}

nav a {

display: block;

padding: 6px 12px;

text-decoration: none;

}
1.  **嵌套属性**
2.  **导入文件**
@import filename

**注意: 当没有添加后缀的时候,默认添加.scss后缀**
1.  **Sass Partials**
如果希望一个sass文件不被编译为css文件,可以在文件名开头添加一个下划线,而在导入语句中我们不需要添加下划线

注意: 不要将带下划线和不带下划线的同名文件放置于统一目录下,否则带下划线的文件将被忽略
1.  混入
    1.  定义一个混入,其中important-text为混入的名称
@mixin important-text {

color: red;

font-size: 25px;

font-weight: bold;

border: 1px solid blue;

}
1.  混入的使用
.danger {

@include important-text;

background-color: green;

}
1.  混入接受参数
    1.  向混入传递变量
@mixin bordered(\$color, \$width) {

border: \$width solid \$color;

}

.myArticle {

@include bordered(blue, 1px); // 调用混入，并传递两个参数

}
1.  定义参数默认值
@mixin sexy-border(\$color, \$width: 1in) {

border: {

color: \$color;

width: \$width;

style: dashed;

}

}

p { @include sexy-border(blue); }

h1 { @include sexy-border(blue, 2in); }
1.  浏览器私有前缀使用混入
@mixin transform(\$property) {

-webkit-transform: \$property;

-ms-transform: \$property;

transform: \$property;

}

.myBox {

@include transform(rotate(20deg));

}

1.  继承
    1.  使用@extend + 选择器
.button-basic {

border: none;

padding: 15px 30px;

text-align: center;

font-size: 16px;

cursor: pointer;

}

.button-report {

@extend .button-basic;

background-color: red;

}
