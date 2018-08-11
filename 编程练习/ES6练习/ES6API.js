
/***
 *@name ES6 新增语法
 *@author xiaobaicai
 *@startTime  2018/6/24
 *@lastTime   20187/11
 ***
 
***let ***
***const   ****
***global   ***

***  解构赋值 [] = []  {} = {} ***

***  字符串扩展  ***
**codePointAt()
**charCodeAt()
**fromCharCode()
**at()  chatAt()  normalize()
**includes() startsWith()  endsWith() 
**repeat() padStart() padEnd()
**模板字符串 ``  String.raw

***  正则的扩展  ***
**new RegExp(regx,mode)   /regx/mode 
**RegExp.prototype[Symbol.match] [Symbol.replace] [Symbol.search] [Symbol.split]
**修饰符u y  g i s
**.test()  .exec() 
**属性, sticky flags 
**具名组匹配 

***   数值扩展   ***
**isFinite()   isNaN()  
**parseInt()   parseFloat()   isInteger()
**EPSILON isSafeInteger() 
**Math.trunc()  Math.sign()  cbrt() clz32() imul()  fround() hypot()
**Math.expm1()  log1p()  log10()  log2() 
**Math.sinh()  cosh()  tanh()  asinh()  acosh()  atanh() 
**

***   函数的扩展  ***
**函数参数的默认值
*基本用法
*与解构赋值默认值结合使用
*参数默认值的位置
*函数的length属性
*作用域
**箭头函数
**尾调用优化

***   数组的扩展  ***
**扩展的运算符
  [1,...[1,2,3]] = [1,1,2,3]
**Array.from() 将类似数组的对象额可迭代的对象转化为可遍历对象
**Array.of()  将一组值转化为数组
**Array.prototype.copyWithin(target,start=0,end=this.length)
*find()  findIndex()
*fill()
*entries(),key(),values()
*includes()

***  对象的扩展   ***
**属性和方法的简洁写法
 var foo = "bar";
 var baz = {foo};
 baz //{foo:'bar'};
 
 var o = {
	 method(){
		 return "hello!";
	 }
 }
**setter 和 getter
*Object.is() 同值相等
 Object.is('foo','foo');
*Object.assign(target,source1,source2);
**属性的遍历
*for..in  Object.keys(obj)  Object.getOwnPropertyNames(obj) 
 Object.getOwnPropertySymbols(obj)
 Reflect.ownKeys(obj)
**__proto__属性，
*Object.setPrototypeOf(object,prototype)
*Object.getPrototypeOf(object)
**Object.keys()  Object.values()  Object.entries()

*Object.getOwnPropertyDescriptors(obj,attribute)
 返回某个对象属性的描述符号


***  Symbol  ***
**JavaScript中第七中数据类型:undefined,null,Boolean,String,Number,Object
*定义 var s = Symbol(str)
*Symbol.for()  Symbol.keyFor()
	
**内置Symbol值
*[Symbol.hasInstance]
*[Symbol.isConcatSpreadable]
*[Symbol.species]
*[Symbol.match]
*[Symbol.replace]
*[Symbol.search]
*[Symbol.split]
*[Symbol.iterator]
*[Symbol.toPrimitive]
*[Symbol.toStringTag]
*[Symbol.unscopables]

***  Set和Map数据结构   ***
*定义新Set :  const a = new Set([1,2,3,4]);
*Set的属性和方法
*Set.prototype.constructor
*Set.prototype.size
* add(value)  delete(value)  has(value) clear()
*WeakSet()

*定义新Map:  const a = new Map([['name',"xiaobaicai"],['age',12]])
*方法:  a.set('sex','male')
*       a.get('sex')
        a.has('sex')
		a.delete('sex')
		a.clear()

***  Proxy ***
*定义一个Proxy
 var proxy = new Proxy(obj,handler)

*handler例子
 var handler = {
	 get:function(target,name){
		 if(name === 'prototype'){
			 return Object.prototype;
		 }
		 return 'Hello, '+name;
	 }
 }

*拦截器方法
 get(target,propKey,receiver)
 set(target,propKey,value,receiver)
 has(target,propKey)
 deleteProperty(target,propKey)
 ownKeys(target)
 getOwnPropertyDescriptor(target,propkey)
 defineProperty(target,propKey,propDesc)
 preventExtensions(target)
 getPrototypeOf(target)
 isExtensible(target)
 setPrototypeOf(target,proto)
 apply(target,object,args)
 construct(target,args)
 
*Proxy.revocable():返回一个可取消的Proxy实例
 let target = {};
 let handler = {};
 let {proxy,revoke} = Proxy.revocable(target,handler);
 proxy.foo = 123;  //proxy.foo = 123
 revoke()
 proxy.foo //TypeError:Revoked
 
*** Reflect  ***
*实现对象的默认行为
*静态方法
 Reflect.apply(target,thisArg,args)
 Reflect.construct(target,args)
 Reflect.get(target,name,receiver)
 Reflect.set(target,name,value,receiver)
 Reflect.defineProperty(target,name,desc)
 Reflect.deleteProperty(target,name)
 Reflect.has(target,name)
 Reflect.ownKeys(target)
 Reflect.isExtensible(target)
 Reflect.preventExtensions(target)
 Reflect.getOwnPropertyDescriptor(target,name)
 Reflect.getPrototypeOf(target)
 Reflect.setPrototypeOf(target,prototype)

*** Promise  ***
  eg:var p1 = new Promise((resolve,reject)=>reject(new Error("hello")))
	 p1.then(value=>console.log(value))
	 p1.reject(error=>console.log(error))
  promise.prototype.then()
  Promise.prototype.catch()
  Promise.all()
  Promise.race()
  Promise.resolve()
    eg: var jsPromise = Promise.rsolve($.ajax('/whatever.json'))
  Promise.reject()
    eg:var p Promise.reject("出错了");
  done()
  finally()
  
*** Iterator和for...of  ***
  默认Iterator接口  [Symbol.iterator]
  yield* 
  return() throw()
  
***  Generator  ***
  eg: function *foo(){
		yield 1;
		yield 2;
		yield 3;
		return 4;
		}
  Generator.prototype.throw()  在函数体外抛出错误，然后在Generator函数体内捕获
  Generator.prototype.return() 返回给定的值，并终结Generator函数的遍历
  yield* 表达式
  
*** Generator函数的异步应用  ***

*** async函数  ***
  eg: var asyncReadFile = async function(){
		var f1 = await readFile('etc/fstab');
		var f2 = await readFile('etc/shells');
		console.log(f1.toString());
		console.log(f2.toString());
	};