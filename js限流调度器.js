//方法add接受一个返回promise的函数，同时执行的任务不能超过两个
class Scheduler{
    constructor(){
        this.concurrency = 0
        this.queue = []
    }
    async add(promiseFunc){
        if(this.concurrency >= 2){
            return new Promise(r => {
                this.queue.push(() => promiseFunc().then(r))
            })
        }
        this.concurrency +=1
        await promiseFunc()
        this.concurrency -=1
        let next = this.queue.shift()
        if(next){
            this.add(next)
        }

    }
}
const scheduler = new Scheduler()
const timeout = (time) =>{
    return new Promise(r => setTimeout(r,time))
}
const addTask = (time,order) => {
    scheduler.add(()=> timeout(time)).then(() => console.log(order))
}