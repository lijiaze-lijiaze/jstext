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

function deepCopy3(obj) {
    // hash表，记录所有的对象的引用关系
    let map = new WeakMap();
    function dp(obj) {
      let result = null;
      let keys = Object.keys(obj);
      let key = null,
        temp = null,
        existobj = null;
   
      existobj = map.get(obj);
      //如果这个对象已经被记录则直接返回
      if(existobj) {
        return existobj;
      }
   
      result = {}
      map.set(obj, result);
   
      for(let i =0,len=keys.length;i<len;i++) {
        key = keys[i];
        temp = obj[key];
        if(temp && typeof temp === 'object') {
          result[key] = dp(temp);
        }else {
          result[key] = temp;
        }
      }
      return result;
    }
    return dp(obj);
  }
   
  const obj= {
    a: {
      name: 'a'
    },
    b: {
      name: 'b'
    },
    c: {
   
    }
  };
  c.d.e = obj.a;
   
  const copy = deepCopy3(obj);