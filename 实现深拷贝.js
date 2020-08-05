function deepClone(obj){
    var _toString = Object.prototype.toString
    if(!obj || typeof obj !== 'object'){
        return obj
    }
    if(_toString.call(obj)==='[Object Date]'){
        return new Date(obj.getTime())
    }
    if(_toString.call(obj)==='[Object RegExp]'){
        var flags = []
        if(obj.global){ flags.push('g')}//查找所有匹配
        if(obj.multiline){ flags.push('m')}//执行多行匹配
        if(obj.ignoreCase){ flags.push('i')}//对大小写不敏感的匹配
        return new RegExp(obj.source,flags.join(''))
    }
    var result = Array.isArray(obj)?[]:
        obj.constructor ? new obj.constructor() : {}
    for(var key in obj){
        result[key] = deepClone(obj[key])
    }
    return result
}