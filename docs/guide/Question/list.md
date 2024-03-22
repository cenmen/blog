# Questions

## HTML

::: details 行内元素和块级元素
- 行内元素：行内元素通常用于包裹文本中的一部分内容，它们不会导致换行，且只占据其包含的内容的宽度。常见的行内元素包括`<span>`、`<a>`、`<strong>`、`<em>`等。
- 块级元素：块级元素通常用于包裹页面上的结构化内容，它们会导致换行，并且会占据其父元素的整个宽度。常见的块级元素包括`<div>`、`<p>`、`<h1>`、`<ul>`、`<li>`等。
:::

::: details script 标签的加载问题
![script的defer&async](../../assets/images/script.png)
浏览器解析 HTML 文档遇到外联脚本或样式时会先暂停文档的解析, 等待资源下载完成并执行后再继续文档的解析。

- defer: 解析遇到脚本则开启新的线程下载脚本文件, 并在文档解析完成后执行。脚本按照先后顺序执行, 且在 DOMContentLoaded 事件前执行, 但现实不一定。
- async: 解析遇到脚本则开启新的线程下载脚本文件, 下载完成后立即执行, 不保证按照先后顺序执行。

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

::: details link 或 @import 引入的 css 有什么区别

在 HTML 中引入 CSS 文件有两种主要的方式：使用 `<link>` 元素和使用 `@import` 规则。它们之间有几个关键的区别：

1. 加载方式：
`<link>` 元素是 HTML 标签，用于在 HTML 文件中直接引入外部 CSS 文件。它会在页面加载时并行加载 CSS 文件。
`@import` 规则是 CSS 的一种规则，用于在 CSS 文件中引入外部 CSS 文件。它会在 CSS 文件被解析时加载外部 CSS 文件。
2. 加载时机：
`<link>` 元素会在页面加载时立即加载和解析外部 CSS 文件，不会阻塞页面的加载。
`@import` 规则会在解析到该规则时才开始加载和解析外部 CSS 文件，这会导致页面的渲染被阻塞。
3. 兼容性：
`<link>` 元素是 HTML 的标准元素，几乎所有的浏览器都支持。
`@import` 规则是 CSS 的一部分，较早期的浏览器可能不支持或支持不完全。
4. 作用范围：
`<link>` 元素可以在 HTML 文件的 `<head>` 或 `<body>` 中使用，用于全局或局部的 CSS 文件引入。
`@import` 规则会在解析到它时立即发出请求加载引入的 CSS 文件，并且会阻塞后续样式的加载和渲染，直到引入的 CSS 文件加载完成并且解析完毕。
:::

## CSS

::: details BFC

区块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

- 浮动元素（即 float 值不为 none 的元素）。
- 绝对定位元素（position 值为 absolute 或 fixed 的元素）。
- 行内块元素（display 值为 inline-block 的元素）。
- display 值为 flow-root 的元素。

利用格式化上下文可以解决问题：
- 包含内部浮动。
- 排除外部浮动。
- 阻止外边距重叠。

参考链接：
1. [区块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)

:::

::: details CSS 盒模型
CSS 盒子模型是一种用于布局和设计网页的模型，它将每个 HTML 元素视为一个矩形的盒子，这个盒子由内容、内边距、边框和外边距组成。盒子模型有两种模式：标准盒子模型和怪异盒子模型。

标准盒子模型：元素的内容宽度和高度仅包括内容区域。  
怪异盒子模型：元素的内容宽度和高度包括内容区域、内边距（padding）和边框（border）。

:::

::: details 类型选择器
CSS 选择器是用来选择页面上的元素，并为其应用样式的一种机制。它们可以根据元素的标签名、类名、ID 等不同的属性进行选择。

常见的 CSS 选择器类型包括：

1. 标签选择器（Tag Selector）：通过 HTML 元素的标签名进行选择，例如 div、p、a 等。

2. 类选择器（Class Selector）：通过 HTML 元素的 class 属性进行选择，以.开头，例如 .class-name。

3. ID 选择器（ID Selector）：通过 HTML 元素的 id 属性进行选择，以#开头，例如 #id-name。

4. 属性选择器（Attribute Selector）：通过 HTML 元素的属性进行选择，例如 [type="text"] 会选择所有 type 属性值为 text 的元素。

5. 伪类选择器（Pseudo-class Selector）：用于选择处于特定状态的元素，例如 :hover 用于选择鼠标悬停的元素、:first-child 用于选择第一个子元素等。

6. 伪元素选择器（Pseudo-element Selector）：用于选择元素的特定部分，例如 ::before 用于在元素之前插入内容、::after 用于在元素之后插入内容。

7. 组合选择器（Combination Selector）：将多个选择器组合在一起，以便选择满足多个条件的元素，例如 .class1.class2 可以选择同时具有 class1 和 class2 的元素。

优先级规则用于确定当多个选择器作用于同一个元素时，哪一个样式规则将被应用。通常，优先级的计算基于选择器的类型和数量，一般来说，优先级越高的规则越会被应用。

优先级可以用四个等级来表示：

1. 内联样式（Inline Styles）：直接在元素的 style 属性中指定的样式具有最高的优先级。

2. ID 选择器：ID 选择器具有比其他选择器更高的优先级，因为 ID 属性是唯一的。

3. 类选择器、属性选择器和伪类选择器：这些选择器具有比标签选择器更高的优先级，但比 ID 选择器低。

4. 标签选择器：标签选择器的优先级是最低的。
:::

::: details 伪类与伪元素
伪类（Pseudo-class）和伪元素（Pseudo-element）是 CSS 中用于选择元素特定状态或部分的选择器，它们的区别在于：

1. 伪类（Pseudo-class）：

用于选择处于特定状态的元素，例如鼠标悬停、被选中、访问过等。
伪类以冒号 : 开头，例如 :hover、:active、:visited。
伪类选择器一般用于选择已经存在于文档中的元素的特定状态。

2. 伪元素（Pseudo-element）：

用于选择元素的特定部分，例如元素的第一个字母、元素之前或之后插入的内容等。
伪元素以双冒号 :: 开头，例如 ::before、::after、::first-letter。
伪元素选择器用于在文档中生成或修改元素的内容，而不是选择已经存在的元素。

总的来说，伪类用于选择元素的状态，而伪元素用于选择元素的部分或生成内容。注意，尽管伪元素在语法上使用双冒号 :: 开头，但在 CSS2 中仍然允许使用单冒号 :，而在 CSS3 中规定了使用双冒号 ::，以区别于伪类。
:::

::: details 可以继承的样式

文本相关属性：
- font-family
- font-size
- font-weight
- line-height
- color
- text-align
- text-decoration
- white-space

其他属性：
- visibility
- cursor
:::

::: details display属性有哪些值？它们的作用是什么？
- none: 元素不显示，并从文档流中移除。
- block: 元素显示为块级元素。
- inline: 元素显示为内联元素。
- inline-block: 元素横向显示为内联元素，纵向显示为块级元素。
- flex: 元素变为弹性容器。
- grid: 元素变为网格容器。
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

::: details 内存管理
垃圾回收机制是一种自动管理内存的技术，用于检测和释放不再被程序使用的内存资源，以避免内存泄漏和提高内存利用率。在JavaScript中，垃圾回收机制通过标记和清除（mark and sweep）算法来实现。

垃圾回收机制的工作原理如下：

- 标记阶段：垃圾回收器会从根对象（如全局对象、当前执行的函数等）开始，递归遍历所有可访问的对象，并标记它们为“活动对象”。
- 清除阶段：在标记阶段完成后，垃圾回收器会遍历堆中的所有对象，清除未被标记的对象，即“非活动对象”，并释放它们所占用的内存空间。
这种算法保证了只有那些仍然被程序引用的对象会被保留，而不再被引用的对象会被及时清除，从而释放内存空间。

除了标记和清除算法，JavaScript引擎还会应用一些优化技术，如分代回收（generational collection）、增量回收（incremental collection）和空闲时间回收（idle-time collection），以提高垃圾回收的效率和性能。

编写JavaScript代码时，存在一些常见的坏习惯容易导致内存泄漏问题。以下是一些常见的坏习惯：

- 意外的全局变量：如果在没有使用var、let或const声明的情况下直接赋值，变量就会成为全局变量，这可能导致内存泄漏。
- 未清理的定时器和事件监听器：忘记清除不再需要的定时器和事件监听器会导致内存泄漏。
- 循环引用：对象之间相互引用，但却没有及时释放这些引用，会导致内存泄漏。
- 未释放的内存：未释放不再需要的对象和变量，或者频繁创建大量临时对象而不及时释放，会导致内存泄漏。
- DOM泄漏：在DOM中保留对不再需要的元素的引用，或者未正确地清理DOM事件监听器，会导致内存泄漏。
- 闭包：未正确使用闭包可能导致内存泄漏，因为闭包会保留对外部作用域的引用。
- 大量数据的存储：存储大量数据在内存中而不及时清理，会导致内存泄漏。

:::

::: details call、apply、bind
call、apply 和 bind 是 JavaScript 中用于处理函数调用和函数上下文（即 this 的值）的三个方法。它们之间有一些关键的区别：

call:

call 方法使用一个指定的 this 值和一系列参数来调用一个函数。
它是 apply 方法的缩写形式，参数列表是直接传递给 call 的，而不是作为一个数组。
示例代码：

```js
function greet() {
  console.log('Hello ' + this.name);
}
var person = { name: 'Kimi' };
greet.call(person); // 输出: Hello Kimi
```

apply:
apply 方法也是用来调用一个函数，同时可以指定函数调用时的 this 值和参数。
与 call 不同的是，apply 方法接受一个参数数组，而不是直接的参数列表。
示例代码：

```js
function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation);
}
var person = { name: 'Kimi' };
greet.apply(person, ['Hello', '!']); // 输出: Hello Kimi!
```

bind:

bind 方法创建一个新的函数，当被调用时，它的 this 值被设置为 bind 方法的第一个参数，而其余参数将作为新函数的首批参数。
bind 不会立即执行函数，而是返回一个新的函数，这个新函数可以稍后执行。
示例代码：

```js
function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation);
}
var person = { name: 'Kimi' };
var boundGreet = greet.bind(person, 'Hello', '!');
boundGreet(); // 输出: Hello Kimi!
```

总结来说，call 和 apply 都是用来立即调用函数的，区别在于传递参数的方式不同。而 bind 是用来创建一个新的函数，这个新函数可以保留 this 值和预设的参数，但它不会立即执行，而是可以保存起来，以后再执行。
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

::: details 事件冒泡和事件捕获
事件冒泡（Event Bubbling）和事件捕获（Event Capturing）是 JavaScript 中处理事件传播的两种模式。它们定义了事件是如何从页面中的具体元素传播到更广泛的 DOM 树中的。

1.  **事件冒泡**:
    
-   事件冒泡是默认的事件传播方式。
-   当事件发生在一个元素上时，它首先被该元素本身处理，然后依次向上冒泡到父元素，直到根节点（`document`对象）。
-   事件冒泡允许父元素监听并处理子元素上的事件，这在很多情况下非常有用，例如当有多个子元素共享相同的事件处理器时。
-   通过 `event.stopPropagation()` 方法可以阻止事件继续冒泡。

2.  **事件捕获**:
    
-   事件捕获是事件处理的另一种方式，它与冒泡相反。
-   在事件捕获中，事件首先被根节点（`document`对象）处理，然后依次向下传递到目标元素。
-   这意味着父元素会先于子元素接收到事件，这可以用来实现一些需要在事件到达目标元素之前进行处理的场景，如键盘事件的全局拦截。
-   通过 `event.preventDefault()` 方法可以阻止事件的默认行为，但不能阻止事件继续沿着捕获阶段向下传递。

在实际应用中，事件冒泡和事件捕获通常结合使用，以提供灵活的事件处理策略。例如，你可以在父元素上设置一个事件监听器来处理所有子元素的点击事件，同时在子元素上也设置监听器来处理特定的点击事件。当子元素被点击时，事件首先在子元素上被捕获并处理，然后冒泡到父元素。如果需要阻止冒泡，可以在子元素的事件处理函数中调用 `event.stopPropagation()`。

为了在代码中指定事件的传播模式，可以在添加事件监听器时使用 `addEventListener` 方法，并传入第三个参数 `useCapture`。当 `useCapture` 为 `true` 时，事件监听器将在捕获阶段被调用；当 `useCapture` 为 `false` 时（默认值），事件监听器将在冒泡阶段被调用。

```js
// 在冒泡阶段监听事件
element.addEventListener('click', function(event) {
  console.log('Bubble phase');
}, false);

// 在捕获阶段监听事件
element.addEventListener('click', function(event) {
  console.log('Capture phase');
}, true);
```
:::

::: details 模块化
JavaScript 的模块化是将代码组织成独立的模块，每个模块都有自己的功能和接口，可以被其他模块导入和使用。模块化有助于提高代码的可读性、可维护性和可重用性。在 JavaScript 中，模块化可以通过几种不同的方式实现，包括：

1. **CommonJS**:
   - 这是 Node.js 中使用的模块系统。
   - 模块通过 `require()` 函数导入，通过 `module.exports` 或 `exports` 对象导出。
   - 每个文件都是一个模块，文件内容在第一次被 `require` 时执行。
   - 示例：
     ```javascript
     // moduleA.js
     module.exports = function() {
       return 'Hello from module A';
     };

     // app.js
     const moduleA = require('./moduleA');
     console.log(moduleA()); // 输出: Hello from module A
     ```

2. **AMD (Asynchronous Module Definition)**:
   - 这是在浏览器中使用的模块化规范，由 RequireJS 实现。
   - 使用 `define()` 函数来定义模块，通过 `require()` 函数异步导入模块。
   - 支持依赖管理和按需加载。
   - 示例：
     ```javascript
     // moduleB.js
     define(function() {
       return function() {
         return 'Hello from module B';
       };
     });

     // app.js
     require(['./moduleB'], function(moduleB) {
       console.log(moduleB()); // 输出: Hello from module B
     });
     ```

3. **ES6 Modules**:
   - ECMAScript 6 (ES2015) 引入了原生的模块化语法。
   - 使用 `import` 关键字来导入模块，使用 `export` 关键字来导出模块。
   - 支持静态分析和静态导入，模块是静态的，意味着在编译时就已经确定。
   - 示例：
     ```javascript
     // moduleC.js
     export function sayHello() {
       return 'Hello from module C';
     }

     // app.js
     import { sayHello } from './moduleC.js';
     console.log(sayHello()); // 输出: Hello from module C
     ```

4. **UMD (Universal Module Definition)**:
   - 这是一种通用的模块定义方式，可以在浏览器和 Node.js 中使用。
   - 通常结合了 CommonJS 和 AMD 的特点，通过检测环境来决定如何加载模块。
   - 示例：
     ```javascript
     // umdModule.js
     (function(root, factory) {
       if (typeof define === 'function' && define.amd) {
         // AMD. Register as an anonymous module.
         define([], factory);
       } else if (typeof exports === 'object') {
         // Node. Does not work with strict CommonJS, but
         // only CommonJS-like environments that support module.exports,
         // like Node.
         module.exports = factory();
       } else {
         // Browser globals (root is window)
         root.returnExports = factory();
       }
     }(this, function() {
       return function() {
         return 'Hello from UMD module';
       };
     }));

     // app.js
     console.log(umdModule()); // 输出: Hello from UMD module
     ```

5. **SystemJS**:
   - 这是一个动态模块加载系统，支持所有模块类型（CommonJS, AMD, ES6）。
   - 使用 `System.import()` 来导入模块。
   - 示例：
     ```javascript
     // systemModule.js
     export function greet() {
       return 'Hello from SystemJS module';
     }

     // app.js
     System.import('./systemModule.js').then(function(module) {
       console.log(module.greet()); // 输出: Hello from SystemJS module
     });
     ```

在实际开发中，选择哪种模块化方案取决于项目的需求、目标环境以及团队的偏好。随着 ES6 模块化语法的普及，越来越多的项目开始采用原生的 `import` 和 `export` 语法来实现模块化。此外，现代的构建工具（如 Webpack、Rollup 和 Parcel）也提供了对模块化的支持，使得跨模块和跨项目的代码共享变得更加容易。
:::

::: details 【ES6】 - Modules
特点

- **静态分析**: 由于导入和导出都是在编译时解析的，这使得工具可以更容易地进行静态分析，优化代码。
- **无运行时加载**: 与异步模块加载器（如 RequireJS）不同，ES6 Modules 不支持运行时加载模块。
- **避免全局污染**: 模块化的目的就是避免全局作用域的污染，ES6 Modules 通过封装代码来实现这一点。
- **支持模块嵌套**: 可以在模块内部导入和导出其他模块，形成模块的层次结构。
- **兼容性**: 虽然 ES6 Modules 是 JavaScript 语言的一部分，但并不是所有浏览器都原生支持。这时可以使用构建工具（如 Babel 或 Webpack）来转译代码，或者使用 `<script type="module">` 标签在支持的浏览器中直接使用。

使用场景

- **前端开发**: 在现代的前端项目中，ES6 Modules 被广泛用于组织和管理代码。
- **Node.js**: 虽然 Node.js 使用的是 CommonJS 模块系统，但从 Node.js v12 开始，它也支持 ES6 Modules。

注意事项

- **循环依赖**: ES6 Modules 不支持循环依赖，这可能会导致编译错误。
- **默认导出限制**: 每个模块只能有一个默认导出，但可以有多个具名导出。
- **严格模式**: ES6 Modules 默认是严格模式（'use strict'），这意味着某些不安全或不严谨的代码写法将会抛出错误。

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

::: details React Class Component Function Component 的使用区别?

1. 当需要使用例如错误边界的组件功能时，class 有 componentDidCatch 钩子函数。（函数组件也可以使用第三方库，例如 react-error-boundary）。
2. 当使用旧版本的 React 时。

:::

## Builder
::: details 什么是 Webpack？它是如何工作的？
Webpack 是一个现代 JavaScript 应用程序的静态模块打包器（module bundler）。在 Webpack 处理应用程序时，它会在内部构建一个依赖图（dependency graph），这个依赖图映射了项目所需的每个模块，并生成一个或多个 bundle（捆包文件）。

Webpack 能够将许多不同类型的资源（不仅限于 JavaScript 文件）转换和打包到浏览器可加载的格式。它通过加载应用程序入口文件，分析代码中遇到的对象（如 `import` 或 `require`），并找出这些对象所依赖的其他模块，然后递归地构建一个内部依赖图。

Webpack 也可以处理各种类型的模块，并将它们转换（transpile）为 JavaScript。这包括对 TypeScript、CSS、Less、Sass、图片和其他文件类型的处理。此外，Webpack 还提供了插件系统，允许开发者扩展其功能，例如通过插件来优化打包过程、清理输出目录、压缩打包后的文件等。

Webpack 的工作流程大致如下：

1. **初始化**:
   - Webpack 启动后，会从配置文件（默认是 `webpack.config.js`）中读取配置。
   - 配置文件中指定了入口文件（entry points）、输出文件（output）、加载器（loaders）和插件（plugins）等信息。

2. **编译**:
   - Webpack 从入口文件开始，递归地构建内部依赖图。
   - 遇到不同类型的文件时，Webpack 会使用相应的加载器来处理这些文件。例如，`.js` 文件可能会通过 Babel 转换为向后兼容的 JavaScript 代码，而 `.css` 文件可能会通过 CSS-loader 转换为 JavaScript 模块。

3. **模块解析**:
   - Webpack 分析模块间的依赖关系，并将它们转换为模块对象。
   - 对于每个模块，Webpack 都会执行其内容，并将模块对象添加到模块缓存中。

4. **输出**:
   - 一旦所有的模块都被处理完毕，Webpack 会根据依赖图生成一个或多个 bundle。
   - 这些 bundle 包含了应用程序运行所需的所有模块和资源。

5. **优化**:
   - Webpack 可以应用各种优化策略，如代码分割（code splitting）、懒加载（lazy loading）、Tree shaking 等，以减少最终 bundle 的大小。

6. **插件执行**:
   - 在整个构建过程中，Webpack 会在特定的时间点触发事件钩子。
   - 插件可以监听这些事件钩子，并在适当的时机执行自定义的任务，如压缩打包后的文件、清理构建目录等。

:::

::: details 什么是 Babel？它是如何转换 ES6 代码的？
Babel 是一个 JavaScript 编译器，它的主要作用是将现代 JavaScript 代码（通常是 ES6+ 代码）转换为向后兼容的 JavaScript 代码，以便在当前和旧版浏览器或环境中运行。Babel 通过转换 ES6 及更高版本的 JavaScript 语法特性，使得开发者能够使用最新的语言特性，同时确保代码能够在不支持这些特性的环境中正常工作。

Babel 由几个核心组件构成：

- **Babel CLI**: 命令行工具，用于将源代码转换为目标代码。
- **Babel Core**: 包含转换逻辑的核心库。
- **Babel Presets**: 预设配置，包含了一组插件，用于根据目标环境自动配置 Babel。
- **Babel Plugins**: 插件，用于自定义转换逻辑。
- **Babel Loaders**: 加载器，用于在模块打包工具（如 Webpack）中集成 Babel。

Babel 的转换过程通常包括以下几个步骤：

1. **解析（Parsing）**:
   - Babel 首先解析源代码，将其从字符串形式转换为 AST（抽象语法树）。这个 AST 表示了代码的结构和语法。

2. **转换（Transformation）**:
   - 接下来，Babel 使用各种插件来遍历和修改 AST。这些插件负责将 ES6 语法转换为 ES5 或其他目标版本的 JavaScript 语法。例如，`transform-arrow-functions` 插件会将箭头函数转换为传统的函数表达式。

3. **生成（Generation）**:
   - 转换后的 AST 会被生成为新的代码字符串。这个新代码是兼容目标环境的 JavaScript 代码。

4. **优化（Optimization）**:
   - Babel 还可以优化生成的代码，以提高性能和减少文件大小。这可能包括移除未使用的代码、压缩代码等。

5. **配置（Configuration）**:
   - Babel 的行为可以通过 `.babelrc` 文件或项目中的其他配置文件进行配置。开发者可以指定要使用的预设和插件，以及转换的选项。

Babel 的转换能力非常强大，它不仅可以转换语法，还可以转换新的 API 和语言特性，如类（classes）、模块导入导出（import/export）、模板字符串（template literals）、解构赋值（destructuring）等。此外，Babel 还支持实验性的 JavaScript 特性，如私有字段（private fields）和可选链（optional chaining）。

通过使用 Babel，开发者可以在不牺牲兼容性的前提下，享受到 JavaScript 最新进展带来的好处。Babel 在现代 Web 开发中扮演着至关重要的角色，特别是在构建跨浏览器兼容的应用程序时。
:::

## Browser

::: details 同源策略与跨域限制

跨域限制是浏览器的一种安全策略，主要是为了保护用户的隐私和安全。当浏览器检测到网页尝试发起跨域请求时，会根据同源策略（Same-Origin Policy）对请求进行限制。以下是一些常见的会受到跨域限制的请求：

1. Ajax 请求：使用 XMLHttpRequest 或 Fetch API 发起的跨域请求会受到跨域限制。

2. 动态加载脚本：通过 `<script>` 标签加载的跨域 JavaScript 脚本会受到跨域限制。

3. 嵌入的内容：例如使用 `<iframe>`、`<object>` 或 `<embed>` 标签嵌入的跨域资源会受到跨域限制。

4. Web 字体请求：在 CSS 中使用 @font-face 引入的跨域字体文件会受到跨域限制。

5. XHR2 中的 CORS 请求：使用跨域资源共享（CORS）协议的 XMLHttpRequest 2 请求会受到跨域限制。

6. 跨域图片请求：通过 `<img>` 标签加载的跨域图片资源不受跨域限制，但 JavaScript 对其访问会受到限制。

7. 跨域链接预加载：通过 `<link rel="preload">` 标签预加载的资源如果是跨域资源，也会受到跨域限制。

8. 跨域的 Service Worker 请求：Service Worker 中发起的跨域请求会受到跨域限制。

:::

::: details 如何减少页面的重绘和重排？
:::

::: details 什么是服务端渲染（SSR）？它的优势是什么？
:::

::: details 如何优化网页的加载速度？
:::

::: details 如何减少页面的重绘和重排？
:::

## Internet

::: details HTTP 和 HTTPS 的区别是什么？
:::
::: details 什么是 XSS 和 CSRF？如何防止这些攻击？
:::