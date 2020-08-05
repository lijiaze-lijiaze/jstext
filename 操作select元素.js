function creatSelect(){
    var myselect = document.createElement('select')
    myselect.id='mySelect';
    document.body.appendChild(myselect)
}
creatSelect()
function addOption(){
    var objSelect = document.querySelector('#mySelect');
     objSelect.options.add(new Option('文本2','值2'))
}
addOption()
//删除所有
function remove(){
    var objSelect = document.querySelector('#mySelect');
    objSelect.options.length = 0
}
//删除当前
function removenow(){
    var objSelect = document.querySelector('#mySelect')
    var index = objSelect.selectedIndex
    objSelect.options.remove(index)
}
//获取当前option的内容
function getNow(){
    var objSelect = document.querySelector('#mySelect')
    var index = objSelect.selectedIndex
    var nowValue = objSelect.options[index].value
    console.log(nowValue)
}