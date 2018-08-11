/***
 *节流延迟加载图片类
 *param id  延迟加载图片的容器id
 *注：图片格式如下<img src="img/loading.gif" alt="" data-src="img/1.jpg">
 ***/

function LazyLozd(id){
	//获取需要节流延迟加载图片的容器
	this.container = doucment.getElementById(id);
	//缓存图片
	this.imgs = this.getImgs();
	//执行逻辑
	this.init();
}
//节流延迟加载图片类原型方法
LazyLozd.prototype = {
	//起始执行逻辑
	init:function(){
		//加载当前视图图片
		this.update();
		//绑定事件
		this.bindEvent();
	},
	//获取延迟加载图片
	getImgs:function(){
		//新数组容器
		var arr = [];
		//获取图片
		var imgs = this.container.getElementsByTagName('img');
		//将获取的图片转化为数组(IE下通过Array.prototype.slice会报错)
		for(var i = 0,len = imgs.length;i<len;i++){
			arr.push(imgs[i])
		}
		return arr;
	},
	//加载图片
	update:function(){
		//如果图片都加载完成，返回
		if(!this.imgs.length){
			return;
		}
		//获取图片长度
		var i = this.imgs.length;
		//遍历图片
		for(--i;i>=0;i--){
			//如果图片在可视范围内
			if(this.shouldShow(i)){
				//加载图片
				this.imgs[i].src = this.imgs[i].getAttribute('data-src');
				//清楚缓存中的此图片
				this.imgs.splice(i,1);
			}
		}
	},
	//判断图片是否在可视范围内
	shouldShow:function(i){
			//获取当前图片
		var img = this.imgs[i],
			//可视范围内顶部高度(页面滚动条top值)
			scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
			//可视范围内底部高度
			scrollBottom = scrollTop + document.documentElement.clientHeight,
			//图片的顶部位置
			imgTop = this.pageY(img),
			//图片的底部位置
			imgBottom = imgTop + img.offsetHeight;
		//判断图片是否在可视范围内:图片底部高度大于可视视图顶部高度并且图片底部高度小于可视
		//视图底部高度，或者图片顶部高度大于可视视图顶部高度并且图片顶部高度小于可视视图底部高度
		if(imgBottom>scrollTop && imgBottom<scrollBottom || (imgTop>scrollTop && imgTop < scrollBottm))
			return true;
		//不满足上面条件则返回false
		return false;
	},
	//获取元素页面中的纵坐标位置
	pageY:function(element){
		//如果元素有父元素
		if(element.offsetParent){
			//返回元素+父元素高度
			return element.offsetTop + this.pageY(element.offsetParent);
		}else{
			//否则返回元素高度
			return element.offsetTop;
		}
	},
	//绑定事件(简化版)
	on:function(element,type,fn){
		if(element.addEventListener){
			addEventListener(type,fn,false);
		}else{
			element.attachEvent('on'+type,fn,false);
		}
	},
	//为窗口绑定resize事件与scroll事件
	bindEvent:function(){
		var that = this;
		this.on(window,'resize',function(){
			//节流处理更新图片逻辑
			throttle(that.update,{context:that});
		});
		this.on(window,'scroll',function(){
			//节流处理更新图片逻辑
			throttle(that.update,{context:that});
		})
	}
}

//延迟加载container容器内的图片
new LazyLozd('container');

//打包统计对象
var LogPack = function(){
	var data = [],		//请求缓存数组
		MaxNum = 10,	//请求缓存最大值
		itemSplitStr = '|',	//统计项统计参数间隔符
		keyValueSplitStr = '*',	//统计项统计参数键值对间隔符
		img = new Image();	//请求触发器，通过图片src属性实现简单的get请求
	//发送请求方法
	function sendLog(){
		//请求参数
		var logStr = '';
			//截取MaxNum个统计项发送
			fireData = data.splice(0,MaxNum);
		//遍历统计项
		for(var i =0,len = fireData.length;i<len;i++){
			//添加统计项顺序索引
			logStr += 'log'+i+'=';
			//遍历统计项内的统计参数
			for(var j in fireData[i]){
				//添加统计项参数键 + 间隔符 + 值
				logStr += j + keyValueSplitStr + fireData[i][j];
				//添加统计项统计参数间隔符
				logStr += itemSplitStr;
			}
			// &符拼接多个统计项
			logStr = logStr.replace(/\|$\,'')+'&';
		}
		//添加统计项打包长度
		logStr += 'logLength=' + len;
		//请求触发器发送统计
		img.src = 'a.gif?' + logStr;
	}
	//统计方法
	return function(param){
		//如果无参数则发送统计
		if(!param){
			sendLog();
			return;
		}
		//添加统计项
		data.push(param);
		//如果统计项大于请求缓存最大值则发送统计请求包
		data.length >= MaxNum && sendLog();
	}
}();
