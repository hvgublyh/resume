这里有一些 **JavaScript 面试题及回答**，涵盖基础知识、异步处理、原型链、性能优化等方面：

### **📌 JavaScript 基础**
1. **JavaScript 的数据类型有哪些？**  
   - **基本数据类型**：`string`、`number`、`boolean`、`null`、`undefined`、`bigint`、`symbol`。  
   - **引用类型**：`object`（包括 `Array`、`Function`、`Date`、`RegExp` 等）。

2. **`var`、`let` 和 `const` 的区别是什么？**  
   - `var`：**函数作用域**，允许变量提升（`hoisting`）。  
   - `let`：**块级作用域**，不允许重复声明。  
   - `const`：**块级作用域**，定义常量，必须初始化，不能修改。

3. **什么是闭包（Closure）？**  
   - **闭包是一个函数**，它可以访问 **外部函数的变量**，即使外部函数已经执行完毕：
   ```js
   function outer() {
     let count = 0;
     return function inner() {
       count++;
       return count;
     };
   }
   const increment = outer();
   console.log(increment()); // 1
   console.log(increment()); // 2
   ```

---

### **🚀 异步处理**
4. **JavaScript 的同步和异步有什么区别？**  
   - **同步**：代码按顺序执行，阻塞后续代码。  
   - **异步**：代码不会阻塞，常见方式包括 **`setTimeout`、`Promise`、`async/await`**。

5. **`Promise` 的三种状态是什么？**  
   - `pending`（进行中）  
   - `fulfilled`（成功）  
   - `rejected`（失败）

6. **如何使用 `async/await` 处理异步代码？**  
   ```js
   async function fetchData() {
     try {
       const response = await fetch("https://api.example.com/data");
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error("请求失败", error);
     }
   }
   ```

---

### **🔧 原型链与继承**
7. **JavaScript 的原型链是什么？**  
   - **每个对象都有一个 `__proto__` 指向其原型**，原型对象也有 `__proto__`，最终指向 `null`：
   ```js
   function Person(name) {
     this.name = name;
   }
   Person.prototype.sayHello = function () {
     console.log("Hello, " + this.name);
   };
   const user = new Person("Alice");
   user.sayHello(); // "Hello, Alice"
   ```

8. **如何实现 JavaScript 继承？**  
   - **原型继承**：
   ```js
   function Parent() {
     this.name = "Parent";
   }
   Parent.prototype.sayHello = function () {
     console.log("Hello from Parent");
   };

   function Child() {
     Parent.call(this); // 继承属性
   }
   Child.prototype = Object.create(Parent.prototype); // 继承方法
   Child.prototype.constructor = Child;
   ```

---

### **⚡ 性能优化**
9. **如何优化 JavaScript 代码性能？**  
   - **减少 DOM 操作**（使用 `documentFragment`）。  
   - **使用 `requestAnimationFrame` 代替 `setTimeout` 进行动画渲染。  
   - **使用 `useMemo` 和 `useCallback` 进行 React 组件优化。  
   - **避免 `forEach`，使用 `map` 或 `reduce` 进行数组处理。  

10. **什么是事件委托？**  
   - **事件委托** 允许将事件绑定到 **父元素**，而不是每个子元素：
   ```js
   document.getElementById("parent").addEventListener("click", function (event) {
     if (event.target.tagName === "BUTTON") {
       console.log("Button clicked!");
     }
   });
   ```

---

这些问题涵盖了 **JavaScript 面试的核心知识点**，如果你最近在优化 **monorepo 结构** 或 **React + TypeScript** 项目，我们可以一起看看如何提升代码质量 🚀  
你也可以参考 [这篇文章](https://bing.com/search?q=JS%e9%9d%a2%e8%af%95%e9%a2%98%e5%8f%8a%e5%9b%9e%e7%ad%94) 和 [CSDN 面试题](https://blog.csdn.net/fengyiyangdeli/article/details/143688965) 来获取更多详细的 JavaScript 面试题！🔧
