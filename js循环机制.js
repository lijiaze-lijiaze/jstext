//  浏览器event loop是html中定义的规范
//js调用站是一种后进先出的数据结构，当函数被调用时，会被添加到栈中的顶部，执行后从栈顶部移除该函数
//同步任务，异步任务
//同步任务在调用栈中按照顺序等待主线程执行，异步任务则是在有了结果后将注册的回调函数添加到任务队列等待主线程空闲的时候，也就是栈清空的时候被读取到栈中等待调用
//event loop
//调用栈中的同步任务都执行完毕了，栈内都清空了，就代表主线程空闲了，这个时候就回去任务队列中读取一个任务翻到栈中执行
//每次栈被清空了，都会去读取任务队列有没有任务，有就读取执行，一直循环读取执行的操作为事件循环
//宏任务微任务
//宏任务：整体代码，settimeout,setinterval,setimmediatle,I/O,UIrender,
//微任务：promise
async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2(){
    console.log('async2 start')
    return new Promise((resolve,reject)=>{
        resolve();
        console.log('async2 promise')
    })

}
console.log('illegalscript start')
setTimeout(function(){
    console.log('setTimeout')
},0)
async1()
new Promise(function(resolve){
    console.log('promise1')
    resolve()
}).then(function(){
    console.log('promise2')
}).then(function(){
    console.log('promise3')
})
console.log('illegalscript end')