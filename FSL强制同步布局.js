//有一组dom元素需要将其高度设置为与宽度一致，一下代码是否有问题
for(var i = 0,len = divs.length;i<len ; i++){
    var width = divs[i].clientWidth;
    div[i].style.height = width+'px'
}

var widthArray = []
for(var i = 0,len = divs.length;i<len ; i++){
    var width = divs[i].clientWidth;
    widthArray.push(width)
}
for(var i = 0,len = divs.length;i<len ; i++){
    div[i].style.height = widthArray[i]+'px'
}