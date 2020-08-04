//DOMReady是一个被封装的方法，用以当浏览器生成dom结构后开始解析某些js
//window.onload保证页面所有资源都加载完后才执行js，但是onload会等待图片等其他需要大量时间加载的资源

//渲染引擎的渲染过程
//解析HTML构建DOM树
//构建渲染树（解析样式）
//布局渲染树，确定每个元素的位置
//绘制渲染树，绘制每个节点

new function(){
    dom = []
    dom.isReady = false;
    dom.isFunction = function(obj){
        return Object.prototype.toString.call(obj) === '[object Function]'
    }
    dom.Ready = function(fn){
        dom.initReady()
        if(dom.isFunction(fn)){
            if(dom.isReady){
                fn()
            }else{
                dom.push(fn)
            }
        }

    }
    dom.fireReady = function(){
        if(dom.isReady)return
        dom.isReady = true
        for(var i = 0,n = dom.length;i<n;i++){
            var fn = dom[i]
            fn()
        }
        dom.length = 0
    }
    dom.initReady = function(){
        if(document.addEventListener){
            document.addEventListener('DOMContentLoaded',function(){
            document.removeEventListener('DOMContentLoaded',arguments.callee,false)
            dom.fireReady()
        },false)
        }
    }
}