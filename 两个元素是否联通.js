let arr = [0,1,2,3,4,5,6,7,8]
let id = []
arr.forEach((x,index)=>{
    id.push(index)
})
function connect(acc,pre){
    let select = id[acc]
    id.forEach((x,index)=>{
        //console.log('x',x,id,select)
        if(x==select){
            id[index]=id[pre]
        }
    })
   //console.log('----------------------')
}

function isconnect(item1,item2){
    if(id[item1]==id[item2]){
        console.log('true')
        return true
    }else{
        console.log('false')
        return false
    }
}
connect(1,2)
connect(2,3)
connect(7,8)
connect(1,8)
isconnect(2,8)
console.log(id)