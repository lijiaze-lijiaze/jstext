const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000);
    })
}
//一秒后输出1，4，9
function test() {
    list.forEach(async x => {
        const res = await square(x)
        console.log(res)
    })
}
//每隔一秒后输出1，4，9
// async function test(){
//     for(let x of list){
//         const res = await square(x)
//         console.log(res)
//     }
// }
test()
//for循环中包含异步调用时会等异步调用完成后再执行后面的语句（先输出1、2、3最后输出completed）
//forEach中包含异步调用时会直接执行后面的语句（先输出completed，然后输出1、2、3）