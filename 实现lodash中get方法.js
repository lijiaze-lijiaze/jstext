const get = (from,...selectors)=>{
    return [...selectors].map(s => 
       // console.log(s.replace(/\[([^\[\]]*)\]/g,'.$s1.'))
        console.log(
            s
         //.replace(/\[([^\[\]]*)\]/g,'.$1.')
         .split('.')
         .filter(t => t!== '')
         //.reduce((pre,cur)=>pre && pre[cur],from)
 
        ) 
     )
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
