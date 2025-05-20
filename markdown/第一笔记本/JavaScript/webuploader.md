---
title: webuploader
updated: 2021-07-27T17:03:08
created: 2021-07-27T15:48:08
---

1.  注册hook
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)
1.  beforeSendFile
    - 计算MD5 , 为防止计算时间过长,指定起点和终点
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)
1.  beforeSend
    - 每个块上传前判断是否需要上传
主要根据**文件MD5,分块下标,分块MD5**来获取缓存文件,并比较**分块大小**

当前代码有点问题,个人倾向于使用文件MD5生成**文件夹**,文件命名使用**分块下标_分块MD5**

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)

1.  afterSendFile
    - 所有分片上传完成之后,整合分块

1.  文件保存
    - 前台
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image6.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image7.png)

- 后台
此处应该使用**文件MD5 分块MD5** 以及 **分块下标**命名文件

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image8.png)

