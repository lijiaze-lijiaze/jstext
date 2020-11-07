let arr1 = [1,2,3,[4,5,6,[7,8]]]
function flat(arr){
    let result = []
    var each =  function(arr){
         arr.forEach(element => {
             
        if(element instanceof Array){
            each(element)
        }else{
            console.log(element)
            result.push(element)
        }
    });
    }
    each(arr)
   console.log(result)
}
flat(arr1)