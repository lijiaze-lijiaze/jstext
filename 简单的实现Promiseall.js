function fn1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1)
        },1000)
    })
}

function fn2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(2)
        },2000)
    })
}

PromiseAll([fn1(),fn2()]).then(res => {console.log(res)})

function PromiseAll(list){
    return new Promise((resolve,reject) =>{
        let count = 0
        let len = list.length;
        let result = []
        list.forEach((item,index) => {
            item.then(res => {
                count++
                result[index] = res
                if(count == len){
                    resolve(result)
                }
            }).catch(err => {
                reject(err)
            })
        });
    })
}