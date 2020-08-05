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
//删除
function remove(){
    var objSelect = document.querySelector('#mySelect');
    objSelect.options.length = 0
}