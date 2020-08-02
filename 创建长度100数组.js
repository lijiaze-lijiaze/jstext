const arr = [...Array(100)].map((_,i)=>{i})
Array.from( {length:100} , (_,i)=>i)
Array(100).fill().map((_,i) => i)


new Array(100).map((_,i)=>i)

let aaa = new Array(100)

for(i in aaa){
    console.log('5')
}

//Array(100)输出的是长度为100的内容全部为空的数组,无法使用map,forin
//[...Array(100)]输出的是一百个undefined