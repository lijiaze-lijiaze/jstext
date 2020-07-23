function binarySearch(target,arr,start,end) {
    if(start>end){ return -1 }
     start =  0
     end =  arr.length-1
    let middle = Math.floor(start + (end-start)/2)
    
    if(arr[middle] == target){
        console.log('------999-----',arr[middle])
        return middle
    }else if(target > arr[middle]){
        let arr1 = arr.slice(middle)
        
        binarySearch(target,arr1)
    }else if(target < arr[middle]){
        let arr1 = arr.slice(start,middle)
        
        binarySearch(target,arr1)
    }
    
}

binarySearch(4,[1,2,3,4,5,6])
