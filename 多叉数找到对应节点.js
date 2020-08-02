var cityData = [
    {
        id: 1,
        name: 广东,
        children: [
            {
                id: 2,
                name: 北京,
                children: [
                    {
                        id: 3,
                        name:海淀,
                    }
                ]
            }
        ]
    }
]
//根据ID找到name
let result = ''
const recursion = (cityData,id) => {
    if(!cityData||!cityData.length) return;
    for(let i = 0 ,len = cityData.length;i<len;i++){
        const childs = cityData[i].children
        if(cityData[i].id == id){
            result = cityData[i].name
        }
        if(child && childs.length>0){
            recursion(childs,id)
        }
    }
    return result
}

//广度优先遍历
let result1 = ''

const range = (cityData,id) => {
    if(!cityData || !cityData.length) return;
    let stack = [];
    let item = null
    for(let i = 0 ,len = cityData.length;i<len;i++){
        stack.push(cityData[i]);
    }
    while(stack.length){
        item = stack.shift();
        if(item.id === id){
            result = item.name
        }
        if(item.children && item.children.length){
            stack = stack.concat(item.children)
            //stack = item.children.concat(stack)如此写即为深度优先
        }
    }
    return result
}

//正则
const regular = (cityData,id) => {
    if(!cityData || !cityData.length) return;
    let cityStr = JSON.stringify(cityData)
    let reg = new RegExp(`"id":${id},"name":"([^\\x00-\\xff]+)",`)
    return (cityStr.match(reg))[1]
}
let r4 = regular(cityData,2)