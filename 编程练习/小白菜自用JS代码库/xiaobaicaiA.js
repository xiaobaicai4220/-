/** 基础函数拓展  **/
//单继承 属性复制
var extend = function(target,source){
	for(var property in source){
		target[property] = source[property];
	}
	return target;
};
//多继承 多属性复制
var mix = function(){
	var i = 1,
		len = arguments.length,
		target = arguments[0],
		arg;
	for(;i<len;i++){
		arg = arguments[i];
		for(var property in arg){
			target[property] = arg[property];
		}
	}
	return target;
};


/** 状态模式  **/
var MarryState = function(){
	//内部状态私有变量
	var _currentState = {},
		//动作与状态方法映射
		states = {
			jump:function(){},
			move:function(){},
			shoot:function(){},
			squat:function(){}
		}
	//动作控制类
	var Action = {
			changeState:function(){
				var arg = arguments;
				_currentState = {};
				if(arg.length){
					for(var i = 0,len = arg.length;i<len;i++){
						_currentState[arg[i]] = true;
					}
				}
				return this;
			},
			//执行动作
			goes:function(){
				console.log('触发一次动作');
				for(var i in _currentState){
					states[i]&&states[i]();
				}
				return this;
			}
	}
	return{
		change:Action.changeState,
		goes:Action.goes
	}
}

/** test **/
MarryState()
	.change('jump','shoot')
	.goes()
	.goes()
	.change('shoot')
	.goes()
	
/**  策略模式   **/
var InputStrategy = function(){
	var strategy = {
		A:funciton(){},
		B:function(){},
		C:function(){}
	}
	return{
		Strategy:function(type,value){
			return strategy[type] && stragegy[type](value)
		},
		addStrategy:function(type,fn){
			strategy[type]=fn;
		}
	}
}();

/** 中介者  **/
var Mediator = function(){
	var _msg = {};
	return{
		/** 订阅方法  **/
		register:function(type,action){
			if(_msg[type])
				_msg[type].push(action);
			else{
				_msg[type] = [];
				_msg[type].push(action);
			}
		},
		send:function(type){
			if(_msg[type]){
				for(var i =0,len=_msg[type].length;i<len;i++){
					_msg[type][i] && _msg[type][i]();
				}
			}
		}
	}
}

/** 备忘录  **/
var Page = function(){
	var cache = {};
	return function(page,fn){
		//判断该页是否在缓存中
		if(cache[page]){
			//恢复到该页状态，显示该页内容
			showPage(page,cache[page]);
			//执行成功回调函数
			fn && fn();
		}else{
			//若缓存Cache中无该页数据
			$.post('./data/getNewsData.php',{
				//请求携带page页码
				page:page
			},function(res){
				//成功返回
				if(res.errNo == 0){
					//显示该页数据
					showPage(page,res.data);
					//将该页数据种入缓存中
					cache[page] = res.data;
					//执行成功回调函数
					fn && fn();
				}else{
					//处理异常
				}
			})
		}
	}
}()

//下一页按钮点击事件
$('#next_page').click(function(){
	//获取新闻内容元素
	var $news = $("#news-content"),
		//获取新闻内容元素当前页数据
		page = $news.data('page');
	//获取并显示新闻
	Page(page,function(){
		//修正新闻内容元素当前页数据
		$news.data('page',page+1);
	})
});

/**  迭代器模式   **/
var Iterator = function(items,container){
	var container = container && document.getElementById(container)||document,
		items = container.getElementsByTagName(items),
		length = items.length,
		index = 0;
	var splice = [].splice;
	return{
		first:function(){
			index = 0;
			return itens[index];
		},
		last:function(){
			index = length - 1;
			return items[index];
		},
		pre:function(){
			if(--index>0){
				return items[index];
			}else{
				index = 0;
				return null;
			}
		},
		next:function(){
			if(++index <length){
				return items[index];
			}else{
				index = length - 1;
				return null;
			}
		},
		get:function(num){
			index = num>=0?num%length:num%length+length;
			return items[index];
		},
		dealEach:function(fn){
			var args = splice.call(arguments,1);
			for(var i =0;i<length;i++){
				fn.apply(items[i],args);
			}
		},
		dealItem:function(num,fn){
			fn.apply(this.get(num),splice.call(arguments,2))
		},
		exclusive:function(num,allFn,numFn){
			this.dealEach(allFn);
			if(Object.prototype.toString.call(num) === "[object Array]"){
				for(var i = 0,len=num.length;i<len;i++){
					this.dealItem(num[i],numFn);
				}
			}else{
				this.dealItem(num,numFn);
			}
		}
	}
}

/** 委托模式  **/
g('btn_container').onclick = function(e){
	//获取触发事件元素
	var target = e && e.target || window.event.srcElement;
	if(target.id === 'btn'){
		g('btn_container').innerHTML = '触发了事件';
	}
}

/** 数据访问对象模式  **/
/***
 *本地存储类
 *参数preID		本地存储数据库前缀
 *参数timeSign	时间戳与存储数据之间的拼接符
 ***/
 
var BaseLocalStorage = function(preId,timeSign){
	//定义本地存储数据库前缀
	this.preId = preId;
	//定义时间戳与存储数据之间的拼接符
	this.timeSign = timeSign || '|-|';
}

//本地存储类原型方法
BaseLocalStorage.prototype = {
	//操作状态
	status:{
		SUCCESS:0,	//成功
		FAILURE:1,	//失败
		OVERFLOW:2,	//溢出
		TIMEOUT:3   //过期
	},
	//保存本地存储链接
	storage:localStorage || window.localStorage,
	//获取本地存储数据库数据真实字段
	getKey:function(key){
		return this.preId + key;
	},
	
	/***添加(修改)数据
	 *参数key			数据字段标识
	 *参数value:		数据值
	 *参数callbacak		回调函数
	 *参数time			添加时间
	 ***/
	set:function(key,value,callback,time){
		//默认操作状态是成功
		var status = this.status.SUCCESS,
			//获取真实字段
			key = this.getKey(key);
		try{
			//参数时间参数时获取时间戳
			time = new Date(time).getTime() || time.getTime();
		}catch(e){
			//为传入时间参数或者时间参数有误获取默认事件:一个月
			time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
		}
		try{
			//向数据库中添加数据
			this.storage.setItem(key,time+this.timeSign + value);
		}catch(e){
			//溢出失败，返回溢出状态
			status = this.status.OVERFLOW;
		}
		//有回调函数则执行回调函数并传入参数操作状态，真实数据字段标识以及存储数据值
		callback && callback.call(this,status,key,value);
	},
	
	/**获取数据
	 *参数key		数据字段标识
	 *参数callbacak 回调函数
	 **/
	get:function(key,callback){
		//默认操作状态是成功
		var status = this.status.SUCCESS,
			//获取
			key = this.getKey(key),
			//默认值为空
			value = null,
			//时间戳与存储数据之间的拼接符长度
			timeSignLen = this.timeSign.length,
			//缓存当前对象
			that = this,
			//时间戳与存储数据之间的拼接符起始位置
			index,
			//时间戳
			time,
			//最终获取的数据
			result;
		try{
			//获取字段对应的数据字符串
			value = that.storage.getItem(key);
		}catch(e){
			//获取失败则返回失败状态，数据结果为null
			result = {
				status:that.status.FAILURE,
				value:null
			};
			//执行回调并返回
			callback && callback.call(this,result.status,result.value);
			return result;
		}
		//如果成功获取数据字符串
		if(value){
			//获取时间戳与存储数据之间的拼接符起始位置
			index = value.indexOf(that.timeSign);
			//获取时间戳
			time = +value.slice(0,index);
			//如果时间未过期
			if(new Date(time).getTime() > new Date().getTime() || time == 0){
				//获取数据结果(拼接符后面的字符串)
				value = value.slice(index + timeSignLen);
			}else{
				//过期则结果为null
				value = null,
				//设置状态为过期状态
				status = that.status.TIMEOUT;
				//删除该字段
				that.remove(key);
			}
		}else{
			//未获取数据字符串状态为失败状态
			status = that.status.FAILURE;
		}
		//设置结果
		result = {
			status:status,
			value:value
		};
		//执行回调函数
		callback && callback.call(this,result.status,result.value);
		//返回结果
		return result;
	},
	/**删除数据
	 *参数key		数据字段标识
	 *参数callback	回调函数
	 **/
	remove:function(key,callback){
		//设置默认操作状态为失败
		var status = this.status.FAILURE,
			//获取实际数据字段名称
			key = this.getKey(key),
			//设置默认数据结果为空
			value = null;
		try{
			//获取字段对应的数据字符串
			value = this.storage.getItem(key);
		}catch(e){}
		//如果数据存在
		if(value){
			try{
				//删除数据
				this.storage.removeItem(key);
				//设置操作成功
				status = this.status.SUCCESS;
			}catch(e){}
		}
		//执行回调 注意传入回调函数中的数据值：如果操作状态成功则返回真实的数据结果，否则返回空
		callback && callback.call(this,status,status > 0?null:value.slice(value.indexOf(this.timeSign)+this.timeSign.length))
	}
}

/** 节流模式  **/
var throttle = function(){
	var isClear = arguments[0],fn;
	if(typeof isClear === 'boolean'){
		fn = arguments[1];
		fn.__throttleID && clearTimeout(fn.__throttleID);
	}else{
		fn = isClear;
		param = arguments[1];
		var p =extend({
			context:null,
			args:[],
			time:300
		},param);
		arguments.callee(true,fn);
		fn.__throttleID = setTimeout(function(){
			fn.apply(p.context,p.args)
		},p.time)
	}
}


/**  等待者模式   **/
var Waiter = function(){
	