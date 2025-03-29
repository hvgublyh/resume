---
title: Van-list
updated: 2025-01-07T14:24:48
created: 2022-03-18T15:23:13
---

1.  不断发起请求问题
在请求数据的方法里,如果请求报错, 需要将finished更改为true
1.  不能触发下拉加载
需要设置父级或者祖先元素为**overflow: auto; height: calc(100vh - 1px)**, 并且该元素不能为fixed或者obsolute定位

注意: 滚动容器不能为**body或者html**

1.  结合搜索, 搜索关键词修改后不能重新查询
将搜索关键词发生变化后,将finished修改为false, 并延迟将finished设置为true

1.  如果多处使用到van-list, 需要给每个van-list添加不同的key，不然会有滚动不触发load事件的情况。

