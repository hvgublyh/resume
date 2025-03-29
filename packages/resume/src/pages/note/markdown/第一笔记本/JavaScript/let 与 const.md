---
title: let 与 const
updated: 2021-04-02T09:44:26
created: 2019-12-20T10:50:52
---

LET:
let 可以有块作用域,在块作用域内声明的变量外部不能访问
<table>
<colgroup>
<col style="width: 35%" />
<col style="width: 64%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p></td>
<td><p>{</p>
<p>let x = 10;</p>
<p>}</p></td>
</tr>
</tbody>
</table>
// 此处不可以使用 x

let在块内声明的变量,不会对块外的变量造成影响
<table>
<colgroup>
<col style="width: 31%" />
<col style="width: 68%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p></td>
<td><p>var x = 10;</p>
<p>// 此处 x 为 10</p>
<p>{</p>
<p>let x = 6;</p>
<p>// 此处 x 为 6</p>
<p>}</p>
<p>// 此处 x 为 10</p></td>
</tr>
</tbody>
</table>
在相同的作用域, var 允许重复定义,;let 不允许重新定义变量,let定义的变量也不允许重新定义
<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 70%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p></td>
<td><p>var x = 10;</p>
<p>// 现在，x 为 10</p>
<p>var x = 6;</p>
<p>// 现在，x 为 6</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 76%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p></td>
<td><p>var x = 10; // 允许</p>
<p>let x = 6; // 不允许</p>
<p>{</p>
<p>var x = 10; // 允许</p>
<p>let x = 6; // 不允许</p>
<p>}</p>
<p></p>
<p></p></td>
</tr>
</tbody>
</table>
<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 76%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p></td>
<td><p>let x = 10; // 允许</p>
<p>let x = 6; // 不允许</p>
<p></p>
<p>{</p>
<p>let x = 10; // 允许</p>
<p>let x = 6; // 不允许</p>
<p>}</p></td>
</tr>
</tbody>
</table>

CONST:
在块作用域内使用,作用限制于块内部
必须在声明时赋值,const 不允许重新赋值
const定义的是对值的常量引用,可以改变对象的属性,可以添加删除属性,但不允许对对象重新赋值;数组同理
<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 55%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 8%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p>
<p></p></td>
<td><p>const PI = 3.141592653589793;</p>
<p>PI = 3.14; // 会出错</p>
<p>PI = PI + 10; // 也会出错</p></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
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
<p>4</p></td>
<td><p>// 您可以创建 const 对象：</p>
<p>const car = {type:"porsche", model:"911", color:"Black"};</p>
<p>// 您可以更改属性：</p>
<p>car.color = "White";</p></td>
</tr>
</tbody>
</table>
const,let与var 定义的对象不同,不能被提升到顶端,即const定义的变量,引用必须在声明之后;
const与let定义的遍历不会添加到全局,即this.var为undefined.

