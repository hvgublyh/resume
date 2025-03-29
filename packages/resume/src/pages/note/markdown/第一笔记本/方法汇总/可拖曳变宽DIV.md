---
title: 可拖曳变宽DIV
updated: 2020-01-03T14:19:29
created: 2020-01-03T14:19:04
---

\<!DOCTYPE html\>
\<html lang="en"\>
\<head\>
\<meta charset="UTF-8"\>
\<title\>Resizable Div Container\</title\>
\<meta name="description" content="可以对div进行拖动缩放大小"\>
\<style type="text/css"\>
\#container.resizable {
width: 100%;
height: 100%;
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
position: relative;
opacity: 0;
}
\#container.resizable \#left {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 85%;
overflow: hidden;
background-color: \#ccc;
}
\#container.resizable \#right {
position: absolute;
right: 0;
top: 0;
bottom: 0;
width: 85%;
padding-left: 4px;
overflow: hidden;
background-color: \#ddd;
}
\#container.resizable \#resizor {
position: absolute;
top: 50%;
right: 85%;
cursor: w-resize;
background-color: \#666;
border-radius: 5px;
margin-top: -10px;
width: 6px;
height: 20px;
/\*background: url('/public/static/admin/images/resize.png') repeat-y;\*/
background-size: cover;
background-position: center;
z-index: 99999;
}
\</style\>
\</head\>
\<body\>
\<div id="container" class="resizable"\>
\<!-- Left side --\>
\<div id="left"\>
\<p\>左侧内容\</p\>
\</div\>
\<div id="resizor" title="拖动我"\>\</div\>
\<!-- Right side --\>
\<div id="right"\>
\<p\>右侧内容\</p\>
\</div\>
\</div\>
\<script src="js/jquery.min.js"\>\</script\>
\<script type="text/javascript"\>
let isResizing = false;
let lastDownX = 0;

\$(function () {
const container = \$('#container.resizable');
// 根据当前窗口大小设定 container 的高度
container.css({'height': (\$(window).height() - 20), 'opacity': 1});

const left = \$('#left');
const right = \$('#right');
const resizor = \$('#resizor');

resizor.on('mousedown', function () {
isResizing = true;
lastDownX = e.clientX;
});

\$(document).on('mousemove', function (e) {
if (!isResizing) return true;
let offsetRight = container.width() - (e.clientX - container.offset().left);
// 判断左右拖动范围
if (offsetRight \< 0 \|\| offsetRight \>= container.width()) {
return true;
}
left.css('right', offsetRight);
resizor.css('right', offsetRight);
right.css('width', offsetRight);
}).on('mouseup', function () {
isResizing = false;
});
});
\</script\>
\</body\>
\</html\>
