//协议，域名，端口 有一项不同即为跨域
//（1）JSONP动态创建script标签
//     只支持get请求，很难判断是否成功
//（2）proxy代理
//     将请求发送到后台，由后台来发送请求
//（3）cors
//    需要客户端和服务器端同时支持，主要由服务端实现
//    Access-Control-Allow-ORigin