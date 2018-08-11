
/***
 *命令模式
var viewCommand = (function(){
	//方法集合
	var Action = {
		//创建方法
		create:function(){},
		//展示方法
		display:function(){}
	}
	//命令接口
	return function excute(){}
})();
 ***/

//模块实现模块
var viewCommand = (function(){
	var tpl = {
		//展示图片结构模板
		product:[
			'<div>',
				'<img src="{#src#}"/>',
			'</div>'
		].join(''),
		//展示标题结构模板
		title:[
			'<div class="title">',
				'<div class="main">',
					'<h2>{#title#}</h2>',
					'<p>{#tips#}</p>',
				'</div>'
			'</div>',
		].join('')
	};
	//格式化字符串缓存字符串
	var html = '';
	//替换'{#'与'#}'之间的字符串
	function formateString(str,obj){
		return str.replace(/\{#(\w+)#\}/g,function(match,key){
			return obj[key];
		})
	}
	//方法集合
	var Action = {
		create:function(data,view){
			//解析数据 如果数据是一个数组
			if(data.length){
				//遍历数组
				for(var i = 0,len = data.length;i<len;i++){
					//将格式化之后的字符串缓存到html中
					html += formateString(tpl[view],data[i]);
				}
			}else{
			//直接格式化字符串缓存到html中
			html += formateString(tpl[view],data);
			}
		}
		display:function(container,data,view){
			//如果传入数据
			if(data){
				//根据给定数据创建视图
				this.create(data,view);
			}
			//展示模块
			document.getElementById(container).innerHTML = html;
			//展示后清空缓存的字符串
			html = '';
		}
	}
	//命令接口
	return function excute(msg){
		//解析命令，如果msg.param不是数组则将其转化为数组(apply方法要求第二个参数为数组)
		msg.param = Object.prototype.toString.call(msg.param) === "[object Array]"?msg.param:[msg.param];
		//Action内部调用的方法引用this,所以此处为保证作用域this执行传入Action
		Action[msg.command].apply(Action,msg.param)
	}
})();

var productData = [
	{
		src:'images/02.jpg',
		text:'绽放的桃花'
	},
	{
		src:'images/03.jpg',
		text:'阳光下的温馨'
	},
	{
		src:'images/04.jpg',
		text:'镜头前的绿色'
	}
],
//模块标题数据
titleData = {
	title:'夏日里的一片温馨',
	tips:'暖暖的温情带给人们家的感受.'
};


viewCommand({
	//参数说明 方法display
	command:'display',
	//参数说明param1元素容器 param2 标题数据 param3元素模板 
	param:['title',titleData,'title']
});

viewCommand({
	command:'create',
	//详见create方法参数
	param:[{
		src:'images/01.jpg',
		text:'迎着朝阳的野菊花'
	},'product']
})

viewCommand({
	command:'display',
	param:['product',productData,'product']
})