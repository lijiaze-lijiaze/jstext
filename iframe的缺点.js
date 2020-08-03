//iframe会阻塞主页面的Onload事件
//搜索引擎无法解析这种页面
//iframe和主页面共享连接池，浏览器对链接数量有限制
//通过js动态给iframe添加src可以避免这些问题