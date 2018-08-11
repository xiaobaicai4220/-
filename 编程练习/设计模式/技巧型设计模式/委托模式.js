/**委托模式**/

var ul = document.getElementById("container"),
	li = document.getElementsByTagName("li"),
	i = li.length - 1;
for(;i>=0;i--){
	li[i].onclick = function(){
		this.style.backgroundColor = 'grey';
	}
}

ul.onclick = function(e){
	var e = e || window.event,
		tar = e.target||e.srcElement;
	if(tar.nodeName.toLowerCase() === 'li'){
		tar.style.backgroundColor = 'grey';
	}
}

/** 委托模式一 **/
<div id="btn_container">
	<button id="btn">demo</button>
</div>
var g = function(id){return document.getElementById(id)}
g('btn').onclick = function(){
	g('btn_container').innerHTML = '触发了事件';
}

g('btn').onclick = function(){
	g('btn').onclick = null;
	g('btn_container').innerHTML = '触发了事件';
}

g('btn_container').onclick = function(e){
	//获取触发事件元素
	var target = e&&e.target || window.event.srcElement;
	//判断触发事件元素是否是id为btn的元素
	if(target.id === 'btn'){
		//重置父元素内容
		g('btn_container').innerHTML = '触发了事件';
	}
}


/** 委托模式二 **/
$.get("./deal.php?q=banner",function(res){
	//
})
$.get("./deal.php?q=aside",function(res){
	//
})
$.get("./deal.php?q=article",function(res){
	//
})

var Deal = {
	banner:function(res){
		//
	},
	aside:function(res){
		//
	},
	article:function(res){
		//
	}
}
$.get('./deal.php?',function(res){
	//数据拆包分发
	for(var i in res){
		Deal[i]&&Deal[i](res[i]);
	}
});
