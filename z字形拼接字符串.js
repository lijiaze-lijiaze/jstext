let s = "LEETCODEISHIRING", numRows = 3
function change(str,num){
let arr = new Array().fill()
for(let j = 0;j<3;j++){
    arr.push([])
}
let count = 0
let rise = true
for(item in str){
    console.log(count)
    arr[count].push(str[item])
    if(rise){
        count++
       
        if(count == numRows-1){
            rise=false 
        }
    }else{
        count--
        if(count == 0){
            rise=true 
        }
    }
}

let result = arr.reduce((abc,xyz)=>[...abc,...xyz])

console.log('result',result)
}
change(s,numRows)