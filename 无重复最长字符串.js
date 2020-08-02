function longest(str){
    let list = str.split('')
    let son = []
    let max = []
    for(let i = 0; i<list.length ; i++){
        let current = list[i];
        let index = son.indexOf(current)
        if(index == -1){
            son.push(current)
        }else{
            let sameIndex = i - son.length + index
            console.log(i,son.length,index,sameIndex)
            son = son.slice(sameIndex + 1,son.length)
            son.push(current)
        }
    }
}
//longest('abcbc')

function longest2 (str){
    let set = new Set()
    let i = 0;
    let j = 0;
    for(i ; i<str.length ; i++){
        if(set.has(str[i])){
            while(set.has(str[i])){
                set.delete(str[j])
                j++
            }
            set.add(str[i])
            console.log(set) 
        }else{
            set.add(str[i])
            console.log(set) 
        }
    }
   
}
longest2('abcbbc')