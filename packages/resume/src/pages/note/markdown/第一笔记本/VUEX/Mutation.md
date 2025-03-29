---
title: Mutation
updated: 2021-05-04T19:26:36
created: 2019-11-04T10:42:43
---

mutation: 是更改store状态的唯一方法,接受state作为第一个参数,第二个形参可以传值

使用方式:

1.直接使用

\<button@click="\$store.commit('addCounter',10)"\>+\</button\>

\<button@click="\$store.commit('reduceCounter')"\>-\</button\>

2.通过mapGetters映射

\<button@click="addCounter(10)"\>+\</button\>

\<button@click='reduceCounter'\>-\</button\>

import{mapState,mapGetters,mapMutations,mapActions}from"vuex";

methods:{

...mapMutations(\['addCounter','reduceCounter'\])

}

