---
title: masonry
updated: 2020-06-23T17:34:29
created: 2020-06-23T13:48:38
---

1.  masonry报错
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

解决 : 将 \$('.grid').masonry('reload'); 更改为　\$('.grid').masonry().masonry('reload');

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

解决 :新版本的masonry将"reloadItems" 代替了 ＂reload＂
