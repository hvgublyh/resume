---
title: Pnpm, vite, esbuild
updated: 2025-03-05T20:18:15
created: 2022-02-07T14:53:12
---

1.  安装pnpm
npm install -g pnpm
1.  新建vue模板的vite项目
pnpm create vite my-vue-app
1.  运行
pnpm install

Pnpm run serve

问题:
1.  Cannot find module '@vitejs/plugin-vue' or its corresponding type declarations
解决: 重启项目
1.  无法使用path或者_dirname等nodejs内置模块及变量
解决: nodejs不支持ts, 不能直接在ts项目中使用,

可以通过安装依赖 npm install @types/node --save-dev

