var arr = [1,2,3,4,5,6,7]
arr.map(item=>{
    return{
        value:item,
        key:Math.random()
    }
})
.sort((a,b)=>a.key-b.key)
.map(item=>item.value)