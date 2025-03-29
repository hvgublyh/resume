---
title: Css 相关插件
updated: 2022-07-23T16:26:33
created: 2022-07-23T16:19:07
---

1.  在同时使用tailwind和postcss-px2rem的时候, 建议把配置项都写入postcss.config.js中, 否则可能报错

tailwindcss undefined:3:21: missing '{'

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

1.  Postcss-px2rem在开发过程中, 建议注释掉配置, 不然调试器中不显示css来源(还需要配置source-map)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

