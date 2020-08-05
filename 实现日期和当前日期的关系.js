function timeAge(data){
    if(date != +data) return '';
    if(typeof date != 'object'){
        date = new Date(date)
    }
    var seconds = Math.floor((new Date()-date)/1000)
    var intervalType;
    var interval = Math.floor(seconds/31536000)
    if(interval>=1){
        intervalType = '年'
    }else{
        interval = Math.floor(seconds/2592000)
        if(interval>=1){
            intervalType = '月'
        }else{
            interval = Math.floor(seconds/86400)
            if(interval>=1){
                intervalType = '日'
            }else{
                interval = Math.floor(seconds/3600)
                if(interval>=1){
                    intervalType = '小时'
                }else{
                    interval = Math.floor(seconds/60)
                    if(interval>=1){
                        intervalType = '分钟'
                    }else{
                        interval = seconds
                        intervalType = '秒'
                    }
                }
            }
        }
    }
    return intervalType==='秒'?'刚刚':interval + intervalType + '前'
}