//
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
	var gradient = context.createLinearGradient(0,0,Math.floor(canvas.width),0);
	gradient.addColorStop(0,"#ffffff");
	gradient.addColorStop(0.5,"#369B98");
	gradient.addColorStop(1,"#ffffff");
    context.fillStyle = gradient;
	context.font = "bold 20px '字体','字体','微软雅黑','宋体'";


var Text = function(text,x,y,v){
		this.text = text;
		this.x = x;
		this.y = y;
		this.v = v;
	}
	
	//文字数组
	var texts = new Array();
	
	//初始化化文字数组
	for(let i =0;i<15;i++){
		let x = 10+(Math.floor(Math.random()*(1000)));
		let y = 20+(Math.floor(Math.random()*(-1000)));
		let v = 3;
		let text = getText();
		
		texts.push(new Text(text,x,y,v));
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
		return str
	}
var textLength = texts.length;
		for(let i =0;i<textLength;i++){
			var temText = texts[i];
			console.log(temText[text],temText[x],temText[y]);
		}