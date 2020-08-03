var list = [7,2,11,2,0,1,2,3,13,14,15]
var result = summ(list)//['0->3','7','11','13->15']
function summ(list){
    var nums = [...new Set(list.sort((a,b)=>a-b))]
    var len = nums.length;
    if(len == 0){
        return []
    }else if(len == 1){
        return [nums[0].toString()]
    }
    var start = 0;
    var result = [];
    for(var i = 1;i<len;i++){
        if(nums[i]-nums[i-1] == 1){
            continue
        }else{
            if(i-1 == start){
                result.push(nums[start].toString())
            }else{
                result.push(nums[start]+ '->' + nums[i-1])
            }
            start = i
        }
        
    }
    if(start == len - 1){
        result.push(nums[len - 1].toString())
    }else{
        result.push(nums[start] + '->' + nums[len - 1])
    }
    return result
}
