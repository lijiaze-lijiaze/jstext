function Animal(name){
    this.name = name
}
 Animal.prototype.run = function(){
     console.log(this.name + 'run')
 }
var cat = new Animal('cat')
new Animal('cat') = function(){
    let obj = {}
    obj._proto_ = Animal.prototype
    return Animal.call(obj,'cat')
}