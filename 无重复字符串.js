function aaa(str){
    const setarr = new Set()
    let i = 0,j = 0,max = 0
    for(i;i<str.length;i++){
        if(setarr.has(str[i])){
            while(setarr.has(str[i])){
               setarr.delete(str[j])
                j++
            }
            setarr.add(str[i])
            
        }else{
            setarr.add(str[i])
            max = Math.max(max,setarr.size)
        }
    }
    console.log(max)
    return max
}
aaa('abcdacba')