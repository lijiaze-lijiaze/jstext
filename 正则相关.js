//运行 styleHyphenFormat('borderTop')，将返回 'border-top'。
function styleHyphenFormat(str){
   let bbb = str.replace(/[A-Z]/g,(match)=>'_'+ match.toLowerCase())
    console.log(bbb)
}
styleHyphenFormat('borderTop')

var str = "John Smith";// Smith, John

function reverse(str){
    let bbb = str.replace(/(\w+)\s(\w+)/,'$2 $1')
    console.log(bbb)
}
reverse("John Smith")