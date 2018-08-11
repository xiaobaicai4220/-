//落字效果. 
//使用方式. 主HTML中要有#myCanvas 的<canvas>

$(document).ready(function(){
	var canvas = $("#myCanvas");
	var context = canvas.get(0).getContext("2d");
	
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	
	//调整屏幕大小
	$(window).resize(resizeCanvas);
	
	function resizeCanvas(){
		canvas.attr("width",$(window).get(0).innerWidth);
		canvas.attr("height",$(window).get(0).innerHeight);
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();
	};
	resizeCanvas();
	
	//设置样式
	context.rotate(Math.PI/2);
	var gradient = context.createLinearGradient(0,0,parseInt(canvasHeight),0);
	gradient.addColorStop(0,"#ffffff");
	gradient.addColorStop(0.5,"#369B98");
	//gradient.addColorStop(0.5,"#ffffff");
	gradient.addColorStop(1,"#ffffff");
    context.fillStyle = gradient;
	context.font = "bold 30px '字体','字体','微软雅黑','宋体'";
	
	//文字类
	var Text = function(textStr,x,y,v,a){
		this.textStr = textStr;
		this.x = x;
		this.y = y;
		this.v = v;
		this.a = a;
	}
	
	//文字数组
	var texts = new Array();
	
	//初始化文字数组
	for(let i =0;i<17;i++){
		texts.push(getText());
	};
	
	
	//获取一串文字
	function getText(){
		var str = new String();
		var count = Math.floor(Math.random()*30);
		if(count<5){
			return getText();
		}
		for(var i =0;i<count;i++){
			str = str.concat(Math.random()<0.5?"0":"1");
		}
		let x = -canvasHeight;
		let y = 20+(Math.floor(Math.random()*(-canvasWidth)));
		let v = 4;
		let a = 1 + 0.025*Math.random();
		return new Text(str,x,y,v,a);
		
	}
		
	function animate(){
		context.clearRect(0,0,canvasHeight,-canvasWidth);
		//context.fillRect(0,0,canvasHeight,-canvasWidth);
		
		//绘制文字
		var textLength = texts.length;
		for(let i =0;i<textLength;i++){	
			var temText = texts[i];
			
			//文字坐标变化
			temText.v = temText.v*temText.a;
			temText.x += temText.v;
			//坐标检测
			if(temText.x > canvasHeight ){
				//超界.
				let tem = getText();
				texts[i] = tem;
			};
			context.fillText(temText.textStr,temText.x,temText.y);
		}
		
		setTimeout(animate,33);
	};
	animate();
});
	