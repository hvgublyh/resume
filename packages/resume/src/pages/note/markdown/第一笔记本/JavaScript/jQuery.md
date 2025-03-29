---
title: jQuery
updated: 2021-07-27T17:13:44
created: 2019-08-22T11:52:41
---

- jQeury的选择器
\$(document).ready(function () {

//找到id为test-jquery的元素，改变背景色为红色 id选择器

//\$("#test-jquery").css("background", "red");

//找到页面上所有的p元素 标签选择器

//alert(\$("p").length);

//找到页面上所有class属性值为color-red的元素，背景色设为绿色 类选择器

// \$(".color-red").css("background","green");

//改变type为password的input标签的背景为绿色

//\$("input\[type = password\]").css("background","green")

//查找出所有name属性值是email的元素，改变背景色为蓝色 属性选择器

// \$("\[name = email\]").css("background","blue");

//把一级菜单1的颜色改为红色 过滤选择器

//\$("li:first").css("color","red");

//\$("li:first-child").css("color", "red");

//查找name属性值是email的input框，改变背景色为蓝色 组合选择器

//\$("input\[name = email\]").css("background", "blue");

//\$("p,div,ul")

//\$("p.color-red)

//找出div下的所有段落元素 后代选择器

//alert(\$("div p").length);

//找出div下的所有子段落元素（儿子辈的） 子选择器

// alert(\$("div \> p").length)

});

- jQuery的DOM操作
JavaScript的DOM操作：
- 设置或获取内容
  - 设置或获取元素的文本内容：innerText
  - 设置或获取元素的HTML内容：innerHTML
- 更改元素的样式
  - document.getElementById("main").style.color = "red";
- 设置或获取属性
  - 获取属性：getAttribute("属性名");
  - 设置属性：setAttribute("属性名","属性值");

jQuery的DOM操作
- 设置获取内容
  - 设置或获取元素的文本内容： text()
  - 设置或获取元素的HTML内容: html()
  - 设置或获取表单元素的值: val()
注意：以上三个方法不含参数表示获取，含参数表示设置。

\$("#username").blur(function () {

if (\$(this).val() == "") {

\$("#msg").text("用户名不能为空");

}

{

\$("#msg").text(" ");

}

});

- 更改元素的样式
  - 设置样式属性： css()
向被选元素addClass():向被选元素添加一个或多个类样式

removeClass():移除被选元素一个或多个类样式

toggleClass():添加或者移除元素的一个类样式

- 设置或获取属性
  - 获取属性：attr(属性名);
  - 设置属性：attr("属性名","属性值");
  - 移除属性: removeAttr(属性名);
  - 获取属性: prop(属性名);
  - 设置属性: prop("属性名","属性值")
  - 移除属性: removeProp(属性名);

- jQuery的常用事件
\$(document).ready(function(){

//将jQuery代码放在此处

});

\$(function(){

//将jQuery代码放在此处

});

2、点击事件 click()

3、得到光标事件 focus()

4、失去光标事件 blur()

5、合成事件 hover()

//鼠标移上超链接添加样式，鼠标移走的时候去掉样式 合成事件

//合成事件hover(function(){},function(){}),jQuery的自定义事件，模拟光标悬停，

//光标移上，触发第一个函数，光标移走，触发第二个函数

\$("div \> a").hover(function () {

\$(this).addClass("red");

}, function () {

\$(this).removeClass("red");

})

\$("div \> a").hover(function(){

\$(this).toggleClass("red");

})

});
- jQuery的常用动画
1、显示或隐藏
|        |        |
|--------|--------|
| show() | hide() |
\$("#id").toggle(属性);

2、淡入淡出
|          |           |
|----------|-----------|
| fadeIn() | fadeOut() |
\$("#id").fadeToggle(属性);

3、滑上滑下
|             |           |
|-------------|-----------|
| slideDown() | slideUp() |
\$("#id").slideToggle(属性);

属性:时间,"fast/slow/normal"

- 遍历
  - 祖先
    - parent() : 元素的父元素
    - parents() : 元素的所有祖先元素
    - parentsUntil() : 元素和给定祖先元素之间的所有元素
  - 后代
    - find() : 元素的所有后代元素
    - children() : 元素的所有直接子元素
  - 同胞
    - siblings() : 元素的所有同胞元素
    - next() : 元素的下一个同胞元素
    - nextAll() : 元素的所有跟随的同胞元素
    - nextUntil() : 元素和指定跟随同胞元素之间的所有同胞元素
    - prev(), prevAll() & prevUntil() 类似

- 其他
  - jquery的链式操作
\$("#form_login").focus(function(){

//操作语句

}).blur(function(){

//操作语句

});

同时对两个动作进行了响应的操作,节省了代码
- jquery导入JSON文件,注意: url不能使用相对路径,为绝对路径
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)
- lazyload.js
图片懒加载
