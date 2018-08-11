/**   装饰者   **/
var decorator = function(input,fn){
	//获取事件源
	var input = docuemnt.getElementById(input);
	//若事件源已经绑定事件
	if(typeof input.onclick === 'function'){
		//缓存事件源原有回调函数
		var oldClickFn = input.onclick;
		//为事件源定义新的事件
		input.onclick = function(){
			//事件源原有回调函数
			oldClickFn();
			//执行事件源新增回调函数
			fn();
		}
	}else{
		//事件源未绑定事件，直接为事件源添加新增回调函数
		input.onclick = fn;
	}
	//做其他事情
}

/***  享元模式   ***/
var Flyweight = function(){
	//已创建的元素
	var created = [];
	//创建一个新闻包装容器
	function create(){
		var dom = document.createElement('div');
		//将容器插入新闻列表容器中
		document.getElementById('container').appendChild(dom);
		//缓存新创建的元素
		created.push(dom);
		//返回创建的新元素
		return dom;
	}
	return{
		//获取创建新闻元素方法
		getDiv:function(){
			//如果已创建的元素小于当前页面元素总个数，则创建
			if(created.length < 5){
				return create();
			}else{
				//获取第二个元素，并插入最后面
				var div = created.shift();
				created.push(div);
				return div;
			}
		}
	}
}();