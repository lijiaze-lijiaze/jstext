//serialize({a:'b'}) "{'a':'b'}"
//serialize({a:0/0}) "{'a':NaN}"
function serialize(val){
    if(val && typeof val === 'object'){
        if(Array.isArray(val)){
            return '[' + val.map(serialize) + ']'
        }
        if(val instanceof RegExp){
            return '' + val
        }
        if(val instanceof Date){
            return 'new Date('+ +val +')'
        }
        return '{' + Object.keys(val).map(key => JSON.stringify(key)+':'+serialize(val[key]))
    }
    if(typeof val == 'string'){
        return JSON.stringify(val)
    }
    return ''+val
}