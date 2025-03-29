---
title: layer
updated: 2020-02-10T09:35:45
created: 2019-12-09T15:46:59
---

常用几种方法:
1.  var index = layer.confirm(content, options, yes, cancel)
1.  var index = layer.msg(content, options, end)
1.  var index = layer.load(icon, options)
2.  var index = layer.tips(content, follow, options)
3.  var index = layer.alert(content, options, yes)
4.  layer.prompt(options, yes)
5.  layer.close(index)
6.  layer.closeAll(type)
注 : content表示内容,用字符串表示,对于iframe层,content内容为页面url

options 表示选项,包括icon,resize,shade,shadeClose ,time(默认不自动关闭,设置时间自动关闭弹出层),

yes表示点击确定

cancel表示点击取消

end表示结束

follow表示tips跟随的元素,用"#id",".className","tagName"表示,在在元素的事件回调体中，follow可直接赋予this

