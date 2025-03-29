---
title: flex
updated: 2022-01-27T09:33:53
created: 2019-11-27T10:53:02
---

**flex属性:**
设在容器上的属性

flex-direction: row row-reverse column column-reverse

flex-wrap: wrap nowrap

flex-flow: 属性一(flex-direction) 属性二(flex-wrap)

设在item上的属性

flex-grow: number(注释: 数值越大,放大比例越大,0到1表示占容器的最大比例)

flex-shrink: number(注释: 数值越大,缩小比例越大)

flex-basis: number/auto(注释: 设置item的缩放的基础大小)

flex: 属性一(flex-grow)属性二(flex-shrink)属性三(flex-basis)
注意:
justify-content不生效 : 子元素设置了margin : auto
子元素width不生效 : 使用 flex: 0 0 50px 设置子级长度,
