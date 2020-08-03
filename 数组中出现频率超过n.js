Array.prototype.findDuplicate = fucntion(n){
    var result = [];
    if(typeof n !=='number'||isNaN(n)){return result}
    var itemFreges = {}
    this.forEach(x=>{
        if(!itemFreges[x]){
            itemFreges[x]=0
        }
        itemFreges[x]++
    })
    for(var item in itemFreges){
        if(itemFreges[item]>=n){
            result.push(item)
        }
    }
    return result
}