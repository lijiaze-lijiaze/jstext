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