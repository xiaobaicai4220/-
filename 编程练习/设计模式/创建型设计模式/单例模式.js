/** 单例模式  **/

/** 使用单例模式来管理小型代码库 
var A = {
	Util:{
		util_method1:function(){},
		util_method2:function(){}
		...
	}
	Tool:{
		...
	}
	...
}
**/

/**   使用单例模式实现静态变量  **/
var Conf = (function(){
	//私有变量
	var conf = {
		MAX_NUM:100,
		MIN_NUM:1,
		COUNT:1000
	}
	//返回取值器对象
	return{
		//取值器方法
		get:function(name){
			return conf[name]?conf[name]:null;
		}
	}
})();

/**  惰性单例   **/
var LazySingle = (function(){
	//单例实例引用
	var _instance = null;
	//单例
	function Single(){
		/*这里定义私有属性和方法*/
		return{
			publicMethod:function(){},
			publicProperty:'1.0'
		}
	}
	//获取单例对象接口
	return function(){
		//如果为创建单例将创建单例
		if(!_instance){
			_instance = Single();
		}
		//返回单例
		return _instance;
	}
})();