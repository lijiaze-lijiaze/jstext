function isArray(obj){
    return Object.prototype.toString.call(obj)==='[object Array]'
}

function isArray(){
    return obj._proto_ ===Array.prototype
}