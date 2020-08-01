//实现一个repeat方法
function repeat(func,times,wait){
    if(typeof times !=='number')return
    if(typeof wait !=='number')return
    return function(str){
        for(let i = 0;i<times;i++){
            setTimeout(()=>{
                fn(str)
            },i*wait)
        }
    }

}
//使下面的代码能够正常工作
const repeatFunc = repeat(console.log,4,3000)
repeatFunc('hello')//会输出四次hello，每次间隔三秒
