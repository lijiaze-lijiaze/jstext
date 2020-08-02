//实现一个codeman
//CodeMan('hank')输出：
//hi this is hank
//CodeMan('hank').sleep(10).eat('dinner')
//hi this is hank
//等待十秒
//wake up after 10
//Eat dinner

class _CodeMan {
    constructor(name){
        this.tasks = []
        const task = () =>{
            console.log('hi this is ${name}')
            this.next()
        }
        this.tasks.push(task)
        setTimeout(()=>{
            this.next()
        },0)
    }
    next() {
        const task = this.tasks.shift();
        task && task()
    }
    sleep(time){
        this._sleepWrapper(time,false)
        return this;
    }
    sleepFirst(time){
        this._sleepWrapper(time,true)
        return this
    }
    _sleepWrapper(time,first){
        const task = () =>{
            setTimeout(()=>{
                console.log('wake up after ${time}')
                this.next
            },time*1000)
        }
        if(first){
            this.tasks.unshift(task)
        }else{
            this.tasks.push(task)
        }
    }
    eat(name){
        const task = () =>{
            console.log('eat ${name}')
            this.next()
        }
        this.tasks.push(task)
        return this
    }
}
function CodingMan (name){
    return new _CodeMan(name)
}