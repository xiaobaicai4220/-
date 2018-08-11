//单体模式定义命名空间
var A ={};
/***
//添加绑定事件方法on
A.on = function(dom,type,fn){
	if(dom.addEventListener){
		dom.addEventListener(type,fn,false);
	}else if(dom.attachEvent){
		dom.attachEvent('on'+type,fn);
	}else{
		dom['on'+type] = fn;
	}
}
**/

/** 加载即执行 **/
//添加绑定事件方法on
A.on = function(dom,type,fn){
	//如果支持addEventListener方法
	if(document.addEventListener){
		//返回新定义方法
		return function(dom,type,fn){
			dom.addEventListener(type,fn,false);
		}
	//如果支持attachEvent方法(IE)
	}else if(document.attachEvent){
		//返回新定义方法
		return function(dom,type,fn){
			dom.attachEvent('on'+type,fn);
		}
	//定义on方法
	}else{
		return function(dom,type,fn){
			dom['on' + type ] =fn;
		}
	}
}();

/** 惰性执行  
//添加绑定事件方法on
A.on = function(dom,type,fn){
	//如果支持addEventListener方法
	if(dom.addEventListener){
		//显示重定义on方法
		A.on = function(dom,type,fn){
			dom.addEventListener(type,fn,false)；
		}
	}else if(dom.attachEvent){
		A.on = function(dom,type,fn){
			dom.attachEvent('on'+type,fn)；
		}
	}else{
		return function(dom,type,fn){
			dom['on'+type] = fn;
		}
	}
	//执行重定义on方法
	A.on(dom,type,fn);
}();
**/
/**
A.on(document.body,'click',function(){
	alert(l1);
})
**/

/**创建XHR对象
function createXHR(){
	//标准浏览器
	if(typeof XMLHttpRequest != "undefined"){
		return new XMLHttpRequest();
	//IE浏览器
	}else if(typeof ActiveXObject != "undefined"){
		if(typeof arguments.callee.activeXString != "string"){
			var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
				i = 0,
				len = versions.length;
			//遍历并设置版本
			for(;i<len;i++){
				try{
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				}catch(ex){
				}
			}
		}
		return new ActiveXObject(arguments.callee.activeXString);
	//对不支持的浏览器抛出错误提示
	}else{
		throw new Error("你的浏览器不支持Ajax");
	}
}
**/
/** 测试 
var xhr = new createXHR();
console.log(xhr);
**/

//对上面的代码进行优化

/**
//第一种 加载时损失性能，但是第一次调用时不损失性能
var createXHR = (function(){
	if(typeof XMLHttpRequest != "undefined"){
		return function(){
			return new XMLHttpRequest();
		};
	}else if(typeof ActiveXObject != "undefined"){
		return function(){
			if(typeof arguments.callee.activeXString != "string"){
				var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
					i = 0,
					len = versions.length;
				//遍历并设置版本
				for(;i<len;i++){
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					}catch(ex){
					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		};
	}else{
		return function(){
			throw new Error("No xhr object available");
		};
	}
})();
**/
/**  测试 
var xhr = new createXHR();
console.log(xhr);
 **/
 
//第二种 加载时不损失性能,但是第一次调用时损失性能
function createXHR(){
	if(typeof XMLHttpRequest != "undefined"){
		return function(){
			return new XMLHttpRequest();
		};
	}else if(typeof ActiveXObject != "undefined"){
		return function(){
			if(typeof arguments.callee.activeXString != "string"){
				var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
					i = 0,
					len = versions.length;
				//遍历并设置版本
				for(;i<len;i++){
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					}catch(ex){
					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		};
	}else{
		return function(){
			throw new Error("No xhr object available");
		};
	}
	return createXHR();
}

/**测试 **/
var xhr = new createXHR();
console.log(xhr);