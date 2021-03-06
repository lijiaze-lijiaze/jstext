//CommonJS模块的重要特性是加载时执行，即脚本代码在require时就会全部执行，一旦出现某个模块被循环加载，就只输出已执行部分，还未执行的不会输出。
//ES6模块引用是动态引用，如果使用import从一个模块加载变量，那些变量不会被缓存，而是成为一个指向加载模块的引用，需要开发者保障取值的时候能取到值。
//CommonJS规范规定，每个模块内部，module变量代表当前模块，这个变量是一个对象，他的export属性是对外接口，加载某个export命令规定的对外接口，必须与模块内部变量建立对应关系
//ES6模块化的设计思想是尽量的静态化，是的编译时就能确定模块的依赖关系，以及输入和输出的变量，CommonJS和AMD模块都只能在运行时确定