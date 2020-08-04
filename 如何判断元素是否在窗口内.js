var isAllInView = function(elem){
    var rect = elem.getBoundingClientReact()
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