---
title: hightEcharts
updated: 2022-02-23T16:13:22
created: 2022-02-23T16:11:31
---

1.  安装依赖
cnpm install highcharts --save

1.  引入依赖
import HighCharts from 'highcharts'

// 当需要使用3D图形时必选

import highcharts3d from 'highcharts/highcharts-3d'

highcharts3d(HighCharts);

1.  绘制图形
HighCharts.chart(this.tempId, this.options)

注意: 如果没有引入3D依赖, 将没有3D效果
