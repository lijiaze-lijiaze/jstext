Array.prototype.map = function(f){
    return this.reduce(function(result,item,index){
        result.push(f(item,inex))
        return result
    },[])
}