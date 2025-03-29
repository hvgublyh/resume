---
title: iframe
updated: 2020-06-03T10:49:03
created: 2020-04-01T08:32:03
---

iframe
2020年4月1日
8:32

1\. iframe加载完成事件
if (iframe.attachEvent) {
iframe.attachEvent("onload", function() {
//iframe加载完成后你需要进行的操作
});
} else {
iframe.onload = function() {
//iframe加载完成后你需要进行的操作
};
}
2.设置iframe高度
例子 :

function setIframeHeight() {

var ifm = \$("#pdfContainer")\[0\];

var object = document.frames ? document.frames\["pdfContainer"\].document : ifm.contentDocument;

if(object.getElementsByClassName("weadmin-body")\[0\]){

object.getElementsByClassName("weadmin-body")\[0\].style.height = 'auto';

ifm.style.height = 'auto';//关键这一句，先取消掉之前iframe设置的高度

ifm.style.height = object.getElementsByClassName("weadmin-body")\[0\].scrollHeight + 'px';

}

}
1.  给iframe添加样式
(\$("#chpwd").find('iframe')\[0\].contentDocument).querySelector('body').append(style);

注意:在layer.open的方法中,在success属性中iframe已加载完毕,不可监听iframe的加载
