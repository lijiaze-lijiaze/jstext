function flat(array){
    var result = []
    var each = function(arr){
        arr.forEach(element => {
            if(item instanceof Array){
                each(element)
            }else{
                result.push(item)
            }
        });
    }
    each(array)
    return result
}