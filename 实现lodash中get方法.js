function get(){

}
const obj = {
    selector:{
        to:{
            toutiao:'fe'
        }
    },
    target:[1,2,{name:'type'}]
}
get(obj,'selector.to.toutiao','target[0]')
//['fe',1]
const get = (from,...selectors)=>{
   return [...selectors].map(s => {
        s
        .repalce(/\[([^\[\]]*)\]/g,'.$s1.')
        .split('.')
        .filter(t => t!== '')
        .reduce((pre,cur)=>pre && pre[cur],from)
    })
}