/** 节流模式 **/

//节流器
var throttle = function(){
	//获取第一个参数
	var isClear = arguments[0],fn;
	//如果第一个参数是boolean类型那么第一个参数则表示是否清除计时器
	if(typeof isClear === 'boolean'){
		//第二个参数则为函数
		fn = arguments[1];
		//函数的计时器句柄存在，则清除该计时器
		fn.__throttleID && clearTimeout(fn.__throttleID);
	//通过计时器延迟函数的执行
	}else{
		//第一个参数为函数
		fn = isClear;
		//第二个参数为函数执行时的参数
		param = arguments[1];
		//对执行时的参数适配默认值，这里我们用到以前学过的extend方法
		var p = extend({
			context:null,	//执行函数执行时的作用域
			args:[],		//执行函数执行时的相关参数
			time:300
		},param);
		//清楚执行函数计时器句柄
		arguments.callee(true,fn);
		//为函数绑定计时器句柄，延迟执行函数
		fn.__throttleID = setTimeout(function(){
			//执行函数
			fn.apply(p.context,p.args)
		},p.time)
	}
}

//首先引入jquery.js与easing.js方便返回顶部动画实现
//返回顶部按钮动画
function moveScroll(){
	$("#xiaobaicai").css({
	"background-color":"red"});
}
//监听页面滚动条事件
$("#xiaobaicai").on('click',function(){
	console.log("xiaobaicai");
	//节流执行返回顶部按钮动画
	throttle(moveScroll);
})
		