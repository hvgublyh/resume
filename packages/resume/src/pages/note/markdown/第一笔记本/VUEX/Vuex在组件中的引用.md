---
title: Vuex在组件中的引用
updated: 2019-11-04T11:10:35
created: 2019-11-04T10:18:09
---

1.直接引用
\<!--\<h3\>{{this.\$store.state.counter}}\</h3\>--\>

2.通过computed的计算属性引用
\<!--\<h3\>{{count}}\</h3\>--\>

//computed:{

//count(){

//returnthis.\$store.state.counter;

//}

//}
3.通过**mapState**的对象来赋值
\<h3\>{{name}}\</h3\>

\<h3\>{{age}}\</h3\>

computed:{

...mapState({

name:state=\>state.name,

age:state=\>state.age

})

},

或者:

computed:mapState({

name:state=\>state.name,

age:state=\>state.age

}),
