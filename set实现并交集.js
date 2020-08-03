let a = new Set([1,2,3])
let b = new Set([2,3,4])
//并集
let union = new Set([...a,...b])
//交集
let intersect = new Set([...a].filter(x=>b.has(x)))
//差集
let intersect = new Set([...a].filter(x=>!b.has(x)))