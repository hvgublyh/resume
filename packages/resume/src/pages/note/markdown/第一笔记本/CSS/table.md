---
title: table
updated: 2020-01-15T14:39:34
created: 2019-12-10T09:53:19
---

table
2019年12月10日
9:53

1.  border-collapse : collapse //将表格边框折叠成单一边框
2.  border-spacing : length/inherit
3.  设置table的宽和高,table设置宽度,th,td设置高度
table

{

width:90%;

}

th

{

height:60px;

}

td

{

height:60px;

}
1.  设置table文本垂直居中
td

{

height:50px;

vertical-align:middle;

}

td

{

height:50px;

line-height: 50px;

}

1.  空的td设置宽度不起作用 : 使用&nbsp占位
2.  table设置内容过长使用…进行代替
.myTable{

 /\*width: fit-content;\*/

 width: 500px;

 /\*border: solid 1px black;\*/

 border-collapse: collapse;

 text-align: center;

 table-layout: fixed;

 }

 .myTd{

 width:80px;

 height: 40px;

 font-size: 16px;

 line-height: 40px;

 border: solid 1px \#333;

word-break: keep-all;

 white-space: nowrap;

 overflow: hidden;

 text-overflow: ellipsis;

 }

