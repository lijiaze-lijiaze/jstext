//1 2 3 4
//5 6 7 8
//9 8 7 6
//输出：[1,[2,5],[3,6,9],[4,7,0],[8,1],2]

// 输入：二维数组，M x N = 3 x 4
// 1 2 3 4
// 5 6 7 8
// 9 0 1 2

// 输出：一维数组，维度：？ = 6
// [1, 7, 18, 11, 9, 2]

// M + N - 1
// 斜线
// 1）找到每条线段的起点：起点在哪里？用i,j是怎么表示的？
// 第一行，最后一列

// 2）循环线段：i, j  --> i + 1, j - 1 [0,0][1,0][2,0][3,0][3,1][3,2]
// - 初试条件：线段起点
// - 下一个点
// - 退出条件：超过边界

// def 求线段和（顶点）：
//    while 不超过边界：
//       i，j -> i+1, j-1
//   return 和

// for 顶点 in 第一行：
//    求线段和（顶点）
// for 顶点 in 最后一列：
//    求线段和（顶点）
function aaa(arr){
    let newarr = []
        for(let j = 0;j<arr[0].length;j++){
            let acc = []
            let i = 0
            let u = j
            while(u>=0){
                if(arr[i]){
                    acc.push(arr[i][u])
                }
                u--
                i++
            }
            newarr.push(acc) 
        }
        for(let i = 1;i<arr.length;i++){
            let acc = []
            let u = i
            let j = arr[i].length-1
            while(u<=arr.length){
                if(arr[u]){
                    acc.push(arr[u][j])
                }
                j--
                u++
            }
            
            newarr.push(acc) 
        }
        console.log(newarr)
}
aaa([[1,2,3,4],[5,6,7,8],[9,0,1,2]])
1,2,3,4
5,6,7,8
9,0,1,2