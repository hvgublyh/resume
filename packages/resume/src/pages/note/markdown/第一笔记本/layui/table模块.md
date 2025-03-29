---
title: table模块
updated: 2020-06-03T15:32:53
created: 2020-05-12T09:19:43
---

table模块
2020年5月12日
9:19

1.  更改checkbox选中
\$('tr\[data-index= i\]').find('input').prop('checked',true);

table.cache\["ArchivesTable"\]\[i\].LAY_CHECKED = false;
1.  更改table当前页
tableIns.reload({

where: {

}

,page: {

curr: 1 //重新从第 1 页开始

}

});
1.  修改table laypage 下拉框样式
    1.  使用layui的form表单的下拉框来代替
    2.  
<table>
<colgroup>
<col style="width: 41%" />
<col style="width: 58%" />
</colgroup>
<tbody>
<tr class="odd">
<td>JS</td>
<td><p></p>
<p>&lt;&lt;下拉框.js.txt&gt;&gt;</p>
<p></p></td>
</tr>
<tr class="even">
<td>CSS</td>
<td><p></p>
<p>&lt;&lt;下拉框.css.txt&gt;&gt;</p>
<p></p></td>
</tr>
</tbody>
</table>
3.  
4.  在table的完成回调中调用JS中的方法
