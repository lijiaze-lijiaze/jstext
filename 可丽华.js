function trueCurrent(fn, ...x){
    console.log(...x)
    if(x.length>fn.length){
        console.log(x)
        return x.reduce((r,c) => r+c,0)
}

    return function (...y){
        console.log('y', ...y)
        return trueCurrent(fn, ...x, ...y)
}
}
undefined
trueCurrent(add, 1, 2, 4)
//VM2073:2 1 2 4
//VM2073:4 (3) [1, 2, 4]0: 11: 22: 4length: 3__proto__: Array(0)
//7