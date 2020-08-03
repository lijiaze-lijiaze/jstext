//进入页面A点击返回，跳转到页面B而不直接退出，再次点击后退才退出
history.replaceState(
    {
        page:'page1'
    },
    'page1',
    location.herf
)

history.pushState(
    {
        page:'page2'
    },
    'page2',
    location.herf
)
window.onpopstate = function(e){
    if(e,state && e.state.page == 'page1'){
        location.replace('/test/')
    }
}
//location.href 会写入 浏览器的历史  window.history 对象中  location.replace则不会