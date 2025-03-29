---
title: select
updated: 2019-12-24T17:35:03
created: 2019-12-24T17:32:46
---

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 86%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p></td>
<td><p>&lt;div&gt;</p>
<p>&lt;select name=""&gt;</p>
<p>&lt;option value="芝士"&gt;芝士&lt;/option&gt;</p>
<p>&lt;option value="奶油"&gt;奶油&lt;/option&gt;</p>
<p>&lt;/select&gt;</p>
<p>&lt;/div&gt;</p></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 9%" />
<col style="width: 64%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 7%" />
</colgroup>
<tbody>
<tr class="odd">
<td></td>
<td><p>div{</p>
<p>//用div的样式代替select的样式</p>
<p>width: 200px;</p>
<p>height: 40px;</p>
<p>border-radius: 5px;</p>
<p>//盒子阴影修饰作用,自己随意</p>
<p>box-shadow: 0 0 5px #ccc;</p>
<p>position: relative;</p>
<p>}</p>
<p>select{</p>
<p>//清除select的边框样式</p>
<p>border: none;</p>
<p>//清除select聚焦时候的边框颜色</p>
<p>outline: none;</p>
<p>//将select的宽高等于div的宽高</p>
<p>width: 100%;</p>
<p>height: 40px;</p>
<p>line-height: 40px;</p>
<p>//隐藏select的下拉图标</p>
<p>appearance: none;</p>
<p>-webkit-appearance: none;</p>
<p>-moz-appearance: none;</p>
<p>//通过padding-left的值让文字居中</p>
<p>padding-left: 60px;</p>
<p>}</p>
<p>//使用伪类给select添加自己想用的图标</p>
<p>div:after{</p>
<p>content: "";</p>
<p>width: 14px;</p>
<p>height: 8px;</p>
<p>background: url(img/xiala.png) no-repeat center;</p>
<p>//通过定位将图标放在合适的位置</p>
<p>position: absolute;</p>
<p>right: 20px;</p>
<p>top: 45%;</p>
<p>//给自定义的图标实现点击下来功能</p>
<p>pointer-events: none;</p>
<p>}</p></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
