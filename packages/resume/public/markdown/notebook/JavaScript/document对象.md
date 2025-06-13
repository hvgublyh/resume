---
title: document对象
updated: 2020-06-24T13:34:17
created: 2019-08-20T14:17:34
---

一、document
代表当前html文档，文档中的每一个标签都可以当作是document对象的一个子对象。

1、属性：referrer 、URL

1）referrer:获取当前页面的上一个页面

2）URL：获取当前页面的路径

**==document.write(document.URL+"\<br\>");//获取当前页面的路径==**

2、常用方法

1）write()

2）getElementById():通过id找到某个元素

3）getElementByTagName("button"):通过标签名获取页面中的多个元素，返回值是一个数组

4）getElementByName():通过name属性值获取页面中的多个元素，返回值是一个数组。

案例：查找value输出字符串

\<body\>

\<input name="button" type="text" value="春"\>\<br\>

\<input name="button" type="text" value="夏"\>\<br\>

\<input name="button" type="text" value="秋"\>\<br\>

\<input name="button" type="text" value="冬"\>\<br\>

\<button type="button" onclick="all_input()"\>通过标签名找到元素\</button\>

\<button type="button" onclick="all_inputByName()"\>通过name属性找到元素\</button\>

\<div id="season_dic"\>\</div\>

\<script\>

//通过标签名找到元素

function all_input(){

var all=document.getElementsByTagName("input");

var str="";

for(vari=0;i\<all.length;i++){

str+=all\[i\].value;

}

//将str写入div

var seasonOut=document.getElementById("season_dic")

seasonOut.innerHTML=str;

}

//通过name属性找到元素

function all_inputByName(){

var all=document.getElementsByName("button");

var str="";

for(var i=0;i\< all.length;i++){

str+=all\[i\].value;

}

//将str写入div

var seasonOut = document.getElementById("season_dic")

seasonOut.innerHTML=str;

}

\</script\>

\</body\>

二、document对象应用
1、控制元素的显示和隐藏

visibility:

visible:元素可见

hidden:元素不可见

display:

none:元素隐藏

block:以块级元素的形式来显示

inline:以行级元素的形式来显示

语法：object.style.visibility = 值；

object.style.display = 值；

注意：visbility = "hidden":将元素隐藏，但在网页中该占的位置还占着

display = "none" ：将元素隐藏，在网页中不占任何空间

**案例：制作隐藏菜单**

\<body\>

\<dl\>

\<dt\>\<imgsrc="img/img3.png"\>树形菜单：\</dt\>

\<dd\>

\<p onclick="show()"\>\<img src="img/img4.png"\>文学艺术\</p\>

\<ulid="art"style="display:none"\>

\<li style="list-style:none"\>\<img src="img/img5.png"\>先锋写作\</li\>

\<li style="list-style:none"\>\<img src="img/img5.png"\>小说散文\</li\>

\<li style="list-style:none"\>\<img src="img/img5.png"\>诗风词韵\</li\>

\</ul\>

\</dd\>

\</dl\>

\<script\>

functionshow(){

varart=document.getElementById("art");

//判断三级菜单的显示和隐藏，如果显示则让其隐藏，如果隐藏，则让其显示

if(art.style.display=="none"){

art.style.display="block";

}else{

art.style.display="none";

}

}

\</script\>

\</body\>

2、实现全选效果
复选框的checked属性：

选中：true

未选中：false

**案例：全选按钮**

\<body\>

\<input id="checkAll"type="checkbox"value="全选"onclick="checkAll()"\>全选\<br\>

\<input name="ch"type="checkbox"value="1"\>1\<br\>

\<input name="ch"type="checkbox"value="2"\>2\<br\>

\<input name="ch"type="checkbox"value="3"\>3\<br\>

\<script\>

function checkAll(){

//找到全选按钮

var checkAll = document.getElementById("checkAll");

//找到1，2，3

var arr = document.getElementsByName("ch");

if(checkAll.checked == true){//全选按钮被选中

for(var i=0;i\<arr.length;i++){

arr\[i\].checked=true;

}

}else{

for(var i=0;i\<arr.length;i++){

arr\[i\].checked=false;

}

}

}

\</script\>

\</body\>

**添加监听事件:**
var media = document.getElementById("myVideo");

media.addEventListener(e, function () {})

或者使用jQuery

\$("#myVideo").on("play",function(){

media.webkitRequestFullScreen();

})
选择器 : document.querySelector(".transition") -----只选择第一个满足选择要求的元素
document.querySelectorAll(".transition")------返回数组

cookie存取,删除
[cookie.txt](https://onedrive.live.com/embed?resid=917BDB507DCE4158!2112&filename=cookie.txt&authkey=!AGqWNjP8A9OGiTo)

session存取,存在判断,删除
[session.txt](https://onedrive.live.com/embed?resid=917BDB507DCE4158!2111&filename=session.txt&authkey=!ALOyBbBDX_slGCE)

localStorage存取,参见session存取

