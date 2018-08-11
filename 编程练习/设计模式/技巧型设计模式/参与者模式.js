/**
//事件绑定方法
A.event.on = function(dom,type,fn){
	//W3C标准事件绑定
	if(dom.addEventListener){
		dom.addEventListener(type,fn,false);
	//IE事件绑定
	}else if(dom.attachEvent){
		dom.attachEvent('on'+type,fn);
	//DOM0级事件绑定
	}else{
		dom['on'+type] = fn;
	}
}

A.event.on = function(dom,type,fn,data){
	//w3c标准事件绑定
	if(dom.addEventListener){
		dom.addEventListener(type,function(e){
			//在dom环境中调用fn,并传入事件对象与data数据参数
			fn.call(dom,e,data);
		},false);
	}
	//ie事件绑定
	//...
}


//函数绑定bind
function bind(fn,context){
	//函数闭包返回新函数
	return function(){
		//对fn函数装饰并返回
		return fn.apply(context,arguments);
	}
}

/** 测试
var btn = document.getElementsByTagName('button')[0];
var p = document.getElementsByTagName('p')[0];
//对demoFn改进，在控制台输出参数与this对象
function demoFn(){
	console.log(arguments,this);
}
//未设置提供参与对象
var bindFn = bind(demoFn);
//绑定事件
btn.addEventListener('click',bindFn);
//chrome输出: [MouseEvent]Window


//函数柯里化
function curry(fn){
	//缓存数组slice方法Array.prototype.slice
	var Slice = [].slice;
	//从第二个参数开始截取参数
	var args = Slice.call(arguments,1);
	//闭包返回新函数
	return function(){
		//将参数(类数组)转化为数组
		var addArgs = Slice.call(arguments),
			//拼接参数
			allArgs = args.concat(addArgs);
		//返回新函数
		return fn.apply(null,allArgs);
	}
}

/**  函数柯里化 测试 
//加法器
function add(num1,num2){
	return num1+num2;
}
//加5加法器
function add5(num){
	return add(5,num);
}
//测试add加法器
console.log(add(1,2))	//3
//测试加5加法器
console.log(add5(3))	//8
//函数柯里化创建加5加法器
var add5 = curry(add,5);
console.log(add5(7));	//12
//7+8
var add7and8 = curry(add,7,8);
console.log(add7and8());	//15
 **/
 
//重写bind
function bind(fn,context){
	//缓存数组slice方法
	var Slice = Array.prototype.slice,
		//从第三个参数开始截取参数(包括第三个参数)
		args = Slice.call(arguments,2);
	//返回新方法
	return function(){
		//将参数转化为数组
		var addArgs = Slice.call(arguments),
			//拼接参数
			allArgs = addArgs.concat(args);
		//对fn装饰并返回
		return fn.apply(context,allArgs);
	}
}

var demoData1 = {
	text:'这是第一组数据'
};
var demoData2 = {
	text:'这是第二组数据'
};

function demoFn(){
	console.log(arguments,this);
}


//var btn = document.getElementsByTagName('button')[0];
//var bindFn = bind(demoFn,btn,demoData1);
//bindFn();

//提供btn元素，demoData1参与对象
//var bindFn = bind(demoFn,btn,demoData1);
//chrome输出:[MouseEvent,Object]<button>按钮</button>

//提供btn元素,demoData1,demoData2参与对象
//var bindFn = bind(demoFn,btn,demoData1,demoData2);
//chrome输出： [MouseEvent,Object,Object] <button>按钮</button>

//提供P元素，demoData1参与对象
//var bindFn = bind(demoFn,p,demoData1);
//[MouseEvent,Object]<p>hello</p>

//兼容各个浏览器
if(Function.prototype.bind === undefined){
	Function.prototype.bind = function(context){
		//缓存数组slice方法
		var Slice = Array.prototype.slice;
		//从第二个参数截取参数
		var args = Slice.call(arguments,1);
		//保存当前函数引用
		var that = this;
		//返回新函数
		return function(){
			//将参数数组化
			var addArgs = Slice.call(arguments);
			//拼接函数，注意:传入的参数放在了后面
			var allArgs = args.concat(addArgs);
			//对当前函数装饰并返回
			return that.apply(context,allArgs);
		}
	}
}

//反柯里化
Function.prototype.uncurry = function(){
	//保存当前对象
	var that = this;
	return function(){
		return Function.prototype.call.apply(that,arguments);
	}
}

//获取校验方法
var toString = Object.prototype.toString.uncurry();
//测试对象数据类型
console.log(toString(function(){}));	//