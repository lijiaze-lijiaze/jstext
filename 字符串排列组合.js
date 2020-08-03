//'abc'-->['abc','acb','bca','bac'...]
function calc(str){
    var strArr = str.split('');
    var path = [];
    var doccalc = function(array){
        if(array.length ==1){
            path.push(array[0])
            console.log(path)
            path.pop()
            return;
        }
        for(var i=0;i<array.length;i++){
            var left = array[0]
            
        }
    }
}