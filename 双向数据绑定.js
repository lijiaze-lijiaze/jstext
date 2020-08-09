var inputObj = ducument.getElementById('a')
var showObj = ducument.getElementById('b')
inputObj.addEventListenner('onkeyup',data_view)
var model = new Object(null)
Object.defineProperty(model,'user',{
    set:function(value){
        user = value;
        showObj.value = value;
    },
    get:function(){
        return user
    }
})
function data_view(){
    model['user'] = inputObj.value
}