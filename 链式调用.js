function sum(){

let arr = Array.prototype.slice.call(arguments)
return function(){
    let arr2 = Array.prototype.slice.call(arguments)
    return function(){
        let arr3 = Array.prototype.slice.call(arguments)
        let resultarr = arr.concat(arr2,arr3)
        console.log(resultarr)
        console.log( resultarr.reduce((acc,cur)=>acc+cur,0))
    }
}
}
sum(1)(2,3)(4,5,6)