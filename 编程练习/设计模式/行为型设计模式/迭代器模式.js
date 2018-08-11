//迭代器
var Iterator = function(items,container){
	//获取父容器，如container参数存在，并且可以获取该元素则获取，否则获取document
	var container = container&&document.getElementById(container)||document,
		//获取元素
		items = container.getElementsByTagName(items),
		//获取元素长度
		length = items.length,
		//当前索引值，默认0
		index = 0;
		//缓存原生数组splice方法
	var splice = [].splice;
	return{
		//获取第一个元素
		first:function(){
			index = 0;		//校正当前索引
			return items[index];	//获取第一个元素
		},
		//获取最后一个元素
		second:function(){
			index = length - 1;	//校正当前索引
			return items[index];	//获取最后一个元素
		},
		//获取前一个元素
		pre:function(){
			if(--index>0){	//如果索引值大于0
				return items[index];	//获取索引值对应的元素
			}else{
				index = 0;		//索引值为0
				return null;	//返回空
			}
		},
		//获取后一个元素
		next:function(){
			if(++index<length){	//如果索引值小于长度
				return items[index];	//获取索引值对应的元素
			}else{
				index = 0;	//索引值为0
				return null;	//返回空
			}
		},
		//获取某一元素
		get:function(num){
			//如果num大于0	再获取正向获取，否则逆向获取
			index = num>=0?num%length:num%length + length;
			//返回对应元素
			return items[index];
		},
		//对每个元素执行某一个方法
		dealEach:function(fn){
			//第二个参数开始为回调函数中参数
			var args = splice.call(arguments,1);
			//遍历元素
			for(var i =0;i<length;i++){
				//对元素执行回调函数
				fn.apply(items[i],args);
			}
		},
		//对某一个元素执行某一个方法
		dealItem:function(num,fn){
			//对元素执行回调函数，
			fn.apply(this.get(num),splice.call(arguments,2))
		},
		//排他方式处理某一个元素
		exclusive:function(num,allFn,numFn){
			//对所有元素执行回调函数
			this.dealEach(allFn);
			//如果num类型为数组
			if(Object.prototype.toString.call(num) === "[object Array]"){
				//遍历num数组
				for(var i =0,len = num.length;i<len;i++){
					//分别处理数组中每一个元素
					this.dealItem(num[i],numFn);
				}
			}else{
				//处理第num个元素
				this.dealItem(num,numFn);
			}
		}
	}
}

/***
		*	测试用例   *
var demo = new Iterator('li','container');
console.log(demo.first());
console.log(demo.pre());
console.log(demo.next());
console.log(demo.get(2000));
//处理所有元素
demo.dealEach(function(text,color){
	this.innerHTML = text;	//设置内容
	this.style.background = color;	//设置背景色
},'test','pink');
//排他思想处理第3个与第4个元素
demo.exclusive([2,3],function(){
	this.innerHTML = '被排除的';
	this.style.background = 'green';
},function(){
	this.innerHTML = '选中的';
	this.style.background = 'red';
})
	***/
	
//数组迭代器
var eachArray = function(arr,fn){
	var i =0;
	var len = arr.length;
	//遍历数组
	for(;i<len;i++){
		//依次执行回调函数，注意回调函数中传入的参数第一个为索引，第二个为该索引对应的值
		if(fn.call(arr[i],i,arr[i]) === false){
			break;
		}
	}
}

//对象迭代器
var eachObject = function(obj,fn){
	//遍历对象中的每一个属性
	for(var i in obj){
		//一次执行回调函数，注意回调函数中传入的参数第一个为属性，第二个为该属性对应的值
		if(fn.call(arr[i],i,arr[i]) === false){
			break;
		}
	}
}

/** 测试 **/
//创建一个数组
for(var arr=[],i=0;i<5;arr[i++] = i);
eachArray(arr,function(i,data){
	console.log(i,data);
});
//测试结果
//0 1
//1 2
//2 3
//3 4
//4 5
//处理一个对象
var obj = {
	a : 23,
	b : 56,
	c : 67
}
eachObject(obj,function(i,data){
	console.log(i,data);
});
//测试结果
//a 23
//b 56
//c 67


