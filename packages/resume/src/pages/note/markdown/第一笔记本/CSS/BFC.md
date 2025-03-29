---
title: BFC
updated: 2025-03-03T10:22:55
created: 2021-07-16T22:21:14
---

1.  什么是BFC?
即块级格式化上下文,是页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域。
1.  BFC有什么特征？
    - 内部的元素会在垂直方向，从顶部开始一个接一个地放置。
    - 属于同一个BFC的两个相邻 元素的margin会发生叠加
    - 每个元素的margin box的边缘，不会超出包含块border box的边缘(对于absolute,fixed等定位元素例外)。
    - BFC的区域不会与float box叠加。
    - BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
    - 计算BFC的高度时，浮动元素也参与计算（当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动元素的高度，这点可以用来清除浮动）
1.  BFC如何触发？
    - float不为none；
    - position不为static；
    - display:inline-block；table-cell；table-caption；flex；inline-flex；
    - overflow 计算值(Computed)不为 visible 的块元素
    - 弹性元素; 网格元素
    - 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
2.  BFC应用
    - 清除浮动
    - 防止margin穿透
    - 两栏自适应

