---
title: Vuex的配置
updated: 2019-12-09T17:21:11
created: 2019-11-04T10:14:26
---

1.安装vuex:控制台 npm install vuex --save
2.导入vuex:
1.创建store.js

importVuefrom'vue'

importVuexfrom'vuex'

Vue.use(Vuex)

conststore=newVuex.Store({

state:{

name:'奥利弗',

age:'18',

counter:1

},

mutations:{

showPeople(state,msg){

state.name=msg

},

addCounter(state,add){

state.counter+=add

}

}

})

exportdefaultstore

2.main.js 导入

importVuexfrom'vuex'

importstorefrom'./store/store'

Vue.use(Vuex)

newVue({

el:'#app',

router,

store,//导入仓库

components:{App},

template:'\<App/\>'

})

