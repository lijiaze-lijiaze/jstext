var target = document.querySelector('#target')
var frag = document.createDocumentFragment();
for(var i = target.children.length - 1;i>=0;i--){
    frag.appendChild(target.children[i])
}
target.appendChild(frag)