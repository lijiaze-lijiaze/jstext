var isAllInView = function(elem){
    var rect = elem.getBoundingClientReact()
    return(
        rect.top >=0 &&
        rect.left >=0 &&
        rect.bottom <= window.innerHeight && 
        rect.right <= window.innerWidth

    )
}