/** 访问者模式 **/

//访问器
var Visitor = (function(){
	return{
		//截取方法
		splice:function(){
			//splice方法参数，从原参数的第二个参数开始算起
			var args = Array.prototype.splice.call(arguments,1);
			//对第一个参数对象指向splice方法
			return Array.prototype.splice.apply(arguments[0],args);
		},
		//追加数据方法
		push:function(){
			//强化类数组对象，使他拥有length属性
			var len = arguments[0].length||0;
			//添加的数据从原参数的第二个参数算起
			var args = this.splice(arguments,1);
			//校正length属性
			arguments[0].length = len + arguments.length - 1;
			//对第一个参数对象执行push方法
			return Array.prototype.push.apply(arguments[0],args);
		},
		//弹出最后一次添加的元素
		pop:function(){
			//对第一个参数对象执行pop方法
			return Array.prototype.pop.apply(arguments[0]);
		}
	}
})();

/**测试**/
var a = new Object();
a.hello = "xiaobaicai";
console.log(a.length);		//undefined
Visitor.push(a,1,2,3,4);
console.log(a.length);
Visitor.push(a,4,5,6);
console.log(a);
console.log(a.length);
Visitor.pop(a);
console.log(a);
console.log(a.length);
Visitor.splice(a,2);
console.log(a);
