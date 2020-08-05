//方法1
function Foo(){
    getName = function(){
        console.log(1)
    }
    return this
}
//方法2
Foo.getName = function(){
    console.log(2)
}
//方法3
Foo.prototype.getName = function(){
    console.log(3)
}
//方法4
var getName = function(){
    console.log(4)
}
//方法5
function getName(){
    console.log(5)
}

Foo.getName()//直接调用Foo.getName 得到2
getName()//函数声明提前于变量声明，但是被变量覆盖得到4
Foo().getName()//先执行Foo(),结果是this，并产生了一个全局的getName(),得到1
getName()//同上得到1
new Foo.getName()//先运算Foo.getName()得到2
new Foo().getName()//3
new new Foo().getName()//3