---
title: Generator
updated: 2021-04-02T09:40:28
created: 2020-01-09T15:42:58
---

1.  **什么是generator?**
Generator是一种异步编程解决方案,从语法上,可以理解为一个状态机,封装了很多的对象;执行完Generator函数之后返回一个遍历器对象,也就是说,Generator除了是一个状态机还是一个迭代器生成器.
1.  **Generator 的语法**
function\* helloWorldGenerator() { //function后有一个\*号修饰

yield 'hello'; //'hello'是一个状态,每次执行hw.next()定位到这里

yield 'world';

return 'ending';

}

var hw = helloWorldGenerator();

hw.next()

// { value: 'hello', done: false }

hw.next()

// { value: 'world', done: false }

hw.next()

// { value: 'ending', done: true }

hw.next()

// { value: undefined, done: true }
1.  **for…of**
function\* foo() {

yield 1;

yield 2;

yield 3;

yield 4;

yield 5;

return 6;

}

for (let v of foo()) {

console.log(v);

}

// 1 2 3 4 5

