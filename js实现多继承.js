function M1(){
    this.hello = 'hello'
    console.log('m1')
   
}
function M2(){
    this.world = 'world'
    console.log('m2')
}
function S(){
     M1.call(this)
     M2.call(this)
}
S.prototype = Object.create(M1.prototype)
console.log(S.prototype)
Object.assign(S.prototype,M2.prototype)
S.prototype.constructor = S;
 var s = new S()
 console.log(s) 
 //----------------------------------------------
 //js的几种继承方式，也写在这里
 //构造函数
 function Parent(age){
    this.name = 'mike'
    this.age = age
 }
 function Child(age){
    Parent.call(this,age)
 }
 var test = new Child(21)
 //原型链继承
 function Parent(){
     this.name = 'mike'
 }
 function Child(){
     this.age = 12
 }
 Child.prototype = new Parent()
 //组合继承
 function Parent(age){
     this.name = 'mike'
     this.age = age
 }
 Parent.prototype.run = function(){
     return this.name + '666' +this.age
 }
 function Child(age){
     Parent.call(this,age)
 }
 Child.prototype = new Parent()
 var test = new Child(21)
 //原型式继承
 function obj(o){
     function F(){}
     F.prototype = o
     return new F()
 }
 var box = {
     name:'box1',
     arr:[1,2]
 }
 var b1 = obj(box)