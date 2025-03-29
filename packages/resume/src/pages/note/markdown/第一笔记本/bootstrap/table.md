---
title: table
updated: 2020-05-29T11:46:59
created: 2020-05-29T11:40:12
---

1.  生成数据表格
\$('#FamilyInformationFormTable').bootstrapTable({

dataType:"json",

url:url,

pagination:false,

pageList:\[10,15,20,50,100\],

striped:true,

pageSize:20,

queryParamsType:'',

queryParams: queryParams,

clickToSelect:true,

columns: defaultColunms,

height:150,

sidePagination:"server",

onPageChange: function1

});
1.  columns 示例
\[

{title: '资料名称', field: 'datename', align: 'center',halign:'center',width:"40%",formatter: function (value) {},

editable: {

type: 'text',

emptytext: '资料名称',

title: '资料名称',

mode: "inline",

disabled: false,

onblur: "submit",

showbuttons: false,

}},

\]
