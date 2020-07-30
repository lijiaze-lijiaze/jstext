

function walkDom(node,callback){
    if(node == null){
        return
    }
    node = node.firstElementChild
    while(node){
        walkDom(node,callback)
        node = node.nextElementSibling
    }
}


function walkDom(node,callback){
    if(node == null){
        return
    }
    let stack = [node]
    let target
    while(stack.length){
        target = stack.shift()
        callback(target)
        stack.push(target.children)
    }
}