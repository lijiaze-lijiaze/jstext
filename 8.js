function twosum(arr,target){
    var aaa = new Map()
    aaa.set('a',10)
    
     arr.forEach((x,index) => {
         console.log(aaa.has(x))
         if(aaa.has(x)){
             console.log(index,aaa.get(x))
             return
         }else{
             aaa.set(x,index)
         }
     });
    // for(let i = 0;i<arr.length;i++){
    //     console.log(aaa.has(arr[i]))
    //     if(aaa.has(arr[i])){
    //         console.log(i,aaa.get(arr[i]))
    //         return
    //     }else{
    //         aaa.set(arr[i],i)
    //     }
    // }
}
twosum([1,2,5,3,5],3)
