这里有一些 **TypeScript 面试题及回答**，涵盖基础知识、类型系统、泛型、模块化、性能优化等方面：

### **📌 TypeScript 基础**
1. **TypeScript 和 JavaScript 的区别是什么？**  
   - TypeScript 是 JavaScript 的 **超集**，增加了 **静态类型**、**接口**、**泛型** 等特性。
   - TypeScript 需要 **编译** 成 JavaScript 才能运行，而 JavaScript 直接在浏览器执行。

2. **TypeScript 的数据类型有哪些？**  
   - **基本类型**：`string`、`number`、`boolean`、`null`、`undefined`、`bigint`、`symbol`。
   - **对象类型**：`object`、`array`、`function`、`class`、`enum`、`tuple`。

3. **TypeScript 如何进行类型推断？**  
   - TypeScript **自动推断变量类型**，例如：
   ```ts
   let num = 42; // TypeScript 推断 num 为 number
   let str = "Hello"; // 推断 str 为 string
   ```
   - 如果需要 **显式声明类型**：
   ```ts
   let age: number = 25;
   ```

---

### **🚀 TypeScript 类型系统**
4. **TypeScript 中的 `any` 和 `unknown` 有什么区别？**  
   - `any`：**禁用类型检查**，可以赋值任何类型（不推荐）。
   - `unknown`：**需要类型检查**，不能直接赋值：
   ```ts
   let value: unknown = "Hello";
   let str: string = value; // ❌ 报错
   if (typeof value === "string") {
     let str: string = value; // ✅ 允许
   }
   ```

5. **TypeScript 如何定义接口？**  
   ```ts
   interface User {
     id: number;
     name: string;
     email?: string; // 可选属性
   }
   ```

6. **TypeScript 如何使用泛型？**  
   ```ts
   function identity<T>(value: T): T {
     return value;
   }
   console.log(identity<number>(42)); // 42
   console.log(identity<string>("Hello")); // "Hello"
   ```

---

### **🔧 TypeScript 模块化**
7. **TypeScript 如何使用 `import` 和 `export`？**  
   - **导出模块**：
   ```ts
   export function greet(name: string) {
     return `Hello, ${name}`;
   }
   ```
   - **导入模块**：
   ```ts
   import { greet } from "./utils";
   console.log(greet("Alice"));
   ```

8. **TypeScript 如何使用 `namespace`？**  
   ```ts
   namespace MathUtils {
     export function add(x: number, y: number) {
       return x + y;
     }
   }
   console.log(MathUtils.add(2, 3)); // 5
   ```

---

### **⚡ TypeScript 性能优化**
9. **如何优化 TypeScript 代码？**  
   - **使用 `strict` 模式**：
   ```json
   {
     "compilerOptions": {
       "strict": true
     }
   }
   ```
   - **避免 `any` 类型**，使用 `unknown` 或 `interface` 代替。
   - **使用 `readonly` 保护不可变数据**：
   ```ts
   interface User {
     readonly id: number;
     name: string;
   }
   ```

10. **TypeScript 如何处理异步代码？**  
   - 使用 `async/await`：
   ```ts
   async function fetchData() {
     const response = await fetch("https://api.example.com/data");
     const data = await response.json();
     console.log(data);
   }
   ```

---

这些问题涵盖了 **TypeScript 面试的核心知识点**，如果你最近在优化 **monorepo 结构** 或 **React + TypeScript** 项目，我们可以一起看看如何提升代码质量 🚀  
你也可以参考 [这篇文章](https://blog.csdn.net/weixin_44727080/article/details/123108565) 和 [详细面试题](https://blog.csdn.net/ocean2103/article/details/142679234) 来获取更多 TypeScript 面试题！🔧
