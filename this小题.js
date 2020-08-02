var o = {
    f1:function () {
        console.log(this)
        var f2 = function(){
            console.log(this)
        }()
    }
}
o.f1()
//object
//window