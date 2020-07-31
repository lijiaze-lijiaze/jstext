//这里只能用var定义变量,let,const定义的变量，不是绑定在window下。
var str = 'window';  
 
const obj = {
    str:'obj',
    nativeFn: function(){
	console.log(this.str, '当前词法作用域中的this');
	return function(){
	    console.log('原生函数',this.str);	
	}
    },
    arrowFn: function(){
	console.log(this.str, '当前词法作用域中的this');
	return ()=>{
	    console.log('箭头函数',this.str);	
	}
    }
};
const obj2 = {
    str:'obj2'	
}
 

let aaa = obj.nativeFn()
let bbb = obj.arrowFn()

	
 
	
// console.log('函数调用二 **********');  
// nativeFn.call(obj2);
// arrowFn.call(obj2);    
	
// console.log('函数调用三 **********'); 
// setTimeout(function(){    
//     nativeFn();
//     arrowFn();	
// },50);
 
// //函数调用四
// var doc = document.documentElement;
// doc.str = 'document';
// doc.addEventListener('click',function(){
//     console.log('函数调用四 **********'); 
// },false);
// doc.addEventListener('click',nativeFn,false);
// doc.addEventListener('click',arrowFn,false);