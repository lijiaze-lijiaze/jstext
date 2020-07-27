function gugu(str){
    let start=0,end=0
    let result = []
    
    for(let i = 0;i<str.length;i++){
        start = i-1
        end = i+1
        //console.log(str[i])
        while(str[start] && str[end] && str[start]==str[end]){
            console.log(str[start],str[end])
            result.push(str[start])
            result.push(str[end])
            start--
            end++
           
        }
        console.log(result)
    }
    for(let i = 0;i<str.length;i++){
        start = i
        end = i+1
        //console.log(str[i])
        while(str[start] && str[end] && str[start]==str[end]){
            console.log(str[start],str[end])
            result.push(str[start])
            result.push(str[end])
            start--
            end++
           
        }
        console.log('-----',result)
    }
}
gugu('aabb')