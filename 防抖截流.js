//防抖：

    let time2;
    document.getElementById('防抖').onclick =
    function () {
        clearTimeout(time2);
        time2=setTimeout(function () {
            //做一些快乐的事情
        },2000);
    };

   // 节流：

    let bool=true;
        document.getElementById('节流').onclick = function () {
        if(bool){
            //做一些开心的事情
            bool=false;
            setTimeout(()=>{
                bool=true
            },2000)
        }
    }