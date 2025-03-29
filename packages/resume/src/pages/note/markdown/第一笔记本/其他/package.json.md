---
title: package.json
updated: 2025-03-27T09:15:28
created: 2025-03-26T18:24:28
---

1.  **private**
禁止发布

设置 "private": true 的包完全不能被发布到 npm（包括公共和私有 registry）

执行 npm publish 时会直接报错：This package is private

1.  **publishConfig**
registry：覆盖默认的 npm registry

access：明确包的访问权限。优先级 publishConfig.registry \> .npmrc 中的 registry \> 默认 npm registry

**3. "main":"dist/index.js",**
传统的 Node.js 使用的入口点，指向一个 CommonJS 格式的文件。

**4. "module": "dist/index.esm.js",**
支持 ECMAScript 模块（ES Module, ESM）的构建工具（如 Rollup 和 Webpack）准备的入口点。

1.  **type**
文件中，type 属性用于指定项目中的模块类型系统 \#module/commonjs

