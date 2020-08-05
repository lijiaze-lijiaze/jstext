var output = (function(x){
    delete x;
    return x
})(0)
//delete是删除属性方法，这里不起作用，返回0