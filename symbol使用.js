let obj = {
    [Symbol('name')]: '一斤代码',
    age: 18,
    title: 'Engineer'
 }
 
 Object.keys(obj)   // ['age', 'title']
 
 for (let p in obj) {
    console.log(p)   // 分别会输出：'age' 和 'title'
 }
 
 Object.getOwnPropertyNames(obj)   // ['age', 'title']