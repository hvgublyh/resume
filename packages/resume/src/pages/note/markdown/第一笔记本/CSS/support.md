---
title: support
updated: 2019-12-10T10:35:44
created: 2019-12-10T10:33:52
---

基本使用:
<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 79%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>1</p>
<p>2</p>
<p>3</p></td>
<td><p>@supports (display: flex) {</p>
<p>div { display: flex; }</p>
<p>}</p></td>
</tr>
</tbody>
</table>
关键字 : not
/\* and \*/

@supports (display: flex) and (-webkit-appearance: caret) {

/\* something crazy here \*/

}
关键字 : or
/\* or \*/

@supports (display: -webkit-flex) or

(display: -moz-flex) or

(display: flex) {

/\* use styles here \*/

}

