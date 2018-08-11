/** 中介者模式 **/

//中介者对象
var Mediator = function(){
	//消息对象
	var _msg = {};
	return{
		/***
		 *订阅消息方法
		 *参数type      消息名称
		 *参数action	消息回调函数
		 ***/
		register:function(type,action){
			//如果该消息存在
			if(_msg[type])
				//存入回调函数
				_msg[type].push(action);
			else{
				//不存在 则建立消息容器
				_msg[type] = [];
				//存入新消息回调函数
				_msg[type].push(action);
			}
		},
		/***
		 *发布消息方法
		 *参数type 消息名称
		 ***/
		send:function(type){
			//如果该消息已经被订阅
			if(_msg[type]){
				//遍历已存储的消息回调函数
				for(var i =0,len = _msg[type].length;i<len;i++){
					//执行该回调函数
					_msg[type][i]&&_msg[type][i]();
				}
			}
		}
	}
}();

/***单元测试
//订阅demo信息 执行回调函数--输出first
Mediator.register('demo',function(){
	console.log('first');
});
Mediator.register('demo',function(){
	console.log('hello');
});
Mediator.send('demo');
***/

/***
 *显隐导航小组件
 *参数mod			模块
 *参数tag			处理的标签(消息提醒b，网址span)
 *参数showOrHide	显示还是隐藏
 ***/
 
var showHideNavWidget = function(mod,tag,showOrHide){
	//获取导航模块
	var mod = doucment.getElementById(mod);
	//获取下面的标签名为tag的元素
	var tag = mod.getElementsByName(tag);
	//如果设置为false或者hide则值为hidden，否则visible
	var showOrHide = (!showOrHide || showOrHide == 'hide')?'hidden':'visible';
	//占位隐藏这些标签
	for(var i = tag.length-1;i>=0;i--){
		tag.style.visibility = showOrHide;
	}
};

//用户收藏导航模块
(function(){
	//...其他交互逻辑
	//订阅隐藏用户收藏导航信息提醒信息
	Mediator.register('hideAllNavNum',function(){
		showHideNavWidget('collection_nav','b',false);
	});
	//订阅显示用户收藏导航信息提醒信息
	Mediator.register('showAllNavNum',function(){
		showHideNavWidget('collection_nav','b',true);
	});
	//订阅隐藏用户收藏导航网址信息
	Mediator.register('hideAllNavUrl',function(){
		showHideNavWidget('collection_nav','span',false);
	});
	//订阅显示用户收藏导航网址信息
	Mediator.register('showAllNavUrl',function(){
		showHideNavWidget('collection_nav','span',true);
	});
})();