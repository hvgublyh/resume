---
title: 前后台交互-springboot
updated: 2022-04-20T17:54:36
created: 2021-07-24T19:59:19
---

1.  **路径参数传参**
    - **接口**

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

- 请求
无特别要求,需要路径满足
1.  **@RequestParam传参**
    - **接口**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

- 路径注释使用RequestMapping或者 GetMapping, 不能使用PostMapping
- 请求
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

- axios使用get请求, 请求类似?name =\*\*&&cipher=\*\*

1.  **@RequestBody**
    - **接口**

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)

- 需要编写类来接收参数
- 请求

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)

- 使用post请求
- 请求格式设置application/json;charset=UTF-8 \| text/plain;charset=UTF-8 (字符串)

1.  **无注解类接收参数**
    - **接口**

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image6.png)

- 路径注释使用RequestMapping或者 GetMapping
- 使用PostMapping的情况, 可以设置类型为multipart/form-data

- 请求

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image7.png)

- 需要请求类型为get, 请求类似?name =\*\*&cipher=\*\*
1.  无注解接收多个基本类型参数
    - 接口

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image8.png)

- 请求

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image9.png)

- 需要使用get请求
- 非字符串的字段不能为空

1.  无注解接收多个数组
    - 接口

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image10.png)

- 请求

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image11.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image12.png)

- 需要使用get请求
- 请求字段的数组各元素用 ','分隔,类似 /getInfo?name=tom%2Ctom&cipher=true%2Ctrue
1.  请求头参数以及cookie
    - 接口

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image13.png)

或者

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image14.png)

- 请求
无特别需求
