---
title: uni-app生命周期
updated: 2021-08-03T16:14:53
created: 2021-07-17T21:21:55
---

1.  应用生命周期(仅app.vue)
    - onLoad 监听页面加载，其参数为上个页面传递的数据，参数类型为object（用于页面传参），参考示例
    - onShow 监听页面显示
    - onReady 监听页面初次渲染完成
    - onHide 监听页面隐藏
    - onUnload 监听页面卸载
    - onPullDownRefresh 监听用户下拉动作
    - onReachBottom 页面上拉触底事件的处理函数
    - onShareAppMessage 用户点击右上角分享 微信小程序
    - onPageScroll 监听页面滚动
    - onTabItemTap 当前是 tab 页时，点击 tab 时触发。
2.  组件生命周期
同vue
1.  页面生命周期
    - onInit
    - onLoad
    - onShow
    - onReady
    - onHide
    - onUnload
    - onResize
    - onPullDownRefresh
    - onReachBottom
    - onPageScroll
1.  使用
    - 访问不存在页面,跳转到404页面
      1.  Pages.json配置页面
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image1.png)
1.  App.vue添加跳转方法
![](C:\Users\hvgub\AppData\Local\Temp\第一笔记本\pandoc/media/image2.png)

