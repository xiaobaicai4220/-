/** 为类原型对象赋值的两种方式 
var Book = function(){
	this.book = 1;
}
Book.prototype.display = function(){
	console.log("this is a book");
};
Book.prototype = {
	displayA:function(){
		console.log("this is a book too");
	}
};
**/
/** 属性与方法封装 
var A = function(id,name,price){
	//私有属性
	var num = 1;
	//私有方法
	function checkId(){
	
	};
	//特权方法
	this.getName = function(){};
	this.getPrice = function(){};
	this.setName = function(){};
	this.setPrice = function(){};
	//对象公有属性
	this.id = id;
	//对象公有方法
	this.copy = function(){};
	//构造器
	this.setName(name);
	this.setPrice(price);
};
**/
/**  闭包实现  **/
var Book = (function(){
	//静态私有变量
	var bookNum = 0;
	//静态私有方法
	function checkBook(name){};
	//返回构造函数
	return function(newId,newName,newPrice){
		//私有变量
		this.h = 1;
		var name,price;
		//私有方法
		function checkID(id){}
		//特权方法
		this.getName = function(){};
		this.getPrice = function(){};
		this.setName = function(){};
		this.setPrice = function(){};
		//公有属性
		this.id = newId;
		//公有方法
		this.copy = function(){};
		bookNum++;
		this.get=function(){
			return bookNum;
		};
		this.setName(name);
		this.setPrice(price);
	}
})();

Book.prototype = {
	//静态公有属性
	isJSBook:false,
	//静态公有方法
	display:function(){
		return bookNum;
	}
};

var Book = (function(){
	//静态私有变量
	var bookNum = 0;
	//静态私有方法
	function checkBook(name){};
	//创建类
	function _book(newId,newName,newPrice){
		//私有变量
		this.h = 1;
		var name,price;
		//私有方法
		function checkID(id){}
		//特权方法
		this.getName = function(){};
		this.getPrice = function(){};
		this.setName = function(){};
		this.setPrice = function(){};
		//公有属性
		this.id = newId;
		//公有方法
		this.copy = function(){};
		bookNum++;
		this.setName(name);
		this.setPrice(price);
	}
	//构建原型
	_book.prototype = {
		//静态公有属性
		isJSBook:false,
		//静态公有方法
		display:function(){}
	};
	//返回类
	return _book;
})();

/**  创建对象的安全模式  **/
var Book = function(title,time,type){
	//判断this是否是当前这个对象
	if(this instanceof Book){
		this.title = title;
		this.time = time;
	}else{
		return new Book(title,time,type);
	}
}