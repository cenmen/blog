# Questions

## HTML

::: details script 标签的加载问题
![script的defer&async](../../assets/images/script.png)
浏览器解析 HTML 文档遇到外联脚本或样式时会先暂停文档的解析, 等待资源下载完成并执行后再继续文档的解析。

- defer: 解析遇到脚本则开启新的线程下载脚本文件, 并在文档解析完成后执行。脚本按照先后顺序执行, 且在 DOMContentLoaded 事件前执行, 但现实不一定。
- async: 解析遇到脚本则开启新的线程下载脚本文件, 下载完成后立即执行, 不保证按照先后顺序执行。

:::

::: details BFC
:::

::: details 语义化标签
`<header>`：表示页面或区域的页眉。通常包括标题、标志和导航。

`<nav>`：定义导航菜单。用于包装网站上的导航链接。

`<main>`：包含文档的主要内容。最好在页面上只有一个 `<main>` 元素。

`<article>`：表示可独立分发和重用的自包含内容，如博客文章或新闻文章。

`<section>`：表示主题相关的内容组。有助于将页面的内容组织成不同的部分。

`<aside>`：表示与周围内容有切实关系的内容。通常用于侧边栏或引文。

`<figure>` 和 `<figcaption>`：用于嵌入图像、图表或视频，可选择包含标题。用于为媒体内容提供上下文。

`<footer>`：表示页面或区域的页脚。通常包括版权信息、相关页面的链接或联系方式。

`<time>`：表示特定的时间段。有助于搜索引擎理解页面上的日期和时间信息。

`<address>`：表示最近的 `<article>` 或 `<body>` 祖先的联系信息。

`<mark>`：用于突出显示文本的某些部分。有助于标识重要的关键词或短语。

`<strong>` 和 `<em>`：用于文本格式化。`<strong>` 表示强调重要性，而 `<em>` 表示强调文本。

`<abbr>`：表示缩写或首字母缩写。有助于搜索引擎理解缩写的含义。

`<cite>`：表示创意作品的标题，如书名或电影名。用于引用引文。

`<blockquote>`：表示引自另一来源的引用段落。
:::

## JavaScript

::: details this
在 JavaScript 中，this 是一个特殊的关键字，用于引用当前执行上下文中的对象。this 的值在运行时动态确定，取决于函数是如何被调用的。

1. **全局上下文中的 this：** 在全局执行上下文中，this 指向全局对象，在浏览器中通常是 window 对象。

```js
console.log(this); // 在浏览器中输出：Window 对象
```

2. **函数中的 this：** 在函数中，this 的值取决于函数是如何被调用的。以下是几种常见情况：  
- 当函数作为独立函数调用时，this 指向全局对象。

```js
function exampleFunction() {
  console.log(this); // 在浏览器中输出：Window 对象
}

exampleFunction();
```
- 当函数作为对象的方法调用时，this 指向调用该方法的对象。

```js
var myObject = {
    name: "John",
    sayHello: function() {
        console.log(this.name); // 输出：John
    }
};

myObject.sayHello();
```

- 构造函数中的 this 当函数被用作构造函数（通过 new 关键字调用）时，this 指向新创建的对象。
```js
function Person(name) {
    this.name = name;
}

var john = new Person("John");
console.log(john.name); // 输出：John
```

- 使用 call 或 apply 明确指定 this：通过使用 call 或 apply 方法，可以明确指定函数执行时的 this 值。
```js
function greet() {
    console.log("Hello, " + this.name);
}

var person = { name: "John" };
greet.call(person); // 输出：Hello, John
```

3. **箭头函数中的 this：** 箭头函数不具有自己的 this，它会继承父级作用域中的 this。
```js
var obj = {
    func: function() {
        setTimeout(() => {
            console.log(this); // this 指向 obj 对象
        }, 1000);
    }
};

obj.func();
```

:::

::: details 作用域

1. 全局作用域（Global Scope）：在全局作用域中声明的变量可以在整个程序中访问，其生命周期贯穿整个程序执行过程。
2. 局部作用域（Local Scope）：在函数内部声明的变量具有局部作用域，它们只能在该函数内部访问，超出该函数范围则无法访问。每当函数被调用时，都会创建一个新的局部作用域。
3. 块级作用域（Block Scope）：在 ES6 之后引入了 let 和 const 关键字，它们允许在任意代码块（例如，if 语句、for 循环等）内创建块级作用域。块级作用域内声明的变量只在该块内部有效。

:::

::: details 原型与原型链

1. 原型（Prototype）：
   每个对象（除了一些基础对象，如 Object）都有一个原型。
   原型是一个对象，包含属性和方法，可以被其他对象继承。
   对象通过原型链查找属性和方法，如果在当前对象上找不到，就会继续在原型链上查找。
2. 原型链（Prototype Chain）：
   当访问对象的属性或方法时，JavaScript 引擎会先在对象本身查找，然后顺着原型链向上查找，直到找到匹配的属性或方法。
   原型链的最顶端是 Object.prototype，它是所有对象的原型。
   原型链的末端是 null。
3. 构造函数与原型链：
   构造函数是用来创建对象的函数，通过 new 关键字调用。
   构造函数可以有一个原型，通过原型链，由这个原型继承属性和方法。

   ```js
   // 定义构造函数
   function Person(name) {
     this.name = name;
   }
   // 在构造函数的原型上添加方法
   Person.prototype.sayHello = function () {
     console.log('Hello, ' + this.name);
   };

   // 创建对象
   var john = new Person('John');

   // 调用方法
   john.sayHello(); // 输出：Hello, John
   ```

4. Object.create() 方法：
   Object.create() 方法可以创建一个新对象，使用指定的原型对象和属性。
   这种方式也可以用于手动设置对象的原型链。

:::

::: details 设计模式
:::

::: details 内存泄露
:::

::: details call、apply、bind
:::

::: details 闭包
在JavaScript中，闭包是指函数和其词法环境的组合，其中函数可以访问其创建时所处的词法作用域中的变量。简而言之，闭包允许函数访问其外部作用域的变量，即使在函数被调用后，依然保留了对这些变量的引用。
```js
function outerFunction() {
    var outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var closureFunction = outerFunction();
closureFunction(); // 输出：I am from outer function
```

:::

::: details 【ES6】 - Promise
:::

::: details 【ES6】 - Class
:::

::: details 【ES6】 - Async
:::

::: details 【ES6】 - Gennerator
:::

::: details 【ES6】 - Arrow Function
:::

## Frame

### React

::: details When to use a Class Component over a Function Component?

1. 当需要使用例如错误边界的组件功能时，class 有 componentDidCatch 钩子函数。（函数组件也可以使用第三方库，例如 react-error-boundary）。
2. 当使用旧版本的 React 时。

:::

```

```
