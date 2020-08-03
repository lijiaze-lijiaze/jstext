function isEmpty(obj){
    for(var key in obj){
        return false
    }
    return true
}

if(JSON.stringify({}) === "{}"){return true}


if(Object.keys(obj).length === 0){return true}