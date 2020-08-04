//创建一个button，然后点击这个button,把button销毁，然后在同位置上创建两个相同的button
document.getElementById('doubleholder').addEventListener('click',function(e){
    var btn = document.createElement('button')
    btn.setAttribute('class','double')
    btn.innerHTML = 'double'
    var btn2 = document.createElement('button')
    btn.setAttribute('class','double')
    btn.innerHTML = 'double'
    this.appendChild(btn)
    this.appendChild(btn2)
    this.removeChild(e.target)

})