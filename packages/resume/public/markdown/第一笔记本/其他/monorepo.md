---
title: monorepo
updated: 2025-03-26T18:26:00
created: 2025-03-10T16:44:54
---

1.  可以通过copilot自动创建
2.  初始化项目 pnpm init
3.  新建npmrc
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)
1.  pnpm-workspace.yaml
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)
1.  Packages
2.  创建子项目

报错
**Cannot find module '@vueapps/components2' or its corresponding type declarations.**
**在对应项目的tsconfig.json中, 添加paths**
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

**The keyword 'interface' is reserved**
修改package.json, 运行build命令打包依赖

**Module not found: Error: Can't resolve '@vueapps/components'**
修改package.json, 运行build命令

**husky报错 /bin/bash: D:/Program/nodejs/npx: No such file or directory**
将配置中的npx改为npx.cmd

