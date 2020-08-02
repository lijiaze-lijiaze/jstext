var jsonp = function({url,params,cb,timeout}){
    return new Promise((resolve,reject)=>{
        const script = document.createElement('script')
        const sdName = 'jsonp_'+Date.now()
        const urlObj = new URL(url)
        let timeOutCallback = false
        urlObj.searchParams.append('callback',cbName)
        params && Object.keys(params).forEach(paramsKey=>{
            urlObj.searchParams.append(paramsKey,params[paramsKey])
        })
        script.src = urlObj.toString()
        const commonCb = ()=>{
            delete window[cbName]
            document.body.removeChild(script)
        }
        script.onerror = function(event){
            if(!timeOutCallback){
                cb && cb(event)
                reject(event)
            }
            commonCb()
        }
        window[cbName] = function(data){
            if(!timeOutCallback){
                cb && cb(data)
                reject(data)
            }
            commonCb()
        }
        if(timeout !==undefined){
            setTimeout(()=>{
                timeOutCallback = true
                const resp = {msg:'timeout'}
                cb && cb(resp)
                reject(resp)
            },timeout)
        }
        document.body.appendChild(script)
    })
}