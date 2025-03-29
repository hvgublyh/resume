---
title: webview
updated: 2024-12-20T16:12:58
created: 2024-12-20T15:57:16
---

1.  **安装依赖**
flutter pub get webview_flutter

1.  **配置pubspec.yaml**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

webview_flutter:

1.  **dart文件中引入**
import 'package:webview_flutter/webview_flutter.dart';

1.  **使用**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

注意: javascriptMode用于控制JS的开启与禁用, 默认关闭

1.  **由于Android9默认禁用HTTP, 如果需要配置HTTP页面, 需要开启相关选项. 如图所示, 如果是debug启动, 需要同时更改debug的配置.**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

**方法一: android:usesCleartextTraffic="true"**

在main文件夹下

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)

在debug文件夹下

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)

**方法二: android:networkSecurityConfig="@xml/network_security_config"**

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image6.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image7.png)

1.  JSBridge使用

