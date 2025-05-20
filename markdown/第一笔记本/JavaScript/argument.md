---
title: argument
updated: 2019-12-10T14:03:16
created: 2019-12-10T13:57:29
---

1.  什么是arguments?
    1.  arguments对象是所有（非箭头）函数中都可用的局部变量。可以使用arguments在函数体中引用函数参数，具体类似于arguments\[i\]引用第i+1个参数
    2.  arguments引用方式类似于数组,但是只有length和索引属性和Array类似,并不是真正的数组。可以通过以下的方式将arguments转换为数组。
        1.  var args = Array.prototype.slice.call(arguments);
        2.  var args = \[\].slice.call(arguments);
        3.  var args = Array.from(arguments);

