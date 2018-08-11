/***ES6函数拓展
 *模块解释:为充分使用已有ES6特性写的一些拓展函数
 *@function  constantize(obj): 常数化对象，迭代冻结对象和其子对象
 *							   用于使用const定义一个对象常量
 ***/

/***
 *@name: 常数化对象
 *@eplain：通过迭代使用Object.freeze()将对象和对象中的子对象都冻结，彻底冻结常数
 *eg:  const a = constantize({a:2,b=3});
 ***/
var constantize = (obj) =>{
	Object.freeze(obj);
	Object.keys(obj).forEach((key,i)=>{
		if(typeof obj[key] === 'object'){
			constantize(obj[key]);
		}
	});
};

/***
 *@name: 获取顶层对象
 ***/
function getGlobal(){
	if(typeof self !== 'undefined'){return self;}
	if(typeof window !== 'undefined'){return window;}
	if(typeof global !== 'undefined'){return global;}
	throw new Error("不能获取顶层对象");
};