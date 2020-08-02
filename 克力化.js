//add(2,3,4) = 9
//add(2)(3)(4) = 9
function currying(fn,length){
    length = length||fn.length
    return function(...args){
        return args.length>=length?
        fn.apply(this,args)
        :currying(fn.bind(this,...args),length - args.length)
    }
}
function add(...args){
    return args.reduce((t,i)=>{
        return t+=i
    })
}
var newAdd = currying(add,3)
newAdd(2)(3)(4)
//此函数只能接受总计固定的参数
// function add(...args){
//     if(args.length>=3){
//         return args.slice(0,3).reduce((t,i)=>{t+=i})
//     }
//     return function(..._args){
//         return add(args.concat(_args))
//     }
// }