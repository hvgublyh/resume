---
title: mt-loadmore
updated: 2020-10-28T16:08:01
created: 2020-10-28T15:21:00
---

HTML:
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)
Data:
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)
JS:
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

注意 :
- 为防止上拉下拉失效,在上拉下拉的绑定函数内,需要调用onBottomLoaded,onTopLoaded方法
- 已经加载所有数据之后,需要将bottom-all-loaded设为true,
并且在下拉重载函数内,将bottom-all-loaded设为false
