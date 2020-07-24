function fun(){
    console.log(this.s);
}
var obj = {
    s:'1',
    f:fun
}
var s = '2';
obj.f(); //1
fun(); //2