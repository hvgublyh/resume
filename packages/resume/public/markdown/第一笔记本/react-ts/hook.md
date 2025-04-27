---
title: hook
updated: 2025-03-05T20:34:16
created: 2022-10-26T09:21:09
---

hook
2022年10月26日
9:21

1.  useState
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)

1.  useEffect
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

1.  useContext

- page1Context.tsx

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image3.png)

- Page1(父组件)
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image4.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image5.png)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image6.png)

- Page1A(子组件)

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image7.png)

1.  useMemo
仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image8.png)

注意：memoized的值有可能被清理并在下次渲染时重新计算

1.  useRef
常见的用例便是命令式地访问子组件

![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image9.png)

1.  useReducer
useState 的替代方案
