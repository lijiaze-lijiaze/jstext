function add(num1,num2){
    return parseInt(num1,2) + parseInt(num2,2)
}
 function add(num1,num2){
    return addtwo(num1) + addtwo(num2)
 }
 function addtwo(num){
    var result = 0
    for(var i = 0,len = num.length;i<len;i++){
        result += num[i] * Math.pow(2,len - i-1)
    }
    return result
 }