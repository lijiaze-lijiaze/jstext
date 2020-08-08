var isAllInView = function(elem){
    var rect = elem.getBoundingClientReact()//获得元素相对与游览器视窗
    return(
        rect.top >=0 &&
        rect.left >=0 &&
        rect.bottom <= window.innerHeight && 
        rect.right <= window.innerWidth

    )
}

//offsetWidth/offsetHeight返回值包括content+padding+border
//clientWidth/clientHeight包括content +padding
//scrollWidth/scrollHeight包括content + padding+溢出内容