//实现fetch(url).then(res=>console.log(res))
function fetch(url){
    return new Promise((resolve,reject)=>{
        var XHR = new XMLHttpRequest();
        XHR.open('GET',url,true)
        XHR.send()
        XHR.onreadystatechange = ()=>{
            if(XHR.readyState == 4){
                if(XHR.status == 200){
                    try{
                        var response = JSON.parse(XHR.responseText)
                        resolve(response)
                    }catch(e){
                        reject(e)
                    }

                }else{
                    reject(new Error('error'))
                }
            }
        }
    })
}