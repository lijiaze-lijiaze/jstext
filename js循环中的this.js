var coder = {
    name:'jscoder',
    skill:['css3','html5','es5'],
    say:function(){
        for(let i = 0,len = this.skill.length; i<len;i++){
            setTimeout(()=>{
                console.log(i+this.name)
                console.log(this.skill[i])
            }, 1000);
        }
    }
}
coder.say()