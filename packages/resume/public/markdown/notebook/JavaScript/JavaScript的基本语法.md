---
title: JavaScript的基本语法
updated: 2021-11-01T14:09:46
created: 2019-08-19T14:21:38
---

一、简介
1、HTML静态网页

2、css控制网页样式

3、JavaScript脚本语言，用来实现页面的动态效果

二、JavaScript
==\<script\>==

==document.write("helloworld");==

==\</script\>==
|  |  |
|----|----|
| ==写在\<script\>标签中，该== | ==标签可以放在\<head\>或\<body\>中，可以出现多次，从上往下顺序执行。== |

==三、变量==
==1、声明变量==

==使用var关键字，在声明的时候不确定数据类型，具体数据类型赋值时确定。==

2、数据类型

1）number

整数或浮点数，typeof的结果都是number

NaN：非数字，是一个特殊的值，这个值表示本来要返回数值的操作却未返回数值的情况，0/0返回。Infinity：无穷大。

==**var**num1=20;==

==alert(**typeof**num1);//number==

==**var**num2=20.0;==

==alert(**typeof**num2);//number==

==**var**num3=NaN;//非数字==

==alert(**typeof**num3);//number==

==alert(0/0);//NaN==

==alert(12/0);//Infinity==

2）用双引号或单引号引起来的数据类型，为string；

==**var**str=**"aaa"**;==

==alert(**typeof**str);//string==

==str=**'bbb'**;==

==alert(str);//string==

3）boolean

var flag=true;

alert(typeofflag);//boolean

flag=false;

alert(typeofflag);//boolean

vars="true";

alert(typeofs);//string

只有两个值true和false;

4)引用数据类型object

var date=newDate();

alert(typeofdate);//object

var arr=newArray();

alert(typeof arr);//object

5）undefined

js中的特殊数据类型

指的是变量被声明之后未被赋值

var s1;

alert(typeof s1);//undefined

四、数据类型之间的隐式转换（自动类型转换）
var num=10;

var str="str";

var flag=true;

alert(num+str);//10str

alert(num+flag);//11

alert(str+flag);//strtrue

alert(flag+flag);//2

1、数字+字符型：数字转换为字符串

2、数字+布尔型：布尔型转换为1或0参与加法运算

3、字符型+布尔型：布尔型转换为字符串true或false

4、布尔值+布尔值：布尔值转换为0或1参与加法运算

五、JavaScript运算符
1、算术运算符

\+ - \* / % ++ --

2、比较运算符

\< \> \>= \<= != == ===

var num=10;

var str1='10';

var str2='10';

alert(num==str1);//true

alert(num===str1);//false

alert(str1===str2);//true

==：两个变量的值相等就返回true

===：两个变量的值和数据类型都相同返回true；

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

3、逻辑运算符

&& 、\|\| 、！

4、赋值运算符

= += -=

六、逻辑控制语句
1、if(){}

2、if(){}else{}

3、if(){}else if(){}else{}

4、switch(){

case 1:

case2:

……

}

5、while(){}

6、do{}while()

7、for(;;){}

七、JavaScript的弹出框
1、alert()

2、confirm(string message):弹出一个带确定和取消按钮的确认框，点击确定返回ture,点击取消返回false

3、prompt(string message,string optional);

prompt():弹出一个需要用户输入的输入框，返回值就是用户输入的值

var name=prompt("请输入姓名：","admin");//admin为默认值，没有输入则返回默认值

alert(name);

八、HTML引用JavaScript的三种方式
1、行内引用

\<button type = "button" onclick = "alert()"\>

2、写在\<script\>标签中

\<script \>\</script\>

3、引用外部的js文件

\<script src="js1.js"\>\</script\>

九、调试
F12打开开发者人员工具-\>找到js代码打断点-\>刷新页面进入断点

F10：单步运行

F11：进入方法

F8：跳到下一个断点

F5：开始或结束

**==号的运算规则**
1\. undefined == null，结果是true。且它俩与所有其他值比较的结果都是false。

2\. String == Boolean，需要两个操作数同时转为Number。

3\. String/Boolean == Number，需要String/Boolean转为Number。

4\. Object == Primitive，需要Object转为Primitive(具体通过valueOf和toString方法)。

