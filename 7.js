var a =11;
var obj={
  a:22,
 say:function(){
console.log(this.a)
}
}
 var aaa = obj.say;
 console.log(aaa)

 //console.log输出的是22