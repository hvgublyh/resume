---
title: promise
updated: 2020-01-09T11:40:54
created: 2019-12-10T16:22:27
---

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 85%" />
</colgroup>
<tbody>
<tr class="odd">
<td></td>
<td><p></p>
<p><strong>异步处理之.Promise</strong></p>
<p>doSomething()</p>
<p>.then(doSomethingElse(value))</p>
<p>.then(doThirdThing(newResult))</p>
<p>.then(finalResult =&gt; console.log(`Got the final result: ${finalResult}`))</p>
<p>.catch(failureCallback);</p>
<p>注释:</p>
<p>doSomething,doSomething()等异步函数通过返回一个Promise对象,从而附加回调函数来使用.</p>
<p></p>
<p>Promise传入一个函数作为回调函数,回调函数具有两个形参(resolve,reject);Promise对象调用.then或者.catch方法</p>
<p>then() 或者catch()函数会返回一个全新的 Promise对象.</p>
<p></p>
<p>new Promise((resolve, reject) =&gt; {</p>
<p>console.log('初始化');</p>
<p>resolve(11);</p>
<p>})</p>
<p>.then((result) =&gt; {</p>
<p>console.log(result);</p>
<blockquote>
<p>new Promise((resolve,reject) =&gt; {reject(12)})</p>
</blockquote>
<p>})</p>
<p>.catch((result) =&gt; {</p>
<p>console.log(result);</p>
<p>})</p>
<p>.then(() =&gt; {</p>
<p>console.log('执行「这个」，无论前面发生了什么');</p>
<p>});</p>
<p></p>
<p>((result) =&gt; {return new Promise((resolve,reject) =&gt; {console.log(result),resolve(result+1)})})(result)</p>
<p>.then((newResult =&gt; {new Promise((resolve,reject) =&gt; {console.log(newResult),resolve(newResult+1)})}))</p>
<p></p>
<p></p></td>
</tr>
</tbody>
</table>
**异步处理之async,await**

const delay = ms =\> new Promise(resolve =\> setTimeout(resolve, ms));

或者

function timeout(ms) {

return new Promise((resolve) =\> {

setTimeout(resolve, ms);

});

}

async function asyncPrint(value, ms) {

await timeout(ms);

console.log(value);

}

asyncPrint('hello world', 50);

**通过函数只调用实现异步的处理 :**

function f1(ms,t) {

let times = t -1;

console.log(times);

if(times\>0){

setTimeout(() =\> {

f1(ms,times)

},ms)

}else {

return 0;

}

}

