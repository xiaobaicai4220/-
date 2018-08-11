/**简单工厂模式
var PopFactory = function(name){
	switch(name){
		case 'A':
			return new A();
		case 'B':
			return new B();
		case 'C':
			return new C();
	}
}
**/

-------------------------------------------------------

/** 安全的工厂方法 
var Factory = function(type,content){
	if(this instanceof Factory){
		var s = new this[type](content);
	}esle{
		return new Factory(type,content);
	}
}
//工厂原型中的基类
Factory.prototype = {
	Java:...
	UI:...
	javascript:...
}
**/

-------------------------------------------------------

/**抽象工厂模式**/

//抽象工厂方法
var VehicleFactory = function(subType,superType){
	//判断抽像工厂中是否有该抽象类
	if(typeof VehicleFactory[superType]==='function'){
		//缓存类
		function F(){};
		//继承父类属性和方法
		F.prototype = new VehicleFactory[superType]();
		//将子类constructor指向子类
		subType.constructor = subType;
		//子类原型继承"父类"
		subType.prototype = new F();
	}else{
		//不存在抽象类抛出错误
		throw new Error('为创建类对象');
	}
}
//小汽车抽象类
VehicleFactory.Car = function(){
	this.type = 'car';
}
VehicleFactory.Car.prototype = {
	getPrice:function(){
		return new Error('抽象方法');
	},
	getSpeed:function(){
		return new Error("抽象方法");
	}
}
//公交车抽象类
...

//抽象与实现
//宝马汽车类
var BMW = function(price,speed){
	this.price = price;
	this.speed = speed;
}
//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW,'car');
BMW.prototype.getPrice = function(){
	...
}
BMW.prototype.getSpeed = function(){
	...
}
