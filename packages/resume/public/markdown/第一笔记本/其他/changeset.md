---
title: changeset
updated: 2025-03-26T23:04:59
created: 2025-03-26T18:20:22
---

1.  开始使用
yarn add @changesets/cli -D

npx changeset init
1.  配置 changesets
access: "public" 或 "restricted"（对于私有包）

baseBranch: 你的主分支名称

fixed: 需要保持同步版本的包组

linked: 版本应该保持同步但不完全相同的包组（即版本都要更改，但不要求一样）
1.  changeset 发布
npx changeset（空格选择包）#添加发布说明

npx changeset version \#发布迭代
1.  预发布模式
    1.  npx changeset pre enter beta \# 创建 pre.json，开始 beta 预发布
    2.  npx changeset \#添加发布说明
    3.  changeset version \#预发布迭代
    4.  npx changeset pre exit \#退出预发布模式

其他
**在monorepo项目access最佳实践**
根目录始终设为 private: true

通过 package.json的publishConfig 为每个子包单独控制访问权限

在 Changesets 全局配置中设置默认 access（如 restricted）

