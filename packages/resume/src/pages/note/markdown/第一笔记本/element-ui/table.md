---
title: table
updated: 2021-03-21T15:23:21
created: 2019-11-22T14:32:47
---

**方法渲染 :**
**HTML :**

\<table id="demo" lay-filter="test"\>\</table\>

JS :

table.render({

elem: '#demo'

,cols: \[\[ //标题栏

{checkbox: true}

,{field: 'id', title: 'ID', width: 80}

,{field: 'username', title: '用户名', width: 120}

\]\]

,url: ''//后台接口

**//请求设置**

,request: {

pageName: 'curr' //页码的参数名称，默认：page

,limitName: 'nums' //每页数据量的参数名，默认：limit

},

**//响应设置**

,response: {

statusName: 'status' //规定数据状态的字段名称，默认：code

,statusCode: 200 //规定成功的状态码，默认：0

,msgName: 'hint' //规定状态信息的字段名称，默认：msg

,countName: 'total' //规定数据总数的字段名称，默认：count

,dataName: 'rows' //规定数据列表的字段名称，默认：data

}

//,…… //其他参数

});

**templet -自定义列模板**

原因 : 对某列的单元格添加链接等其他元素

函数转义 :

table.render({

cols: \[\[

{field:'title', title: '文章标题', width: 200

**,templet: function(d){**

**return 'ID：'+ d.id +'，标题：\<span style="color: \#c00;"\>'+ d.title +'\</span\>'**

**}**

}

,{field:'id', title:'ID', width:100}

\]\]

});
