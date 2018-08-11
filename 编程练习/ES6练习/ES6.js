/***
 *@name  在ES6特效上添加的函数扩展库
 *@plain 充分发挥ES6新特性
 ***/


/**尾递归调用 **/
function tco(f){
	var value;
	var active = false;
	var accumulated = [];
	return function accumulator(){
		accumulated.push(arguments);
		if(!actuve){
			active = true;
			while(accumulated.length){
				value = f.apply(this,accumulated.shift());
			}
			active = false;
			return value;
		}
	};
}

var sum = tco(function(x,y){
	if(y>0){
		return sum(x+1,y-1)
	}
	else{
		return x
	}
});
sum(1,100000)

/**利用内置Symbol值定制函数的例子 **/

//Symbol.hasInstance
class Even{
	static [Symbol.hasInstance](obj){
		return Number(obj)%2 === 0;
	}
}
1 instanceof Even //false
2 instanceof Even //true

//Symbol.isConcatSpreadable
let obj = {length:2,0:'c',1:'d'};
['a','b'].concat(obj,'e') //['a','b',obj,'e']
obj[Symbol.isConcatSpreadable] = true;
['a','b'].concat(obj,'e')  //['a','b','c','d','e']

//Symbol.species
class MyArray extends Array{
	static get [Symbol.species](){return Array;}
}
var a = new MyArray(1,2,3);
var mapped = a.map(x=>x*x);
mapped instanceof MyArray  //false
mapped instanceof Array  //true

//Symbol.match
class.MyMatcher{
	[Symbol.match](string){
		return 'hello world'.indexOf(string);
	}
}
'e'.match(new MyMatcher()) //1

//Symbol.replace
String.prototype.replace(searchValue,replaceValue)
//等同于 searchValue[Symbol.replace](this,replaceValue)

//Symbol.search
String.prototype.search(regexp)
//等同于
regexp[Symbol.search](this)
class MySearch{
	constructor(value){
		this.value = value;
	}
	[Symbol.search](string){
		return string.indexOf(this.value);
	}
}
'foobar'.search(new MySearch('foo'))  //0

//Symbol.split
String.prototype.split(separator,limit)
//等同于
separator[Symbol.split](this,limit)
