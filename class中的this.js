window.name = 'abc'
class A {
    constructor(){
        this.name = 123
    }
    getA (){
        console.log(this);
        return this.name+1;
    }
}
let a = new A;
let funcA = a.getA
funcA()
// 类的方法内部如果有this，默认指向类的实例。 但单独使用该方法时，很可能会报错。