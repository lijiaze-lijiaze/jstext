function render(tem){
    const re = /\$\{(.*?)\}/g
    const res = tem.replace(re,c => {
        const st = /\$\{(.+?)\}/.exec(c)[1]
        console.log(/\$\{(.+?)\}/.exec(c))
        return eval(st)
    })
    return res
}
const year = '2017'
const str = render('${year}hahah')
console.log(str)