/** 扩展继承  **/
function inheritObject(o){
	function F(){}
	F.prototype = o;
	return new F();
}
//寄生式继承
function inheritPrototype(subClass,superClass){
	var p = inheritObject(superClass.prototype);
	p.constructor = subClass;
	subClass.prototype = p;
}

/***   装饰者   
 *name: 鼠标事件装饰器
 *@param  input:元素ID
 *@param  fn:元素添加的绑定事件
 *eg: decorator("xiaobaicai",function(){console.log("xiaobaicai")});
 *translate:  给ID为xiaobaicai的元素添加鼠标点击绑定函数
 ***/
var decorator = function(input,fn){
	//获取事件源
	var input = docuemnt.getElementById(input);
	//若事件源已经绑定事件
	if(typeof input.onclick === 'function'){
		//缓存事件源原有回调函数
		var oldClickFn = input.onclick;
		//为事件源定义新的事件
		input.onclick = function(){
			//事件源原有回调函数
			oldClickFn();
			//执行事件源新增回调函数
			fn();
		}
	}else{
		//事件源未绑定事件，直接为事件源添加新增回调函数
		input.onclick = fn;
	}
	//做其他事情
}


/*** 		 观察者 			***
 *@function:  Observer.regist(type,fn)：注册一个事件
 *@function:  Observer.fire(type,fn)：发出一个事件
 *@function:  Observer.remove(type,fn)：移除一个已注册的事件
 ***/
var Observer = (function(){
	var __messages = {};
	return{
		/***
		 *name:		注册一个事件
		 *@param   	type:  注册事件的事件类型
		 *@param	fn:	  注册的事件的回调函数
		 *eg: Observer.regist("xiaobaicai",function(){console.log("发现小白菜")});
		 ***/
		regist:function(type,fn){
			if(typeof __messages[type] === 'undefined'){
				__messages[type] = [fn];
			}else{
				__messages[type].push(fn);
			}
		},
		/***
		 *name:		发出一个事件
		 *@param    type:	事件类型
		 *@param	args:	传参
		 *@param 	注册事件函数接收 {type:type,args:args};
		 *eg：Observer.fire("xiaobaicai",hello);
		 ***/
		fire:function(type,args){
			if(!__messages[type])
				return;
			var events = {
				type:type,	
				args:args||{}
			},
			i = 0,
			len = __messages[type].length;
			for(;i<len;i++){
				__messages[type][i].call(this,events);
			}
		},
		/***
		 *name:		移除一个事件
		 *@param 	type:	事件类型
		 *@param	fn:		事件类型对象的函数监听
		 *eg: Observer.remove("xiaobaicai",xiaobaicai);  移除"xiaobaicai"事件上的xiaobaicai函数
		 *注意一次只能移除一个函数,不传fn时一个都不移除
		 ***/
		remove:function(type,fn){
			if(__messages[type] instanceof Array){
				var i = __messages[type].length - 1;
				for(;i>=0;i--){
					__messages[type][i] === fn && __messages[type].splice(i,1);
				}
			}
		}
	}
})();


/***  	链式调用	 ***
 *选择符$
 *接口
 *$.extend($,object)：在$的内部作用域中扩展
 *$.extend($.fn,object)：扩展$的实例化对象
 *$.attr:调用$内部作用域中的属性
 *$(selector).attr:调用$实例化对象作用域中的属性
 **/

//selector选择符，context上下文
var $ = function(selector,context){
	return new $.fn.init(selector,context);
};	
$.fn = $.prototype = {
	constructor:$,
	init:function(selector,context){
		//获取元素长度
		this.length = 0;
		//默认获取元素的上下文为document
		context = context||document;
		//如果是id选择符 按位非将-1转化为0，转化为布尔值false
		if(~selector.indexOf('#')){
			//截取ID并选择
			this[0] = document.getElementById(selector.slice(1));
			this.length = 1;
			//如果是元素名称
		}else{
			//在上下文中选择元素
			var doms = context.getElementsByTagName(selector),
				i = 0,	//从第一个开始筛选
				len = doms.length;		//获取元素长度
			for(;i<len;i++){
				//压入this中
				this[i] = doms[i];
			}
			//校正长度
			this.length = len;
		}
		//保存上下文
		this.context = context;
		//保存选择符
		this.selector = selector;
		//返回对象
		return this;
	},
	length:2,
	size:function(){
		return this.length;
	},
	/**增强数组
	push:[].push,
	sort:[].sort,
	splice:[].splice
	**/
}
$.fn.init.prototype = $.fn;

//对象拓展
$.extend = $.fn.extend = function(){
		//拓展对象从第二个参数算起
	var i = 1,
		//获取参数对象
		len = arguments.length,
		//第一个参数为源对象
		target = arguments[0],
		//拓展对象中属性
		j;
	//如果只传一个参数
	if(i == len){
		//源对象为当前对象
		target = this;
		//i从0计数
		i--;
	}
	//遍历参数中拓展对象
	for(;i<len;i++){
		//遍历拓展对象中的属性
		for(j in arguments[i]){
			//拓展源对象
			target[j] = arguments[i][j];
		}
	}
	//返回源对象
	return target;
}

/***	$属性扩展    ***
 *$.fn.on(type,fn):绑定事件
 *$.camelCase(str):"-"转驼峰
 *$.fn.css(object):设置css样式
 *$.fn.attr(object):设置属性
 *$.fn.html(str):设置innerHTML
 ***/

$.extend($,{
	//将'-'分割线转化为驼峰式,如:'border-color'->'borderColor'
	camelCase:function(str){
		return str.replace(/\-(\w)/g,function(all,letter){
			return letter.toUpperCase();
		});
	}
});

$.extend($.fn,{
	//添加事件
	on:(function(){
		//标准浏览器DOM2级事件
		if(document.addEventListener){
			return function(type,fn){
				var i = this.length - 1;
				//遍历所有元素事件
				for(;i>=0;i--){
					this[i].addEventListener(type,fn,false);
				}
				//返回源对象
				return this;
			}
			//IE浏览器DOM2级事件
		}else if(document.attachEvent){
			return function(type,fn){
				var i = this.length - 1;
				for(;i>=0;i--){
					this[i].addEvent('on' + type,fn);
				}
				return this;
			}
			//不支持DOM2级事件浏览器添加事件
		}else{
			return function(type,fn){
				var i = this.length - 1;
				for(;i>=0;i--){
					this[i]['on'+type] = fn;
				}
				return this;
			}
		}
	})(),
	//设置css样式
	css:function(){
		var arg = arguments,
			len = arg.length;
		if(this.length<1){
			return this;
		}
		//只有一个参数时
		if(len === 1){
			//如果为字符串则为获取第一个元素css样式
			if(typeof arg[0] === 'string'){
				//IE
				if(this[0].currentStyle){
					return this[0].currentStyle[name];
				}else{
					return getComputedStyle(this[0],false)[name];
				}
			//为对象时则设置多个样式
			}else if(typeof arg[0] === 'object'){
				for(var i in arg[0]){	//遍历每个样式
					for(var j = this.length - 1;j>=0;j--){
						//调用拓展方法camelCase将'-'分割线转化为驼峰式
						this[j].style[$.camelCase(i)] = arg[0][i];
					}
				}
			}
		//两个参数则设置一个样式
		}else if(len == 2){
			for(var j = this.length-1;j>= 0;j--){
				this[j].style[$.camelCase(arg[0])] = arg[1];
			}
		}
		return this;
	},
	//设置属性
	attr:function(){
		var arg = arguments,
			len = arg.length;
		if(this.length<1){
			return this;
		}
		//如果一个参数
		if(len === 1){
			//为字符串则获取第一个元素属性
			if(typeof arg[0] === 'string'){
				return this[0].getAttribute(arg[0]);
			//为对象设置每个元素的多个属性
			}else if(typeof arg[0] === 'object'){
				for(var i in arg[0]){
					for(var j = this.length - 1;j>=0;j--){
						this[j].setAttribute(i,arg[0][i]);
					}
				}
			}
		//两个参数则设置每个元素单个属性
		}else if(len === 2){
			for(var j = this.length - 1;j>=0;j--){
				this[j].setAttribute(arg[0],arg[1]);
			}
		}
		return this;
	},
	//获取或者设置元素的内容
	html:function(){
		var arg = arguments,
			len = arg.length;
		//无参数则获取第一个元素的内容
		if(len === 0){
			return this[0] && this[0].innerHTML;
		//一个参数则设置每一个元素的内容
		}else{
			for(var i = this.length - 1;i>=0;i--){
				this[i].innerHTML = arg[0];
			}
		}
		return this;
	}
});
