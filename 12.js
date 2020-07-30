function walkDom(node, callback) {
    if (node === null) { //判断node是否为null
        return
    }
    callback(node) //将node自身传入callback
    node = node.firstElementChild //改变node为其子元素节点
    while (node) {
        walkDom(node, callback) //如果存在子元素，则递归调用walkDom
        node = node.nextElementSibling //从头到尾遍历元素节点
    }
}
walkDom(document, function(node) {console.count()}) //包含document节点
document.querySelectorAll('*').length //数量比上面输出的少1，因为不包含document节点


function walkDom(node, callback) {
    if (node === null) {
        return
    }
    var stack = [node] //存入数组
    var target
    while(stack.length) { //数组长度不为0，继续循环
        target = stack.shift() //取出元素
        callback(target) //传入callback
        Array.prototype.push.apply(stack, target.children) //将其子元素一股脑推入stack，增加长度
    }
}
walkDom(document, function(node) {console.count()}) //包含document节点
document.querySelectorAll('*').length //数量比上面输出的少1，因为不包含document节点