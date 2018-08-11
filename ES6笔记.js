/***
 *@name ES6笔记. 简单版
 *@plain 记录ES6中相比ES5 新增的特效，
 *@plain 此版本只记录一部分新增的重要的特性的原理，没有啃细节
 * author:xiaobaicai
 * startTime:2018-6-25
 ***/
 
/***
*** let 与const ***
**let :主要用与在块作用域中赋值
**let与var 的区别，
*编译器在编译时都先查找let和var命令，并声明变量("变量提升")
*两者的区别在于，let在变量提升后对变量加了2个锁：读锁,块作用域重复声明锁，
*其中读锁在对变量写数据后解除，块作用域重复声明锁在块作用域中一直存在
*而var在变量提升后一个锁都没有加，所以变量提升后，可读可写可重复声明、
*const用于声明一个常数，加锁状态和let一样,
*const声明的常量是一种指针地址常量，即只是指针指向的地址不变，地址空间中的值可变
*
*块作用域：注意ES6中新增的块作用域只是对let,const而言多了一个作用域，对var  function 这种声明语句来说 还是存在变量提升，块作用域会污染块之外的作用域。
*
***  变量的解构赋值  ***
**ES6中新增解构赋值，解构赋值有两种形式如下
*第一种: [] 
*eg: var [a,[b,c]] = [1,[2,3]] //a=1,b=2,c=3
*第二种：{}
*eg: var {A,b:a,c:{d:e}} = {A:1,b:2,c:{d:3}} 
*plain:  //A=1，a=2,e=3
*plain:  //注意上面的语句只对A a e 3个变量赋值了,  b,c,d是匹配模式而不是变量。
*
*var [a,b] = [1,2] 的真实执行情况如下
*var a,b;
*if([1,2][0] !== undefined){
	a = [1,2][0];
 }else{
	 a = undefined;
 }
 ...
 
***  字符串的扩展 ***--------------------------------------------------------
**for...of.. 语法
*eg for(let a of "abc"){console.log(a)} //"a"/n "b"/n "c"/n

**codePointAt()语法
*拓展了原来的str.charAt(index)以字节为对象读取字符的方式

*新增str.codePointAt(index) 支持以字符为对象读取字符(可以读取需要两个字节编码的字符)，不过该方法还是有缺点.没上面用. 233

**normalize()
*支持Unicode字符串编码正规化

**includes() startsWith()  endsWith()
*三者都返回boolean值,并都支持第二个参数表示开始的位置
*eg： var s = 'Hello World';
*	  s.startsWith("World",6);

**repeat()
*返回新的字符串
*eg:  'x'.repeat(3)  //'xxx'

**padStart() padEnd()
*补全长度
*eg:  'x'.padStart(3.'ab')  //'abx'

**模板字符串
*格式 `str1${param1}str2${param2}` 
* ${param} 中可以是参数也可以是表达式，返回结果为最终结果
* 模板字符串可也可用于函数传参,
* func`str1${param1}str2${param2}`
*=》 func(arguments={0:{str1,str2},1:param1,2,param2})

**raw()
*充当模板字符串的处理函数
*eg: String.raw`xiao${"bai"}cai` //xiaobaicai

***  正则表达式的扩展  ***--------------------------------------------------
**正则表达式的构造
*1:var regex = new RegExp('xyz','i');
*2: var regex = /xyz/i
** u修饰符
*用于匹配码点大于 0xFFFF的Unicode字符
*支持regex中和str中出现\uUnicode 形式的字符

** i修饰符
*葫芦大小写的匹配

**s修饰符
*dotAll模式， 在该模式中 . 可以匹配行终止符

** y修饰符
*y修饰符和g修饰符类似,都从剩余部分开头开始匹配.区别在于y修饰符是从开头开始匹配
*eg:  /a+/y.exec("aaa_aa_a");  //aaa
      /a+/y.exec("_aa_a");	//null
	  /a+/g.exec("_aa_a");  //aa
*regex在字符中的使用
*eg: 'a1a2a3'.match(/a\d/y)  //['a1']
     'a1a2a3'.match(/a\d/gy) //['a1','a2','a3']
	 'a1a2a3'.replace(/a\d/y,1) //'1a2a3'
	 'a1a2a3'.split(/a2/)  //['a1','a3']
	 'a1a2a3'.search(/a/)  //2

**sticky属性
*用来查看regex是否使用了y属性
* /a\d/y.sticky  //true

** flags属性
* 返回regex的修饰符
*eg: /a\d/yg.flags  //"yg"
**source属性
*返回regex的正文
*eg: /a\d/yg.source  //"a\\d"

** 后行断言 
/x(?=y)/ x只有在y前面才匹配
/x(?!y)/ x只有不在y前面才匹配
/(?<=y)x/ x只有在y后面才匹配
/(?<!y)x/ x只有不在y后面才匹配

**Unicode属性类
*eg: \p{Number} 匹配一个数字

**具名组匹配
*eg: const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
	 const matchObj = RE_DATE.exec('1999-12-31');
	 const year = matchObj.groups.year;  //1999
	 const month = matchObj.groups.month;	//12
	 const day = mathcObj.groups.day;    //31

**解构赋值和替换
*let {groups:{one,two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
		//one :foo  two:bar
		
**regex具名组匹配的引用
*\k<组名>
* eg:  /^(?<word>[a-z]+)!\k<word>$/.test('abc'!'abc') //true
	   /^(?<word>[a-z]+)!\k<word>$/.test('abc'!'ab') //false
*\n 数字引用
*eg:   /^(?<word>[a-z]+)!(?<key>[a-z]+):\1$/.test('abc'!'ab':'abc')  //true

***  数值的扩展 ***----------------------------------------------------------
**二进制和八进制表示法
*二进制: 0B111 === 7 //true
*八进制：0O11 === 9 //true
*转十进制: Number(0B111) //7  

**Number.isFinite(), Number.isNaN()
*在两种方法都不会对非数值型的数据如str("12")进行默认转化.
*Number.ifFinite("12") //false
*Number.ifFinite(12) //true
*Number.isNaN("NAN") //false
*Number.isNaN(NAN) //true

**Number.parseInt(),Number.parseFloat()
*两种方法将全局parseInt() parseFloat()方法复制到了Number对象中，语义完全不变

**Number.isInteger()
*判断一个值是否是整数。需要注意的是JavaScript中整数和浮点数是同样的存储方式，所以3和3.0为同一个值
*eg: Number.isInteger(25) //true
	 Number.isInteger(25.0) //true
	 Number.isInteger(25.1) //false
	 Number.isInteger("15") //false

**Number.EPSILON
*Number.EPSILON是一个极小的常量，用来为浮点数计算设置一个误差范围.
* eg：0.1+0.2  //0.30000000000000004
* eg: 0.1+0.2-0.3 < Number.EPSILON //true  小于该常量，认为得到了正确结果

**Number.isSafeInteger()
*JavaScript能够精确表示的整数范围在-2^53到2^53之间，超出这个范围就无法精确表示
*Number.MAX_SAFE_INTEGER：2**53-1  Number.MIN_SAFE_INTEGER：-2**53+1
*Number.isSafeInteger(2**53) //false

*** Math对象的扩展 ***-----------------------------------------------
**Math.trunc()
*去除小数部分，返回整数部分，该函数内部使用默认类型转换
*eg Math.trunc('1.23') //1
*eg Math.trunc('1.23#') //NAN

**Math.sign()
*对正数返回1 负数返回-1 0返回0 无法识别的返回NAN,内部同样有类型转换
*Math.sign("9"); //1
*Math.sign("8d"); //NAN

**Math.cbrt()
* 计算一个数的立方根

**Math.clz32()
*JavaScript的整数使用32位二进制形式表示，Math.clz返回一个数的32位无符号整数形式有多少个前导0
*eg: Math.clz(1) //31
*eg: Math.clz(2**34) //32

**Math.imul()
*返回两个数以32为带符号整数形式相乘的结果，返回的也是一个32位的带符号整数
*该函数主要用于超限整返回低位数
*Math.imul(0x7fffffff,0x7fffffff) //1

**Math.fround()
*返回一个数的单精度浮点数形式
*对于整数来说，返回结果不会有变化，区别在于那些无法用64个二进制位精确表示的
*小数。这时，Math.fround()方法会返回最接近这个小数的单精度浮点数
*eg: Math.fround(1.5) //1.5
	 Math.fround(1.337) //1.3370000123977661

**Math.hypot()
*返回所有参数平方和的平方根
*eg: Math.hypot(3,4) //5

**对数方法
*Math.expm1() = Math.exp(x)-1 = e**x-1
*Math.log1p(x) = Math.log(1+x) = ln(1+x)
*Math.log10(x)
*Math.log2(x)

**双曲函数方法
*Math.sinh(x):返回x的双曲正弦
*Math.cosh(x):返回x的双曲余弦
*Math.tanh(x):双曲正弦
*Math.asinh(x):反双曲正弦
*Math.acosh(x):反双曲余弦
*Math.atanh(x):反双曲余切

*** 函数的扩展  ***---------------------------------------------------
**函数参数默认值
* function log(x,y="world"){console.log(x,y);}
	log("hello","xiaobai") //hello xiaobai

**与解构赋值默认值结合使用
* function m(a=1;{b=2,c=3}){return a+b+c}
	m(4;{b:5,c:6})  //15

**参数默认值的位置**
*通常情况下，定义了默认值的参数应该是函数的尾参数，
*function f(x,y=5,z){return [x,y,z]}
*f() //[undefined,5,undefined]
*f(1) //[1,5,undefined]
*f(1,2) //[1,2,undefined]
 
**函数的length属性
*指定了默认值之后，函数的length属性将返回没有指定默认值的参数个数。
*注意如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数
*var a = function(a,b=2,c){};  //a.length = 1

**作用域
*一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域。
*等到初始化结束时，这个作用域就消失。

**rest参数
*引入rest参数(形式为"...变量名"),用于获取函数的多余参数，
*eg: function add(...values){var sum=0;for(let val of values){sum+=val};console.log(sum)};
*    add(1,2,3,4) //10

**严格模式
*ES6中规定只要函数参数使用了默认值，解构赋值或者扩展运算符，那么函数内部
*就不能显示设定为严格模式，否则就会报错

**name属性
*函数的name属性返回该函数的函数名
*eg (function(){}).name  //""
*eg  (function(){}).bind({}).name //bound
*eg  (new Function).name //anonymous
*eg  (function f(){}).name  //f

**箭头函数
*ES6允许使用箭头定义函数
* eg: var f = v => v;
  等同于 function f(v){return v};
*eg:  [1,2,3].map(x => x*x);  //[1,4,9]
*箭头函数注意事项
*1,函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象
*2,不可以作为构造函数。也就是说,箭头函数没有函数作用域，也不能使用new申请作用域
*3,不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替
*4,不可以使用yield命令，因此箭头函数不能用作Generator函数

**尾调用优化 
*只有不在用到外层函数的内部变量，内存函数的调用帧才会取代外层函数的调用帧，
*否则就无法进行"尾调用优化"
*尾调用优化实例：
*function f(){
	let m =1;
	let n =1;
	return g(m+n);
}  //f() 可直接化优化为g(2);
*不可尾调用优化实例
*function addOne(a){
	var one = 1;
	function inner(b){
		return b+one;
	}
	return inner(a);
}  //inner函数需要调用函数外的变量，one故不可进行尾调用优化


**尾递归
*函数调用自身成为递归。如果尾调用自身就称为尾递归
*尾递归实例
*非尾递归Fibonacci例子
function Fibonacci(n){
	if(n<=1){return 1};
	return Fibinacci(n-1)+Fibinacci(n-2);
}
*尾递归Fibonacci例子
function Fibinacci(n,ac1=1,ac2=1){
	if(n<=1){return ac2};
	return Fibinacci(n-1,ac2,ac1+ac2);
}

**严格模式
*ES6的尾调用优化只在严格模式下开启，正常模式是无效的，
*这是因为，在正常模式下函数内部有两个变量，可以跟踪函数的调用栈
  func.arguments返回调用时函数的参数 和 func.caller返回调用当前函数的函数

*** 数组的扩展 ***-----------------------------------------------------------

**扩展运算符
*扩展运算符是三个点(...),它如同rest参数的逆运算，将一个数组转化为用逗号分隔的参数序列
*eg:  ...[1,2,3]  //1,2,3
*eg:  [...[],1]  //1
*扩展运算符的运用
*1:合并数组
*eg: [...[1,2],...[3,4]] //[1,2,3,4]
*与解构赋值结合
*ES5中的 first = [1,2,3,4,5][0] rest= [1,2,3,4,5].slice(1)等同于下面.
*const[first,...rest] = [1,2,3,4,5]  //first //1  rest//[2,3,4,5]
*注意扩展运算符用于数组赋值，只能将其放在参数的最后一位
*2:函数的返回值
*3:字符串
*eg:  [...'hello'] //['h','e','l','l','o']
*4:实现了Iterator接口的对象，
*任何实现了Iterator接口的对象都可用扩展运算符转化为数组

**Array.from()
*Array.from()方法将两类对象转为真正的数组:
*类似数组的对象和可遍历的对象
*所谓类似数组的对象，本质特征只有一点，即必须具有length属性。
*eg: Array.from({length:3}) //[undefined,undefined,undefined]

**Array.of()
*Array.of()方法将一组值转化为数组。
*eg: Array.of(3)  //[3]
*对比Array()
*Array(3) //[,,,]
*Array(1,2,3) //[1,2,3]

**copyWithin()
*在当前数组内部将指定位置的成员复制到其他位置(inplace操作)
*@name:Array.prototype.copyWithin(target,start=0,end=this.length)
*@param: target 从该位置开始替换数据
*@param: start 从该位置开始读取数据
*@param end 到该位置前停止读取数据
*eg: [1,2,3,4,5].copyWithin(1,3,4) // [1,4,3,4,5]

**find() 和findIndex()
*find方法用于找到第一个符合条件的数组成员。它的参数是一个回调函数，
*所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，
*然后返回该成员，如果找不到，返回undefined
*eg: [1,2,3,4,5].find((x) => x>3)  //4
*findIndex()与find方法相似，但是返回index

**fill()
*使用给定值填充一个数组
*['a','b','c'].fill(7)  //[7,7,7]
*new Array(3).fill[7]  //[7,7,7]
*['a','b','c'].fill(7,1,2) //['a',7,'c']

**entries(),keys()和values()
*keys()返回遍历的键值， values()返回遍历的值
*entries() 返回遍历的键值对
eg:  for(let index of ['a','b'].keys()){
		console.log(index);
	}  //0  1

**includes()
*includes方法返回一个布尔值,表示数组是否包含给定的值，可输入第二个参数表示开始查找的下标
*eg:  [1,2,3].includes(2) //true
*eg:  [1,2,3].includes(2,2) //false

**数组的空位
*ES6加强了空位的语义,在ES6新增语法中不会跳过空位
*ES5中forEach(),filter(),every() some() 会跳过空位
*     map()会跳过空位，但会保留这个值
*     join(),toString()会将空位视为undefined，而undefined和null会被处理成空字符串

*** 对象的扩展 ***-------------------------------------------------------------

**属性的简洁表示法
*ES6中允许直接写入变量和函数作为对象的属性和方法
*var foo = 'bar';
*var baz = {foo};  //bar={foo:"bar"}
*方法的简写
* var o{
	hello(){console.log("hello");}
	}
*注意Generator函数的简写前面要加*号

**属性名表达式
*ES6允许使用表达式来定义对象:
*eg:ES5中
*  var obj = { foo:true,abc:123 };
*ES6中 
*  let propKey = 'foo';
   let obj = {
	   [propKey]:true,
	   ['a'+'bc']:123
   };

**方法的name属性

**Object.is()
*比较两个值基本相等，与严格相等运算符(===)的行为基本一致

**Object.assign()
*用于将源对象(source)的所有可枚举属性复制到目标对象(target).
*方法的第一个参数是目标对象，后面的参数是源对象。
*如果目标对象不是对象，则会自动转化为对象
*eg: Object.assign(2,{a:3},{b:4}) //{[Number:2],a:3,b:4}
*Object.assign复制的属性是有限制的，只复制对象的自身属性(不复制继承属性)，也不复制不可枚举的属性
*注意！！ Object.assign是浅复制，不是深复制

**属性的可枚举性
*对象的每个属性都具有一个描述对象(Descriptor),用于控制该属性的行为。
*Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
* let obj = {foo:123};
  Object.getOwnPropertyDescriptor(obj,'foo')
  //{value:123,writable:true,enumerable:true,configurable:true}
*其中的enumerable属性称为"可枚举性",如果该属性为false，就表示某些操作会忽略它
*ES5中有3个操作会忽略enumerable为false的属性
* for...in循环  Object.keys()  JSON.stringify()
*ES6中新增Object.assign()会忽略

**属性的遍历
*ES6中一共有5种方法可以遍历对象的属性。
*1 for..in: 循环遍历对象自身的和继承的可枚举属性(不含symbol属性)
*2 Object.keys(obj) 返回一个数组包含对象自身(不含继承的)所有可枚举属性(无Symbol)
*3 Object.getOwnPropertyNames(obj):包含对象自身的所有属性(无Symbol,有不可枚举)
*4 Object.getOwnPropertySymbols(obj) 包含对象自身的所有Symbol属性
*5 Reflect.ownKeys(obj) 返回一个数组，包含所有属性

**__proto__属性
*__proto__属性用来读取或设置当前对象的prototype对象，
*不过该属性只在浏览器中被广泛实现，非浏览器中没有实现，所以不推荐使用

**Object.setPrototypeOf(), Object.getPrototypeOf()
*Object.setPrototypeOf(object,prototype):用来设置一个对象的prototype对象，
*eg: var o = Object.setPrototypeOf({},{a:1})  //o={a:1}
*Object.getPrototypeOf(obj) 用来读取一个对象的prototype对象

**Object.keys()  Object.values() Object.entries()
*返回可遍历属性
*其中Object.entries()有个常用的用法是将对象转为Map结构，如下
*var obj = {foo:'bar',baz:42};
*var map = new Map(Object.entries(obj));  //Map{foo:"bar",baz:42}

**对象的扩展运算符 ...
*let{x,y,...z} = {x:1,y:2,a:3,b:4} //x//1  y//2 z//{a:3,b:4}

**Object.getOwnPropertyDescriptors()
*ES5的Object.getOwnPropertyDescriptor方法用来返回某个对象属性的描述对象
*eg: var o = {a:123}
	 Object.getOwnPropertyDescriptor(o,'a')
	 //{ value: 123, writable: true, enumerable: true, configurable: true }
*ES6的Object.getOwnPropertyDescriptors方法返回指定对象所有自身属性的描述对象。

**Null传导运算符
*简化判断对象是否存在时的安全写法
*ES5中 const firstName = (message && message.body && message.body.user&&message.body.user.firstName)||'default'
*新写法 const first = message?.body?.user?.firstName ||'default';

***   Symbol    ***----------------------------------------------------------

**Symbol
*ES6在ES5的6种数据类型(Undefined,Null,Boolean,String,Number,Object)上新增的数据类型,用于生成一个独一无二的值

**生成Symbol
*eg var a = Symbol([str])
*其中str是可选的参数，仅表示该Symbol值的描述信息
* a.toString()  //Symbol[str]

**作为属性名的Symbol
*var mySymbol = Symbol();
*var a ={ [mySymbol]:'hello!' } 
*console.log(a[mySymbol])  //hello！

**Symbol的用途
*消除魔术字符串
*模块的Singleton模式

**属性名的遍历
*Symbol作为属性名，不会出现在 for..in..,for..of.循环中，也不会被Object.keys(),
 Object.getOwnPropertyNames()返回， 但是能被Object.getOwnPropertySymbols方法返回

** Symbol.for(),Symbol.keyFor()
*Symbol.for()接受一个字符串为参数，然后搜索有没有以该参数作为名称的Symbol值
*如果有，返回该值，若没有，就新建并返回一个以该字符串为名称的Symbol值
*eg: var s1 = Symbol.for('foo');
	 var s2 = Symbol.for('foo');
	 s1 === s2 //true
*Symbol.for()与Symbol()这两种写法都会生成新的Symbol,区别在于前者可被查找。
*Symbol.keyFor() 返回一个已登记的Symbol类型的key
*eg: Symbol.keyFor(s1) //'foo'

**内置的Symbol值
*Symbol.hasInstance: 指向一个内部方法
*Symbol.isConcatSpreadable:等于一布尔值，表示该对象使用Array.prototype.concat()时是否可以展开
*Symbol.species:指向当前对象的构造函数。创造实例时默认会调用这个方法，即使用这是属性返回的函数当作构造函数来创造新的实例对象。
 eg: class MyArray extends Array{
		//覆盖父类Array的构造函数
		static get[Symbol.species](){return Array;}
	 }
*Symbol.match: 指向一个函数，当执行str.match(myObject)时，如果该属性存在，会调用它返回该方法的返回值
*Symbol.replace:指向一个方法，当对象被String.prototype.replace方法调用时会返回该方法的返回值
*Symbol.search：指向一个方法，当对象被String.prototype.search方法调用时会返回该方法的返回值
*Symbol.split：当对象被String.prototype.split方法调用时会返回该方法的返回值
*Symbol.iterator：指向该对象的默认遍历起方法
*Symbol.toPrimitive：指向一个方法，对象被转为原始类型的值时会调用这个方法，返回该对象对应的原始类型值
 Symbol.toPrimitive被调用时会接收一个字符串参数，表示当前运算的模式。一共有三种模式。 1:Number 该场合需要转换成数值， 2:String 该场合需要转成字符串 3：Default 该场合可以转成数值，也可以转成字符串
*Symbol.toStringTag指向一个方法，在对象上调用Object.prototype.toString方法时，如果这个属性存在，起返回值会出现在toString方法返回的字符串中，表示对象的类型
*Symbol.unscopables属性指向一个对象，指定了使用with关键字时哪些属性会被with环境排除。

*** Set和Map数据结构 ***----------------------------------------------------
**Set介绍
*类似数组，但是成员的值都是唯一的，没有重复
*Set构造
*定义: var a = new Set([iterator])
*或者 var a = new Set()
      [iterator].forEach(x => a.add(x))
*set结构的实例属性
*1:Set.prototype.constructor:构造函数，默认就是Set函数
 2:Set.prototype.size: 返回Set实例的成员总数
*Set实例的操作方法
 1:add(value)
 2:delete(value)
 3:has(value)
 4:clear():清除所有成员，没有返回值
*Set实例的遍历操作
 1:keys():返回键名的遍历器
 2:values():返回键值的遍历器
 3:entries():返回键值对的遍历器
 4:forEach():使用回调函数遍历每个成员
//注意：因为set中并不存在键值对，所以keys()和values()返回的值是一样的,
*set遍历的应用
*实现并集
*let union = new Set([...a,...b])
*实现交集
*let intersect = new Set([...a].filter(x=>b.has(x)));
*实现差集
*let difference = new Set([...a].filter(x=>!b.has(x)));

**WeakSet
*介绍:与set结构类似，也是不重复的值的集合。但是有两个区别
*1:WeakSet的成员只能是对象，而不能是其他类型的值
 2:WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说如果其他对象都不引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象是否还存在与WeakSet中
*WeakSet结构的方法
 1:WeakSet.prototype.add(value):向WeakSet实例添加一个成员
 2:WeakSet.prototype.delete(value):清楚WeakSet实例的指定成员
 3:WeakSet.prototype.has(value):返回一个布尔值，表示某个值是否在WeakSet中
*eg:  var a = new WeakSet([[1,2],[3,4]]); //a:WeakSet{[1,2],[3,4}
	  a.add([5,6])	//a:WeakSet{[1,2],[3,4],[5,6]}
	  a.delete([1,2])  //a:WeakSet{[3,4],[5,6]}
	  a.has([3,4])  //true
*注意WeakSet没有size属性，没有办法遍历其成员

**Map
*JavaScript的Object对象本质上是键值对的集合，但是只能用字符串表示键。
*Map数据结构支持值值对集合，即支持使用值(字符串，对象等)作为键
*eg: var o = {a:1,b:2}
	 var map = new Map();
	 map.set(o,'it is o')  //map: Map{o:'it is o'}
*注意，只有对同一个对象的引用，Map结构才将其视为同一个键。
* eg: const map = new Map();
	  map.set(['a'],555);
	  map.get(['a']);  //undefined
*在上面的例子中，因为两个['a']的内存地址不同，不是同一个对象，故get无法获得值

**Map实例的属性和操作方法
*size属性 (new Map([[1,2],[3,4])).size //2
*set(key,value) 
*get(key)
*has(key)
*delete(key)
*clear()
*遍历方法
*keys() values()  entries()  forEach()

**WeakMap
*WeakMap结构与Map结构类似，也用于生成键值对的集合，区别如下
*1:WeakMap只接受对象作为键名，不接受其他类型的值作为键名
*2:WeakMap的键名所指向的对象不计入垃圾回收机制
*WeakMap的专用场景就是它的键所对应的对象可能绘制将来消失的场景。WeakMap结构有助于防止内存泄漏
*WeakMap与WeakSet类似，同样没有size属性，所以没有遍历操作,
*只有4个方法可用 set() get() has()  delete()
*WeakMap的用途
*1:以DOM节点作为键名的场景
*2:部署私有属性

***  Proxy ***------------------------------------------------------------
**概述Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，属于"元编程"的一种
*创建一1个proxy实例
*eg: var proxy = new Proxy(target,handler);
* 通过上面的定义，proxy的命名空间指向target,可通过proxy对target进行操作。
*直接对一个对象添加Proxy，可以像下面这样操作
*target = new Proxy(target,handler) //修改对象的指针

**Proxy支持的所有拦截操作
*对于可以设置但没有设置的操作，则直接落在目标对象上，按照原来的方式产生结果
*1:get(target,propKey,receiver)
*拦截对象属性的读取，比如proxy.foo和proxy['foo']。最后一个参数receiver是一个可选对象，
*2:set(target,propKey,value,receiver)
*拦截对象属性的设置，比如proxy.foo = 'xiaobaicai'
*3:has(target,propkey)
*拦截propKey in proxy操作
*4:deleteProperty(target,propKey)
*拦截delete proxy[propKey]的操作，返回一个布尔值
*5:ownKeys(target)
*拦截Object.getOwnPropertyNames(proxy),Object.getOwnPropertySymbols(proxy),Object.keys(proxy)，返回一个数组。该方法返回目标对象所有自身属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
*6:getOwnPropertyDescriptor(target,propKey)
*拦截Object.getOwnPropertyDescriptor(proxy,propKey),返回文件描述对象
*7:defineProperty(target,propKey,propDesc)
*拦截Object.defineProperty(proxy,propKey,propDesc),Object.defineProperties(proxy,propDescs),返回一个布尔值
*8:preventExtensions(target)
*拦截Object.preventExtensions(proxy),返回一个布尔值
*9:getPrototype(target)
*拦截Object.getPrototypeOf(proxy),返回一个对象
*10:isExtensible(target)
*拦截Object.isExtensible(proxy),返回一个布尔值
*11:setPrototypeOf(target,proto)
*拦截Object.setPrototypeOf(proxy,proto),返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截
*12:apply(target,object,args)
*拦截Proxy实例，并将其作为函数调用的操作，比如proxy(...args),proxy.call(object,...args),proxy.apply(...)
*13:construct(target,args)
*拦截Proxy实例作为构造函数调用的操作，比如new proxy(...args)。

**Proxy.revocable()
*返回一个可取消的Proxy实例
*let {proxy,revoke} = Proxy.revocable(target,handler);
* proxy.foo = 123;
* proxy.foo  //123
* revoke();
* proxy.foo;  //TypeErroe:Revoked
*Proxy.revocable方法返回一个对象，其proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例。
*Proxy.revocable的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再直接访问。

**this问题
*虽然Proxy可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下也无法保证与目标对象的行为一致。主要原因就是在Proxy代理的情况下，目标对象内部的this关键字会指向Proxy代理。

*** Reflect ***------------------------------------------------------------
**概述
*Reflect对象与Proxy对象一样，也是ES6为了操作对象而提供的新的API。Reflect对象的设计目的如下：
*1:将Object对象的一些明显属于语言内部的方法，(比如Object.definePropertiey)放到Reflect对象上。
*2:修改某些Object方法的返回结果，让其变得更合理。比如，Object.definePropertiey(obj,name,desc)在无法定义属性时会抛出一个错误，而Reflect.definePropertiey(obj,name,desc)则会返回false
*3:让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name],而Reflect.has(obj,name)和Reflect.deleteProperty(obj,name)让他们编程了函数行为。
*4:Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就使Proxy对象可以方便地调用对应的Reflect方法来完成默认行为，作为修改行为的基础。也就是说，无论Proxy怎么修改默认行为，我们总可以在Reflect上获取默认行为。

**Reflect上的静态方法
*1:Reflect.get(target,name,receiver)
*获取target对象上的name属性
*2:Reflect.set(target,name,receiver)
*设置target对象上的name属性
*3:Reflect.has(object,name)
*4:Reflect.deleteProperty(obj,name)
*5:Reflect.construct(target,args)
*等同于new target(...args),提供了一种不使用new来调用构造函数的方法。
*eg:  const instance = new target('xiaobaicai')
  等同const instance = Reflect.construct(target,['xiaobaicai'])
*6:Reflect.getPrototypeOf(obj)
*方法用于读取对象的_proto_属性，对应Object.getPrototypeOf(obj)
*两者的区别在于，Object.getPrototypeOf(obj)如果obj不是对象，该函数会将obj转为对象再运行，而Reflect.getPrototypeOf(obj)则会报错
*7:Reflect.setPrototypeOf(obj,newProto)
*用于设置对象的__proto__属性
*8:Reflect.apply(func,thisArg,args)
*等同于Function.prototype.apply.call(func,thisArg,args),用于绑定this对象后执行给定函数
*eg: Reflect.apply(Math.min,Math,args) = Math.min.apply(Math,ages);
*9:Reflect.defineProperty(target,propertyKey,attributes)
*eg:Reflect.defineProperty(obj,'foo',{value:"1"})  //obj.foo 1
*10:Reflect.getOwnPropertyDescriptor(target,propertyKey)
*11:Reflect.isExtensible(target)
*12:Reflect.preventExtnesions(target)
*13:Reflect.ownKeys(target)
*用于返回对象的所有属性，基本等于Object.getOwnPropertyNmaes与Object.getOwnPropertySymbols之和

***  Promise对象 ***------------------------------------------------------
**简介
*Promise，简单来说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。从语法上来说，Promise是一个对象，从它可以获取异步操作的信息。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。
*Promise有两个特点，
*1:对象的状态不受外界影响。Promise对象代表一个异步操作，有3种状态:Pending(进行中),Fulfilled(已成功)和Rejected(已失败)。只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
*2:一旦状态改变就不会在变，任何时候都可以得到这个结果。Promise对象的状态改变只有两种可能:从Pending变为Fulfilled和从Pending变为Rejected。只要两种情况发生，状态距凝固了，不会再变，而是一直保持这个结果，这是就称为Resolved(也定型)。就算改变已经发生，再对Promise对象添加回调函数，也会立即得到这个结果。这与event 不同，事件的特点是，如过错过了它，再去监听是得不到结果的。
*Promise的缺点是：首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消，其次，如果不设置回调函数，Promise内部抛出的错误不会反应到外部。再者，当处于Pending状态时，无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)。

**Promise基本用法
*创建： var promise = new Promise((resolve,reject)=>{})
*捕获resolve   (new Promise()).then(val=>{})
*捕获reject    (new Promise()).catch(err=>{})
*eg:new Promise((resolve,reject)=>resolve(val)).then(val=>{})
*eg:new Promise((resolve,reject)=>reject(err)).catch(err=>{})

**Promise方法
*1:Promise.prototype.then()
* 捕获resolve,并执行
*2:Promise.prototype.catch()
* 捕获reject，
*注意上面的两个方法链式调用返回的都是新的Promise对象
*3:Promise.all()
* 用于将多个Promise实例包装成一个新的Promise实例
*eg: var p = Promise([p1,p2,p3])
*其中p1,p2,p3都是Promise对象的实例，如果不是会调用Promise.resolve()转为Promise实例
*当p1,p2,p3都是Fulfilled，p为Fulfilled
*当p1,p2,p3中任意一个是rejected，P变为Rejected
*4:Promise.race([p1,p2,p3])
* 与Promise.all()类似，不过区别在于，只要p1,p2,p3中有一个实例率先改变状态，p的状态也跟着改变
*5:Promise.resolve()
*将现有对象转为Promise对象，状态为Fulfilled
*6:Promise.reject()
*也将现有对象转为Promise对象，状态为Rejected

**Promise应用
*1:加载图片
*2:Generator与Promise的结合


*** Iterator 和 for...of循环  ***--------------------------------------------
**简介
*Iterator接口的目的是为所有数据结构提供一种统一的访问机制，即for...of循环
*数据结构只要部署了Iterator接口，我们就称这种数据结构为可遍历的
*默认的Iterator接口部署在数据结构的[Symbol.iterator]属性，
*原生具有Iterator接口的数据结构有:
  Array Map Set String TypedArray 函数的arguments对象  NodeList对象
*对于类似数组的对象(存在数值键名和length属性)，部署Iterator接口可以直接引用数值的Iterator接口。
 eg: NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
*对普通对象部署iterator接口，返回对象中需要设置done属性，done:true表示迭代的最后一个对象
 eg:let obj = {
	 data:['hello','world'],
	 [Symbol.iterator](){
		 const self = this;
		 let index = 0;
		 return{
			 next(){
				 if(index<self.data.length){
					 return {value:self.data[index++],done:false};
				 }
				 else{
					 return{done:true}
				 }
			 }
		 }
	 }
 }

**调用Iterator的场合
*1:解构赋值   let[x,y] = [1,2]
 2:扩展运算符  [..."hello"] //['h','e','l','l','o']
 3:yield* 
  yield*后面跟着的是一个可遍历的结构，它会调用该结构的遍历器接口
  eg let generator = function*(){
	  yield 1;
	  yield* [2,3,4];
	  yield 5;
	 };
	 var iterator = generator();
	for (let i of iterator){
		console.log(i)  //1 2 3  4 5
	}
 4:其他场合
  由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合其实都调用了遍历器接口。如:  for...of  Array.from()  Map(),Set(),WeakMap() WeakSet()
   Promise.all()  Promise.race()
 
**遍历器对象的return(),throw()

***  Generator函数的语法  *** ------------------------------------------------
**简介
*对于Generator函数而言，有多种理解角度，从语法上，首先可以把它理解成一个状态机，封装了多个内部状态。
*执行Generator函数会返回一个遍历器对象。也就是说，Generator函数除了是状态机，还是一个遍历器生成函数。返回的遍历器对象可以依次遍历Generator函数内部的每一个状态。
*形式上，Generator函数function命名与函数名之间有一个星号，二是函数体内部使用yield语句定义不同的内部状态。
*eg:  function* f(){
		yield 1;yield 2;yield 3;return 'ending';
		}

**next方法的参数
*yield语句本身没有返回值，或者说总是返回undefined。next方法可以带有一个参数，该参数会作为上一条yield语句的返回值。

**Generator.prototype.throw()
*Generator函数返回的遍历器对象都有一个throw方法
*内部部署try...catch代码块，遍历器的throw方法抛出的错误不影响下次遍历

**Generator.prototype.return()
*返回给定的值，并终结Generator的遍历。

**yield*表达式
*用于在一个Generator函数内部调用另一个Generator函数。

**Generator函数this
*Generator函数总是返回一个遍历器，ES6规定这个遍历器是Generator函数的实例，它也继承了Generator函数的prototype对象上的方法。

**Generator实现状态机
*eg: function *g(){
		while(true){
			consloe.log('hello');
			yield;
			console.log('world');
			yield;
		}
	}
	
**Generator与协程
*协程是一种程序运行的方式，可以理解为"协作的线程"或"协作的函数"。协程即可以用单线程实现，也可以用多线程实现，前者是一种特殊的子例程，后者是一种特殊的线程
*--协程与子例程的差异--
*传统的"子例程"采用堆栈式"后进先出"的执行方式，只有当调用的子函数完全执行完毕，才会结束执行父函数。协程与其不同，多个线程(单线程情况下即多个函数)可以并行执行，但只有一个线程(或函数)处于正在运行的状态，其他线程(或函数)都处于暂停态，线程(或函数)之间可以交换执行权。也就是说，一个线程(或函数)执行到一半，可以暂停执行，将执行权交给另一个线程(或函数),等到稍后收回执行权再恢复执行。这种并行执行，交换执行权的线程(或函数)，就称为协程。
从实现上看，在内存中子例程只使用一个栈(stack),而协程是同时存在多个栈，但只有一个栈是在运行态。也就是说，协程是以多占用内存为代价实现多任务的并行运行。
*--协程与普通线程的差异--
*不难看出，协程适用于多任务运行的环境。在这个意义上，它与普通的线程很相似，都有自己执行的上下文，可以分享全局变量。它们的不同之处在于，同一时间可以有多个线程处于运行态，但是运行的协程只能有一个，其他协程都处于暂停态。此外普通的线程是抢占式的，到底哪个线程优先得到资源，必须有运行环境决定，但是协程是合作式的，执行权由协程自己分配。
*由于JavaScript的单线程语言，只能保持一个调用栈。引入协程以后，每个任务可以保持自己的调用栈。这样做的最大好处，就是抛出错误的时候，可以找到原始的调用栈。不至于像异步操作的回调函数那样，一旦出错原始的调用栈早就结束。
*Generator函数是ES6对协程的实现，但属于不完全实现。Generator函数被称为"半协程"，意思是只有Generator函数的调用者才能将程序的执行权还给Generator函数，如果是完全实现的协程，任何函数都可以让暂停的协程继续执行。
*如果将Generator函数当作协程，完全可以将多个需要互相协作的任务写成Generator函数，它们之间使用yield语句交换控制权。

**应用
*异步操作的同步化表达
*控制流管理
*部署Iterator接口
*作为数据结构

*** Generator函数的异步应用  ***---------------------------
**传统异步编程方法
*1:回调函数 2:事件监听 3:发布/订阅 4:Promise对象

---=====================================-------------=========---------
***  Class    ***
**定义一个类
*class Point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	toString((){
		return '(' + this.x + ',' + this.y + ')';
	}
}
*costructor方法:constructor方法类的构造方法，当定义一个没有constructor方法的时候，类将自动生成一个constructor方法。
*class函数不能像调用函数一样调用
*class表达式:Class也可以使用表达式的形式定义。
*类不存在变量提升,ES6中不存在严格意义上的私有方法。
*可以通过使用Symbol定义私有方法。
  const bar = Symbol('bar');
  const snaf = Symbol('snaf');
  export default class myClass{
	  //公有方法
	  foo(baz){
		  this[bar](baz);
	  }
	  //私有方法
	  [bar](baz){
		  return this[snaf] = baz;
	  }
  };
*ES6中同样不支持私有属性
*在ES6中，注意好this的指向
function selfish(target){
	const cache = new WeakMap();
	const handler = {
		get(target,key){
			const value = Reflect.get(target,key);
			if(typeof value!=='function'){
				return value;
			}
			if(!cache.has(value)){
				cache.set(value,value.bind(target));
			}
			return cache.get(value);
		}
	};
	const proxy = new Proxy(target,handler);
	return proxy;
}
const logger = selfish(new Logger());

*Class的取值函数(getter)和存值函数(setter)
class MyClass{
	constructor(value){
		this.value = value;
	}
	get prop(){
		return this.value;
	}
	set prop(value){
		console.log('setter: '+value);
		this.value = value;
	}
}
let inst = new MyClass();
inst.prop = 123;
console.log(inst.prop);

*class的Generator方法
*class的静态属性和静态方法
*静态属性和实例属性:静态属性指的是Class本身的属性，即Class.propname，而不是定义在实例对象上的属性。
*ES6规定,Class内部只有静态方法，没有静态属性。
*Class实例属性
*new.target属性

***Class的继承 ***------------------------------------
*extends关键字，super()调用父类关键字
*Object.getPrototypeOf():用来从子类上获取父类，

*类的prototype属性和__proto__属性，
*在大多数浏览器的ES5中实现之中，每个对象都有__proto__属性

*** ES6中的Module ***-------------------------------------------------
**严格模式主要有以下限制，
*1:变量必须声明后再使用
*2:函数的参数不能有同名属性，否则报错
*3:不能使用with属性
*4:不能对只读属性赋值，否则报错
*5:不能使用前缀0表示八进制数，否则报错
*6:不能删除不可删除的属性，否则报错
*7:不能删除变量delete prop，会报错，只能删除属性delete global[prop]
*8:eval不会在它的外层作用域引入变量
*9:eval和arguments不能被重新赋值