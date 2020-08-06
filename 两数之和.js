function twosum(arr,target){
    var aaa = new Map()
    //aaa.set('a',10)
    
     arr.forEach((x,index) => {
         let ex = target - x
         console.log(aaa.has(ex))
         if(aaa.has(x)){
             console.log(index,aaa.get(x))
             return
         }else{
             aaa.set(ex,index)
             console.log(aaa)
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
twosum([1,2,5,3,7],9)
