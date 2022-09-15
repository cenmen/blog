## TypeScript 总结

### 优缺点

#### 优点

- 使用类型定义可以帮助理解代码。可以提前发现编码上可能存在的问题。

#### 缺点

- TypeScript 不能被浏览器理解，所以它必须由 TypeScript 编译器（TSC）编译成 JavaScript。
- TypeScript 的编写时间比 JavaScript 长，因为需要指定类型，对于短期项目会增加开发成本。

### 用法

::: details 值类型注解

```ts
let name: string;
let age: string | number; // 联合类型
let sex = 0; // 自动推断
```

:::

::: details 数组类型注解

```ts
let ids: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Danny', 'Anna', 'Bazza'];
let options: boolean[] = [true, false, false];
let books: object[] = [
	{ name: 'Fooled by randomness', author: 'Nassim Taleb' },
	{ name: 'Sapiens', author: 'Yuval Noah Harari' }
];
let person: (string | number | boolean)[] = ['Danny', 1, true]; // 数组的联合类型
// 元组（Tuples）。元组是一个具有固定大小和已知数据类型的数组，它们比普通数组更严格。
let person: [string, number, boolean] = ['Danny', 1, true];
person[0] = 100; // Error - Value at index 0 can only be a string
```

:::

::: details 对象类型注解

```ts
interface Person {
	name: string;
	location: string;
	isProgrammer: boolean;
	sayHi(name: string): string;
	sayBye: (name: string) => string;
}

let person1: Person = {
	name: 'Danny',
	location: 'UK',
	isProgrammer: true,
	sayHi: function (name: string) {
		return `Hi ${name}`;
	},
	sayBye: (name: string) => `Bye ${name}`
};
```

:::

::: details 函数类型注解

```ts
const circle = (diam: number, c?: number | string): string => {
	return 'The circumference is ' + Math.PI * diam;
};
```

:::

::: details 类型别名，可以减少代码的重复

```ts
type StringOrNumber = string | number;

type PersonObject = {
	name: string;
	id: StringOrNumber;
};

const person: PersonObject = {
	name: 'John',
	id: 1
};

const sayHello = (person: PersonObject) => {
	return 'Hi ' + person.name;
};
```

:::

::: details 类型转换

```ts
const form = document.getElementById('signup-form') as HTMLFormElement;

console.log(form.method); // post
```

:::

::: details 类（class）的属性中的访问修饰语

```ts
// 默认情况下，该属性将是公共的（public）
class Person {
	constructor(readonly name: string, private isCool: boolean, protected email: string, public pets: number) {}

	sayMyName() {
		console.log(`Your not Heisenberg, you're ${this.name}`);
	}
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Danny
```

:::

::: details 类（class）的接口，实现一个接口来告诉一个类，它必须包含某些属性和方法

```ts
interface HasFormatter {
	format(): string;
}

class Person implements HasFormatter {
	constructor(public username: string, protected password: string) {}

	format() {
		return this.username.toLocaleLowerCase();
	}
}

// Must be objects that implement the HasFormatter interface
let person1: HasFormatter;
let person2: HasFormatter;

person1 = new Person('Danny', 'password123');
person2 = new Person('Jane', 'TypeScripter1990');

console.log(person1.format()); // danny
```

:::

::: details 枚举（Enums）

```ts
// 默认情况下，枚举（enums）是基于数字的
enum ResourceType {
	BOOK,
	AUTHOR,
	FILM,
	DIRECTOR,
	PERSON
}

console.log(ResourceType.BOOK); // 0
console.log(ResourceType.AUTHOR); // 1

enum Direction {
	Up = 'Up',
	Right = 'Right',
	Down = 'Down',
	Left = 'Left'
}

console.log(Direction.Right); // Right
console.log(Direction.Down); // Down
```

:::

::: details 泛型？

```ts

```

:::

### FAQ

1. 接口与类型别名的区别？  
   接口与类型别名非常相似，在许多情况下，你可以使用这两者。关键的区别是，类型别名不能被重新打开以添加新的属性，而接口总是可以扩展的。一个类型在被创建后不能被改变。

2. 为什么要使用一个接口而不是一个类。  
   使用接口的一个好处是，它只被 TypeScript 使用，而不是 JavaScript。这意味着它不会被编译，也不会给你的 JavaScript 增加臃肿。类是 JavaScript 的特性，所以它会被编译。

### 参考链接

- [freeCodeMap - 面向初学者的 TypeScript 完全指南](https://chinese.freecodecamp.org/news/learn-typescript-beginners-guide/)
