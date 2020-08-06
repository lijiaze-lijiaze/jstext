//写一个加法函数sum,支持sum(1)(2)(3,4)输出10
function sum(...args){
    function next(...innerArgs){
        args.push(...innerArgs);
        return next
    }
    next.valueOf = ()=>{
        return args.reduce((r,c) => r+c,0)
    }
    next.toString = ()=>{
        return args.reduce((r,c) => r+c,0)
    }
    console.log(next)
    return next
}
sum(1)(2)
//需要转换为字符串时，会调用toString，需要转换为数字时需要调用valueOf。