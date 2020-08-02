const kcallBackMap = {}
function uuid () {
    return 
}
function jsonp(url,callback){
    const callbackId = uuid()
    url += 'callback=' + callbackId;
    window[callbackId] = callback
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script)
}