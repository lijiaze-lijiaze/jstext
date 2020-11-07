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
//sum(1)(2,3)(4,5,6)


function sum2(){

    let arr = Array.prototype.slice.call(arguments)
    console.log(arr)
    return function(){
        let arr2 = Array.prototype.slice.call(arguments)
        return sum2.apply(null,arr.concat(arr2))
    }
    }
//sum2(1)(2,3)(4,5,6)

function sum3(){

    let arr = Array.prototype.slice.call(arguments)
    console.log(arr)
    let fn = function(){
        let arr2 = Array.prototype.slice.call(arguments)
        return sum3.apply(null,arr.concat(arr2))
    }
    return fn
    }
//sum3(1)(2,3)(4,5,6)

function sum4(){

    let arr = Array.prototype.slice.call(arguments)
    console.log(arr)
    let fn = function(){
        let arr2 = Array.prototype.slice.call(arguments)
        return sum4.apply(null,arr.concat(arr2))
    }
    fn.toString=function(){
        return arr.reduce((acc,cur)=>acc+cur,0)
    }
    return fn
    }
sum4(1)(2,3)(4,5,6)