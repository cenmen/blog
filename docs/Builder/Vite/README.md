## Vite 简单原理

- 使用浏览器引入的 script 标签添加属性 type='module' ，变为可加载模块
- 通过项目首页 index.html 开始对代码进行引用
- 因浏览器只认识 html 、css、js 文件以及引用路径为 '/'，'./'，相对路径
- 将对依赖包的引用路径修改为对本地 node_modules 打包后的文件引用路径
- 针对部分文件需进行编译，例如解析 .vue 文件

### 依赖预构建

vite 会找到对应的依赖, 然后调用 esbuild (对 js 语法进行处理的一个库), 将其他规范的代码转换成 esmodule 规范, 然后放到当前目录下的 node_modules/.vite/deps, 同时对 esmodule 规范的各个模块进行统一集成。

解决了 3 个问题:

1. 不同的第三方包会有不同的导出格式
2. 对路径的处理上可以直接使用.vite/deps, 方便路径重写
3. 叫做网络多包传输的性能问题(也是原生 esmodule 规范不敢支持 node_modules 的原因之一), 有了依赖预构建以后无论他有多少的额外 export 和 import, vite 都会尽可能的将他们进行集成最后只生成一个或者几个模块

## Vite 与 Webpack 的区别及优缺点

- webpack 支持多种模块化, 初次编译需要将所有模块进行处理，需要更长的时间才能启动开发服务器
- webpack 更多的关注兼容性, 而 vite 侧重关注浏览器端的开发体验
- webpack 的编译原理是通过 AST 抽象语法分析的工具 分析出你写的这个 js 文件有哪些导入和导出操作

## Vite 的启动步骤

1. 读取相关配置
2. 进行依赖预构建

- 将其他规范的代码转换成 esmodule 规范
- 对依赖模块进行统一集成
- 存放修改后的模块依赖到本地的 node_modules/.vite/deps
- 转换代码中依赖模块的路径
- 启动开发服务器
- 根据浏览器请求逐步递归模块响应到浏览器上

## FAQ

1. 浏览器如何识别开发服务器的 .vue 等文件
2. 代码修改是如何反应到浏览器上
3. ::: details 如何解决 css 模块化问题
   为 css 文件添加后缀 xx.module.css ，vite 修改 css 中定义的类名添加 hash 值，防止类名被覆盖，并且将 css 内容修改为 js 代码响应给浏览器执行，在 head 标签插入 style 标签

:::

## 相关链接

- [为什么选 Vite](https://cn.vitejs.dev/guide/why.html)
