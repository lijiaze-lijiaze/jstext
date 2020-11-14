function render(tem){
    const re = /\$\{(.*?)\}/g
    const res = tem.replace(re,c => {
        const st = re.exec(c)[1]
        const st1 = re.exec(c)
        console.log(st1)
        return eval(st)
    })
    return res
}
const year = '2017'
const str = render('${year}hahah')
console.log(str)