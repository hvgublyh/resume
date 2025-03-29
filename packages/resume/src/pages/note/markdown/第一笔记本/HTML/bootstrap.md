---
title: bootstrap
updated: 2020-03-05T09:13:29
created: 2019-08-19T08:51:46
---

bootstrap
2019年8月19日
8:51

一、使用bootstrap修饰按钮
\<button type="button" class="btn btn-primary " \>primary\</button\>

\<button type="button" class="btn-default btn-lg"\>default\</button\>

\<button type="button" class="btn-success btn-lg"\>success\</button\>

\<button type="button" class="btn-warning btn-lg"\>warning\</button\>

\<button type="button" class="btn-danger btn-lg"\>danger\</button\>

\<button type="button" class="btn-info btn-lg"\>info\</button\>

\<button type="button" class="btn btn-sm"\>提交\</button\>

\<button type="button" class="btn-info btn-xs"\>info\</button\>

二、使用bootstrap修饰图片
\<img src="https://static.runoob.com/images/mix/paris.jpg" class="img-rounded"\>\<br\>

\<img src="https://static.runoob.com/images/mix/paris.jpg" class="img-circle"\>\<br\>
三、使用bootstrap修饰表格
\<table class="table table-bordered table-striped table-hover"\>
四、使用bootstrap修饰分页
\<ul class="pagination"\>

\<li class="disabled"\>\<a href="#"\>&laquo;\</a\>\</li\>

\<li class="active"\>\<a id="d1"\>1\</a\>\</li\>

\<li\>\<a id="d2"\>2\</a\>\</li\>

\<li\>\<a id="d3"\>3\</a\>\</li\>

\<li\>\<a id="d4"\>4\</a\>\</li\>

\<li\>\<a id="d5"\>5\</a\>\</li\>

\<li\>\<a href="#"\>&raquo;\</a\>\</li\>

\</ul\>

五、栅格系统
我们按照屏幕大小讲设备屏幕分为以下四类：

超小屏幕（手机）：屏幕宽度\<768px

小屏幕（平板）：768px\<=屏幕宽度\<992px

中等屏幕（桌面显示器）：992px\<=屏幕宽度\<1200

大屏幕（大桌面显示器）：屏幕宽度\>1200px

栅格系统原理：我们把屏幕分为12份，使用col-xs-\* col-sm-\* col-md-\* col-lg-\*

使元素适应屏幕的尺寸。
\<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"\>
\<script src="js/jquery-3.3.1.min.js"\>\</script\>(先连接jquery)
\<script src="js/bootstrap.min.js"\>\</script\>（后连接bootstrap）
==\<divclass="container"style="width:80%;margin:auto;display:block;padding:20px;"\>==
==\<h1\>好书推荐\</h1\>==
==\<divclass="row"\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\<divclass="col-lg-3col-md-3col-sm-3col-xs-4"\>\<imgsrc="../../static/img/book.jpg"\>\</div\>==
==\</div\>==
==\</div\>==

**样式定制**
