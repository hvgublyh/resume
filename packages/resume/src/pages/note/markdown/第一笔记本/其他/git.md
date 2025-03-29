---
title: git
updated: 2022-01-21T12:22:22
created: 2020-05-29T08:55:11
---

git
2020年5月29日
8:55

- 撤销提交
\$ git revert HEAD

撤销多次提交

\$ git revert \[倒数第一个提交\] \[倒数第二个提交\]

或者 \$ git revert ^ N(N表示撤销次数)

- 回滚版本
获取版本号

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.jpeg)

或者

\$ git reflog

回退上一个版本

git reset --hard HEAD^

回退选中版本

git reset --hard commit_id

回退版本之后git记录中会删除提交记录

或者

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.jpeg)

git push -f

- 撤销修改
git checkout -- file

回退所有的本地修改, 如果已提交commit, 应先取消commit

- 还原某次提交
git revert -n 97ea0f9

git commit -m "恢复第三次修改"

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

实际上是对第三次修改提交一次反向修改

- 如何合并分支到主分支
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)

- 如何更新分支为主分支
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)

注意: rebase只有自己使用的分支上才能使用, 不然会导致出错

- Github 创建新项目
  - github创建项目
  - 本地新建文件夹并拉取项目 git clone git@github.com:yourgithubID/gitRepo.git
  - 将本地文件复制到新文件夹中, 并提交
- 连接多个git
  - 统一密钥
  - 删除全局配置
git config --global --unset 'user.name'

git config --global --unset 'user.email'
- 设置local设置
在repo仓库下打开控制台配置name与邮箱

git config user.name \`xxx\`

git config user.email \`xxx@xxx.com\`

