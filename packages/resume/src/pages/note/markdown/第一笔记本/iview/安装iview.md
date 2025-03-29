---
title: 安装iview
updated: 2019-12-24T16:41:57
created: 2019-11-22T14:32:39
---

1.  **使用npm 安装模块**
npm install view-design --save
1.  **main.js 中**
import iview from 'view-design'//引入模块

import 'view-design/dist/styles/iview.css'//引入样式

Vue.use(iview)//使用模块
1.  **页面内使用col报红**
file -\> preference -\> setting -\>搜索 vetur.validation.template ,去除勾选
