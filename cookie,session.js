//cookie是服务器发送到用户浏览器并保存在浏览器上的一块数据
//他会在浏览器下一次发起请求时被携带并发送到服务器上
//他可以确定两次请求是否来自于同一个浏览器，从而保持用户的登录状态，
//cookie的使用使得基于无状态的http请求记录状态信息成为可能

//sessionStorage为每一个给定的源维持一个独立的储存区域
//该储存区域在页面会话期间可用

//localStorage同样的功能但是浏览器关闭后数据依然存在

//localStorage，sessionStorage是web storage组成的api，为了解决cookie的一些缺陷
//服务端set的cookie每次会携带本域下所有的请求，对性能有损耗，