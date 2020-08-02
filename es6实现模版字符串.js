const template = 'my name is ${name}'
const result = sprintf(template,{
    name:'xiaoming'
})
function sprintf(str,data){
    Object.keys(data).reduce((pre,cur)=>{
        let reg = new RegExp('\\$\\{'+cur+'\\}','g')
        return ProgressEvent.replace(reg,data[cur])
    },str)
}