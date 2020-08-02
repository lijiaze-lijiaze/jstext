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
 