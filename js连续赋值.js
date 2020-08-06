var a = {k1:'v1'}
var b = a
a.k3 = a = {k2:'v2'}
//a.k3 = a
//a = {k2:'v2'}  等同于
console.log(a)
console.log(b)