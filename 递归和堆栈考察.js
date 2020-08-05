var list = [...Array(100)]
var nextListItem = function(){
    var item = list.pop()
    if(item){
        nextListItem()
    }
}
//数组过长，代码会造成堆栈溢出，可以增加定时器