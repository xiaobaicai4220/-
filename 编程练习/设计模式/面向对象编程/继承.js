/**  类式继承 
function SuperClass(){
	this.superClass = true;
}
SuperClass.prototype.getSuperValue = function(){
	return this.superValue;
};
function SubClass(){
	this.subValue = false;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function(){
	return this.subValue;
}; **/

/** 构造函数继承
function SuperClass(id){
	//引用类型公有属性
	this.books = ['javascript','html','css'];
	this.id = id;
}
SuperClass.prototype.showBooks = function(){};
//声明子类
function SubClass(id){
	SuperClass.call(this,id);
} **/

/** 组合继承  
function SuperClass(id){
	//引用类型公有属性
	this.books = ['javascript','html','css'];
	this.id = 1;
}
SuperClass.prototype.showBooks = function(){};
function SubClass(name,time){
	SuperClass.call(this,name);
	this.time = time;
}
SubClass.prototype = new SuperClass();
**/

//原型式继承
function inheritObject(o){
	function F(){}
	F.prototype = o;
	return new F();
}


/** 寄生式继承 **/
var book = {
	name:'js book',
	alikeBook:["css book","html book"]
};
function createBook(obj){
	var o = inheritObject(obj);
	o.getName = function(){
		console.log(name);
	};
	return o;
}

