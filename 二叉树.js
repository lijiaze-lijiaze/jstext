function BST(){
    this.root = null
}
BST.prototype.insert = function(data){
    var n = new Node(data,null,null)
    if(this.root == null){
        this.root = n
    }else{
        var current = this.root
        for(;;){
            if(data<current.data){
                if(current.left == null){
                    current.left = n
                    break;
                }else{
                    current = current.left
                }
            }else{
                if(current.right == null){
                    current.right = n
                    break;
                }else{
                    current = current.right
                }
            }
        }
    }
}
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function(){
        return this.data
    }
}
var bst = new BST()
var nums = [10,3,18,2,4,13,21,9,8,9]
for(let item in nums){
bst.insert(nums[item])
}
console.log(bst)