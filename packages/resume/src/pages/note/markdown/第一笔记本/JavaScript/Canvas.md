---
title: Canvas
updated: 2020-01-15T15:31:59
created: 2019-12-06T08:28:38
---

Canvas
2019年12月6日
8:28

实例:
function draw(){

var x1=0.475;

var y1=1;

var x2=0.498;

var y2=1;

var x3=0.725;

var y3=0;

var x4=0.811;

var y4=0;

//初始化

var width=document.documentElement.clientWidth;

var height=width\*0.212;

var crt=document.getElementById("myCanvas");

var img=document.getElementById("login-bg");

var canCon=crt.getContext('2d');

crt.setAttribute("width",width);

crt.setAttribute("height",height);

//设置随窗口大小变化

window.onresize=function(){

width=document.documentElement.clientWidth;

height=width\*0.212;

crt.setAttribute("width",width);

crt.setAttribute("height",height);

};

setInterval(function(){

////绘制透明层

//canCon.fillStyle="rgba(0,0,0,0.02)";

//canCon.fillRect(0,0,width,height);

//擦除画布

canCon.drawImage(img,0,0,width,height);

//第一个点

canCon.beginPath();

canCon.fillStyle="rgb(252,192,89)";

canCon.arc(x1\*width,y1\*height,4,0,Math.PI\*2);

canCon.fill();

//第二个点

canCon.beginPath();

canCon.fillStyle="rgb(252,192,89)";

canCon.arc(x2\*width,y2\*height,4,0,Math.PI\*2);

canCon.fill();

//第三个点

canCon.beginPath();

canCon.fillStyle="rgb(252,192,89)";

canCon.arc(x3\*width,y3\*height,4,0,Math.PI\*2);

canCon.fill();

//第四个点

canCon.beginPath();

canCon.fillStyle="rgb(252,192,89)";

canCon.arc(x4\*width,y4\*height,4,0,Math.PI\*2);

canCon.fill();

//第1个点判断

if(y1\<=0){

x1=0.475;

y1=1;

}elseif(y1\<=0.460){

x1+=0.00044;

y1-=0.00178

}else{

x1-=0.0001;

y1-=0.00178

}

//第2个点判断

if(y2\<=0){

x2=0.498;

y2=1;

}elseif(y2\<=0.51){

x2+=0.00043;

y2-=0.00178

}else{

x2-=0.0001;

y2-=0.00178

}

//第3个点判断

if(y3\>=1){

x3=0.725;

y3=0;

}elseif(y3\<=0.478){

x3+=0.00029;

y3+=0.00178

}else{

x3-=0.00029;

y3+=0.00178

}

//第4个点判断

if(y4\>=1){

x4=0.811;

y4=0;

}elseif(y4\<=0.42){

x4+=0.00029;

y4+=0.00178

}else{

x4-=0.00028;

y4+=0.00178

}

},10)

}

draw();

如何绘制彗星样式?
1\.

////绘制透明层,覆盖旧样式

//canCon.fillStyle="rgba(0,0,0,0.02)";

//canCon.fillRect(0,0,width,height);

2.使用shadowColor和shadowBlur

3.建立多个半径变化的圆作为彗星的尾迹
