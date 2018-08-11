var dom = null,  //缓存创建的新闻标题元素
	paper = 0,	//当前页数
	num = 5,	//每页显示新闻数目
	i = 0,		//创建新闻元素时保存变量
	len = article.length;		//新闻数据长度
for(;i<len;i++){
	dom = document.createElement('div');	//创建包装新闻标题元素
	dom.innerHTML = article[i];		//向元素中添加新闻标题
	if(i >= num){
		dom.style.display = 'none';
	}
	document.getElementById('container').appendChild(dom);	//添加到页面中
}
//下一页绑定事件
document.getElementById('next_page').onclick = function(){
	var div = document.getElementById('container').getElementsByTagName('div'), //获取所有新闻标题包装元素
	var j=k=n=0;   //j,k循环变量,n为当前页显示的第一个新闻序号
	n = ++paper % Math.ceil(len/num) * num;	//获取当前页显示的第一个新闻序号
	for(;j<len;j++){
		div[j].style.display = 'none';		//隐藏所有新闻
	}
	for(;k<5;k++){
		if(div[n+k])
			div[n+k].style.display = 'block';  //显示当前页新闻
	}
}

/***
 *使用享元模式控制每次只操作5个元素
 ***/
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
			//如果已创建的元素小于当前页总个数，则创建
			if(created.length<5){
				return create();
			}else{
				//获取第一个元素，并插入最后面
				var div = created.shift();
				created.push(div);
				return div;
			}
		}
	}
}();

var paper = 0;
var num = 5;
var len = article.length;
//添加5条新闻
for(var i = 0;i<5;i++){
	if(article[i])
		//通过享元类获取创建的元素并写入新闻内容
		Flyweight.getDiv().innerHTML = article[i];
}

//下一页绑定事件
document.getElementById('next_page').onclick = function(){
	//如果新闻内容不足5条则返回
	if(article.length < 5)
		return;
	var n = ++paper * num % len;	//获取当前页的第一条新闻索引
	var j = 0;			//循环变量
	//插入5条新闻
	for(;j<5;j++){
		//如果存在第n+j条则插入
		if(article[n+j]){
			Flyweight.getDiv().innerHTML = article[n + j];
			//否则插入起始位置第n+j-len条
		}else if(article[n+j-len]){
			Flyweight.getDiv().innerHTML = article[n+j - len];
			//如果都不存在则插入空字符串
		}else{
			Flyweight.getDiv().innerHTML = "";
		}
	}
}

/***
 *享元动作
 ***/

//实现一个享元类
var FlyWeight = {
	moveX:function(x){
		this.x = x;
	}
	moveY:function(y){
		this.y = y;
	}
}

//让其他角色来继承
var Player = function(x,y,c){
	this.x = x;
	this.y = y;
	this.color = c;
}
Player.prototype = FlyWeight;
Player.prototype.changeC = function(c){
	this.color = c;
}

//让精灵继承移动的方法
var Spirit = function(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;
}
Sproot.prototype = FlyWeight;
Spirit.prototype.changeR = function(){
	this.r = r;
}

//创建一个人
var player1 = new Player(5,6,'red');
console.log(player);
player1.moveX(6);
player1.moveY(7);
player1.changeC('pink');
console.log(player1);

//创建一个精灵
var spirit1 = new Spirit(2,3,4);
console.log(spirit1);
spirit1.moveX(3);
spirit1.moveY(4);
spirit1.changeR(5);
console.log(spirit1)