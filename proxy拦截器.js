//设计一个拦截器，如果访问某个属性没有时返回错误信息
const man = {
    name : 'hello',
    age : 22
}
const proxy = new Proxy(man,{
    get:function(target,property){
        if(property in target){
            return target[property]
        }else{
            throw new ReferenceError('error')
        }
    }
})