---
title: Getter
updated: 2021-05-04T19:26:18
created: 2019-11-04T10:24:01
---

意义:store的计算属性,getters里的方法并没有改变state

引用方法:

1.直接引用

\<h3\>{{\$store.getters.add}}\</h3\>

2-3.通过computed的计算属性

import{mapGetters}from"vuex";

computed:{

...mapGetters(\["add"\]),//方法2

counted(){//方法3

returnthis.\$store.getters.add;

}

},
