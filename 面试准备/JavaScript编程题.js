1:判断字符串的类型
	var s1 = "abc";
	var s2 = new String('abc')
	
	((str instanceof String)||(typeof str).toLowerCase()=="string")
	
2:表格基数行为白,偶数为灰,悬浮为黄
	<style type="text/css">
		.table tr:nth-child(2n-1){
			background-color:white;
		}
		.table tr:nth-child(2n){
			background-color:grey;
		}
		.table tr:hover{
			background-color:yellow;
		}
	</style>
	
3:解析url参数为json
	<script type="text/javascript">
		function parseQueryString(url){
			var theRequest = new Object();
			if(url.indexOf("?")!=-1){
				var str = url.substr(url.indexOf("?")+1);
				strs = str.split("&");
				for(var i=0;i<strs.length;i++){
					theRequest[strs[i].split("=")[0]]=strs[i].split("=")[1];
				}
			}
			return theRequest;
		}
		var url = "http://cmccim.com/index.html?key0=0&key1=1&key2=2";
		var paramObj = eval(parseQueryString(url));

		for(var x in paramObj){
			console.log(x+":"+paramObj[x]);
		}
	</script>
	
4:查找数组元素位置
	function indexOf(arr,item){
		return arr.indexOf(item);
	}
	
5:数组求和
	function sum(arr){
		var su = 0;
		arr.forEach(function(value,index,arr){
			su += value;
		})
		return su;
	}
	
6:移除数组中的元素
	移除数组arr中的所有值与item相等的数组,不要在原数组上删
		 输入例子:remove([1,2,3,4,2],2)
	 	function remove(arr,item){
	 		return arr.filter(function(d){
	 			return d !== item;
	 		})
		 }
	 
7:移除数组中的元素(原数组上删)
	移除数组arr中的所有值与item相等的元素,直接在给定的arr数组上进行操作
		输入例子:removeWithoutCopy([1,2,2,3,4,2,2],2)
		输出例子: [1,3,4]
		function removeWithoutCopy(arr,item){
			for(var i = 0;i<arr.length;i++){
				if(arr[i] == item){
					arr.splice(i,1);
					i--;
				}
			}
			return arr;
		}
		
8:添加元素
	在数组末尾添加元素item,不要直接修改数组,返回新数组
		输入例子:append([1,2,3,4],10)
		输出例子:[1,2,3,4,10]
		function append(arr,item){
			return [].concat(arr,item);
		}
		
9:删除数组最后一个元素
	删除数组arr最后一个元素,不要直接修改数组arr,结果返回一个新数组
		输入例子:tiuncate([1,2,3,4])
		输出例子:[1,2,3]
		function truncate(arr){
			return arr.slice(0,arr.length-1)
		}
		
10:添加元素
	在数组开头添加元素item,不要直接修改数组arr,结果返回新的元素
	输入例子: prepend([1,2,3,4],10)
	输出例子: [10,1,2,3,4]
	function prepend(arr,item){
		return [].concat(item,arr);
	}
	
11:删除数组第一个元素
	删除数组arr第一个元素,不要直接修改数组arr,结果返回新的数组
		输入例子:curtail([1,2,3,4])
		输出例子:[2,3,4]
		function curtail(arr){
			return arr.slice(1,arr.length);
		}
		
12:数组合并
	合并数组arr1和数组arr2,不要在原数组上修改,结果返回新数组
	输入例子: concat([1,2,3,4],['a','b','c','d'])
	输出例子: [1,2,3,4,'a','b','c','d']
	function concat(arr,arr){
		return [].concat(arr,arr)
	}
	
13:添加元素
	在数组arr的index处添加元素item,不要直接修改数组arr,结果返回新的数组
	输入例子: insert([1,2,3,4],'z',2)
	输出例子: [1,2,'z',3,4]
	function insert(arr,item,index){
		return [].concat(arr.slice(0,2),item,arr.slice(2,arr.length));
	}
	
14:计数
	统计数组arr中值等于item的元素出现的次数
	输入例子:count([1,2,4,4,3,4,3],4)
	输出例子:3
	function count(arr,item){
		var count = 0;
		arr.foreach(function(value,index,arr){
			if(value === item){
				count++;
			}
		})
		return count;
	}
	
15:查找重复元素
	找出数组arr中重复出现过的元素
	输入例子:duplicates([1,2,4,4,3,3,1,5,3]).sort()
	输出例子:[1,3,4]
	function duplicates(arr){
		var arr2 = [];
		var obj = {};
		for(var i =0,len=arr.length;i<len;i++){
			if(!obj[arr[i]]){
				obj[arr[i]] = 1;
			}else{
				obj[arr[i]]++;
				if(obj[arr[i]] == 2){
					arr2.push(arr[i]);
				}
			}
		}
		return arr2;
	}
	
16:求二次方
	为数组arr中的每个元素求二次方.不要直接修改数组arr,结果返回新的数组
	输入例子:square([1,2,3,4])
	输出例子:[1,4,6,16]
	function square(arr){
		return arr.map(function(data,index,arr){
			return data*data;
		})
	}
	
17:查找元素位置
	在数组arr中,查找值与item相等的元素出现的所有位置
	输入例子:findAllOccurrences('abcdefabc'.split(''),'a').sort()
	输出例子:[0,6]
	function findAllOccurrences(arr,target){
		var arr2=[];
		arr.foreach(function(data,index,arr){
			if(data === target){
				arr2.push(index);
			}
		})
		return arr2;
	}
	
18:计时器
	实现一个打点计时器,要求
	1:从start到end(包含start和end),每隔100毫秒concole.log一个数字,每次数字增幅为1;
	2:返回的对象中需要包含一个cancel方法,用于停止定时操作
	3:第一个数需要立即输出
	function count(start,end){
		console.log(start);
		var timer = setInterval(function(){
			if(start<end){
				console.log(++start);
			}else{
				//打印结束清除定时器，防止内存泄漏
				clearInterval(timer);
			}
		},100);
		funciton cancel(){
			clearInterval(timer);
		}
		return{
			cancel:cancel
		}
	}
	
19:函数传参
	将数组arr中的元素作为调用函数fn的参数
	输入例子:
	argsAsArray(function(greeting,name,punctuation){
		return greeting+','+name+(punctuation||'!');
	},['hello','Ellie','!'])
	输出例子:hello,Ellie!
	function argsAsArray(fn,arr){
		return fn.apply(this,arr);
	}
	
20:闭包
	实现函数makeClosures,调用之后满足如下条件
	1:返回一个函数数组result,长度与arr相同
	2:运行result中第i个函数,即resulti,结果与fn(arr[i])相同
	输入例子:
		var arr = [1,2,3];
		var square = function(x){return x*x };
		var funcs = makeClosures(arr,square);
		funcs[1]();
	输出例子: 4
	function makeClosures(arr,fn){
		var result = [];
		for(var i =0;i<arr.length;i++){
			result.push(function(i){
				return function(){
					return fn(arr[i]);
				}
			}(i));
		}
		return result;
	}
	
21:请修复给定的js代码中,函数定义存在的问题
	//看返回值getValue(),原本的函数定义便不符合需求，以变量的形式存储，方便调用
	function functions(flag){
		if(flag){
			var getValue=function(){
				return 'a';
			}
		}else{
			var getValue=function(){
				return 'b';
			}
		}
		return getValue();
	}
	
	修改后:
		function functions(flag){
			if(flag){
				function getValue(){
					return 'a';
				}
			}else{
				function getValue(){
					return 'b';
				}
			}
			return getValue();
		}
		
22:修改js代码中parseInt的调用方式,使之通过全部测试用例
	如输入:'12px',输出:12
	function parse2Int(num){
		var i=0;
		while(num[i]>='0' && num[i]<='9'){
			i++;
		}
		return parseInt(num.slice(0,i));
	}
	
23:实现fizzBuzz函数,参与num与返回值的关系如下:
	1:如果num能同时被3和5整除,返回字符串fizzbuzz
	2:如果num能被3整除,返回字符串fizz
	3:如果num能被5整除,返回字符串buzz
	4:如果参数为空或者不是Number类型,返回false
	5:其余情况,返回参数num
	function fizzBuzz(num){
		if(num == null || typeof(num) != 'number'){
			return false;
		}
		if(num%15 == 0){
			return 'fizzbuzz'
		}
		if(num%5 == 0){
			return 'buzz'
		}
		if(num%3 == 0){
			return 'fizz'
		}
		return num;
	}
	
24:将数组arr中的元素作为调用函数fn的参数
	输入:function(greeting,name,punctuation){
		return greeting + ',' + name + punctuation;
	}  ['Hello','Ellie','!']
	输出:Hello,Ellie!
	function argsAsArray(fn,arr){
		return fn.apply(this,arr)
	}

25:将函数fn的执行上下文改为obj对象
	输入:function(){
		return this.greeting + ',' +this.name + '!!!';
	},{greeting:'Hello',name:'Rebecca'}
	输出:Hello,Rebecca!!!
	
	//方法一:利用bind绑定函数的上下文，再调用函数
	function speak(fn,obj){
		return fn.bind(obj)();
	}
	//方法二:call第一个参数为函数的上下文，对第一个参数进行赋值即可
	function speak(fn,obj){
		return fn.call(obj);
	}
	//方法三
	function speak(fn,obj){
		return fn.apply(obj)
	}
	
26:实现函数functionFunction,调用之后满足如下条件:
	1:返回值为一个函数f
	2:调用返回的函数f,返回值为按照调用顺序的参数凭借,拼接字符为英文逗号加以个空格,即','
	3:所有函数的参数数量为1,且均为String类型
	输入:functionFunction('Hello')('world')
	输出:Hello,World
	function functinFunction(str){
		return function(s){
			return str+','+s;
		}
	}
	
27:实现函数makeClosures,调用之后满足如下条件
	1:返回一个数组result,长度与arr相同
	2:运行result中第i个函数,即result[i](),结果与fn(arr[i])相同
	输入: [1,2,3],function(x){return x*x;}
	输出: 4
	function makeClosures(arr,fn){
		var newArray = [];
		arr.foreach(function(e){
			newArray.push(function(){
				return fn(e);
			})
		})
		return newArray;
	}
	
28:已知函数fn执行需要3个函数.请实现函数partial,调用之后满足如下条件:
	1:返回一个函数result,该函数接受一个参数
	2:执行result(str3),返回的结果与fn(str1,str2,str3)一致
	输入:var saylt = function(greeting,name,punctuation){
			return greeting+','+name+(punctuation||'!');
		};
		partial(saylt,'Hello','Ellie')('!!!');
	输出:Hello,Ellie!!!
	function partial(fn,str1,str2){
		var result=function(str3){
			return fn(str1,str2,str3);
		}
		return result;
	}
	
29:函数useArguments可以接收1个及以上的参数.请实现函数useArguments,
   返回所有调用参数相加后的结果,本体的测试参数全部为Number类型,不需要考虑参数转换
   	输入:1,2,3,4
   	输出:10
   	function useArguments(){
   		var sum = 0;
   		for(var i =0;i<arguments.length;i++){
   			sum+=arguments[i];
   		}
   		return sum;
   	}
   	
30:实现函数callIt,调用之后满足如下条件
	1:返回的结果为调用fn之后的结果
	2:fn的调用参数为callIt的第一个参数之后的全部参数
	function callIt(fn){
		return fn.apply(this,[].slice.call(arguments,1));
	}
	
31:实现函数partialUsingArguments,调用之后满足如下条件
	1:返回一个函数result
	2:调用result之后,返回的结果与调用函数fn的结果一致
	3:fn的调用参数为partialUsingArguments的第一个参数之后的全部参数以及result的调用参数
	function partialUsingArguments(fn){
		var arg = [].slice.call(arguments,1);
		functionresult(){
			return fn.apply(this,arg.concat([].slice.call(argument)));
		}
		return result;
	}
	
32:已知fn为一个预定义函数,实现函数curryIt,调用之后满足如下条件:
	1:返回一个函数a,a的length属性值为1(即显示声明a接收一个参数)
	2:调用a之后,返回一个函数b,b的length属性值为1
	3:调用b之后,返回一个函数c,c的length属性值为1
	4:调用c之后,返回的结果与调用fn的返回值一致
	5:fn的参数依次为函数a,b,c的调用参数
	输入: var fn = function(a,b,c){return a+b+c};
		curryIt(fn)(1)(2)(3)
	输入:6
	
	//方法一 利用局部递归的方式执行内部函数，直至函数内部return
	funciton curryIt(fn){
		var n =fn.length;
		var arr = [];
		var result = function(x){
			arr.push(x);
			if(arr.length==n)
				return fn.apply(this,arr);
			return result;
		}
		return result;
	}
	
	//方法二:利用函数签到函数的方式进行
	function curryIt(fn){
		return function(x){
			return function(y){
				return function(z){
					return fn.call(this,x,y,z);
				}
			}
		}
	}

33:如何判断某变量是否为数组数据类型?
	if(typeof Array.isArray === "undefined"){
		Array.isArray = function(arg){
			return Object.prototye.toString.call(arg)==="[object Array]"
		}
	}

34:希望获取页面中所有的checkbox怎么做?
	var domList = document.getElememntsByTagName('input')
	var checkBoxList = [];
	var len = domList.length;
	while(len--){
		if(domList[len].type=='checkbox'){
			checkBoxList.push(domList[len]);
		}
	}
	
35:设置一个已知ID的DIV的html内容为hello,字体颜色设置为红色
	var dom = document.getElementById('ID')
	dom.innerHTML = "hello"
	dom.style.color = "red"

36:当一个dom节点被点击时候,我们希望能够执行一个函数,应该怎么做?
	1:直接在dom里绑定事件, <E onclick = "test()"></E>
	2:xxx.onclick = test;
	3:xxx.addEventListener('click',function(){})
	
37:属性复制
	function extend(target,source){
		for(var property in source){
			target[property] = source[property]
		}
		return target
	}
	
38:编写一个数组去重的方法,
	Array.prototype.unique = function(){
		var n =[];
		for(var i = 0;i<this.length;i++){
			if(n.indexOf(this[i]==-1)){
				n.push(this[i]);
			}
		}
		return n;
	}
	
39:输出今天的日期,以YYYY-MM-DD的方式,比如今天2018-8-21
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	month = month<10?'0'+month:month;
	var day = d.getDate();
	day = day<10?'0'+day:day;
	alert(year+'-'+month+'-'+day);
	
40:将字符串中"<tr><td>{$id}</td><td>{$name}</td</tr>"中的{$id}替换成0,{$name}替换成tony
	var str =  "<tr><td>{$id}</td><td>{$name}</td</tr>"
	str.replace(/{\$id}/g,'0').replace(/{\$name}/g,'tony')
	
41:为了保证页面输出安全,我们经常需要对一些特殊的字符进行转义,请写出一个函数excapeHtml,将<,>,&,"进行转义
	function escapeHtml(str){
		return str.replace(/[<>"&]/g,function(match){
			switch(match){
				case "<":
					return "&lt;";
				case ">":
					return "&gt;";
				case "&":
					return "&amp;";
				case "\"":
					return "&quot;";
			}
		})
	}
