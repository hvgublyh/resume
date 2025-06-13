---
title: Action
updated: 2021-05-04T19:27:05
created: 2019-11-04T11:10:07
---

action : action 类似于 mutation ,不同在于 : Action**==提交的是 mutation，而不是直接变更状态==**。Action 可以包含**==任意异步操作==**。

Action 函数接受一个与 **store 实例具有相同方法和属性的 context 对象**，因此你可以调用context.commit提交一个 mutation，或者通过context.state和context.getters来获取 state 和 getters。
注册方法:
1.接受context作为参数

addAction(context){

//异步执行,首先打印,3秒后执行

setTimeout(()=\>{context.commit('addCounter',10)},3000)

console.log('先打印')

},

2.接受commit对象作为参数

reduceAction({commit}){//ES6语法,直接把commit对象传递过来

commit('reduceCounter')

}

使用方法:

1.直接调用

\<button@click='\$store.dispatch("reduceAction")'\>-\</button\>

2.通过绑定函数

\<button@click='addAction'\>+\</button\>

methods:{

...mapMutations(\['addCounter','reduceCounter'\]),

...mapActions(\['addAction'\])

}

