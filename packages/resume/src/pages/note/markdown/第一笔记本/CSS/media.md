---
title: media
updated: 2019-12-10T10:31:50
created: 2019-12-10T10:19:25
---

**什么是media?**
media是CSS中通过访问设备的信息,来应用不同的样式的属性

**CSS2:**
页面宽度小于960的执行指定的样式文件：

\<link rel="stylesheet" type="text/css" media="screen and (max-width:960px)" href="style.css"\>

**CSS3:**
\<link rel="stylesheet" href="styleA.css" media="screen"\>

\<link rel="stylesheet" href="styleB.css" media="screen and (max-width: 800px)"\>

\<link rel="stylesheet" href="styleC.css" media="screen and (max-width: 600px)"\>

样式表应用的过程,是自上而下匹配的,先匹配样式表A,然后如果以下满足,则A被覆盖

或者在style标签和CSS文件中:

@media screen and (min-width:960px) and (max-width:1200px){

body{background:yellow;}

}

**media参数汇总:**
width:浏览器可视宽度。
height:浏览器可视高度。
device-width:设备屏幕的宽度。
device-height:设备屏幕的高度。
orientation:检测设备目前处于横向还是纵向状态。
aspect-ratio:检测浏览器可视宽度和高度的比例。(例如：aspect-ratio:16/9)
device-aspect-ratio:检测设备的宽度和高度的比例。
color:检测颜色的位数。（例如：min-color:32就会检测设备是否拥有32位颜色）
color-index:检查设备颜色索引表中的颜色，他的值不能是负数。
monochrome:检测单色楨缓冲区域中的每个像素的位数。（这个太高级，估计咱很少会用的到）
resolution:检测屏幕或打印机的分辨率。(例如：min-resolution:300dpi或min-resolution:118dpcm)。
grid:检测输出的设备是网格的还是位图设备。

媒体类型:
1.all 所有媒体
2.braille 盲文触觉设备
3.embossed 盲文打印机
4.print 手持设备
5.projection 打印预览
6.screen 彩屏设备
7.speech '听觉'类似的媒体类型
8.tty 不适用像素的设备
9.tv 电视

关键字:
1.and
2.not 用来排除某种制定的媒体类型
3.only 用来定某种特定的媒体类型
-很多时候是用来对那些不支持媒体特性但却支持媒体类型的设备

浏览器支持情况:
IE8-
IE9+
Chrome 5+
Opera 10+
Firefox 3.6+\<
Safari 4+

常用设定:
<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
<p>9</p>
<p>10</p>
<p>11</p>
<p>12</p>
<p>13</p>
<p>14</p>
<p>15</p></td>
<td><p>@media screen and (min-width: 1200px) {</p>
<p>css-code;</p>
<p>}</p>
<p>@media screen and(min-width: 960px) and (max-width: 1199px) {</p>
<p>css-code;</p>
<p>}</p>
<p>@media screen and(min-width: 768px) and (max-width: 959px) {</p>
<p>css-code;</p>
<p>}</p>
<p>@media screen and(min-width: 480px) and (max-width: 767px) {</p>
<p>css-code;</p>
<p>}</p>
<p>@media screen and (max-width: 479px) {</p>
<p>css-code;</p>
<p>}</p></td>
</tr>
</tbody>
</table>

