/***
 *canvas基础函数
 *fill()	填充路径
 *stroke()	描边
 *arc(x,y,r,stareAngle,endAngle)	创建圆弧
 *rect(x,y,width,height)	创建矩形
 *fillRect(x,y,width,height)	绘制矩形路径区域
 *strokeRect(x,y,width,height)	绘制矩形路径描边
 *clearRect(x,y,width,height)	在给定的矩形内清除指定的像素
 *arcTo()	创建两切线之间的弧/曲线
 *beginPath()	起始一条路径，或重置当前路径
 *moveTo(x,y)	把路径移动到画布中的指定点，不创建线条
 *lineTo(x,y)	添加一个新点，然后在画布中创建从该点到最后指定点的线条
 *closePath()	创建从当前点回到起始点的路径
 *clip()	从原始画布剪切任意形状和尺寸的区域
 *quadraticCurveTo(cpx,cpy,x,y)	创建二次方贝塞尔曲线
 *bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)	创建三次方贝塞尔曲线
 *isPointInPath()	如果指定的点位于当前路径中，则返回 true，否则返回 false
 ***
 ** 变形 **
 *translate(x,y)  平移
 *rotate(angle)   旋转
 *scale(x,y)      缩放
 ***
 ** 样式 **
 *lineCap | 设置或返回线条的结束端点样式 
 *lineJoin | 设置或返回两条线相交时，所创建的拐角类型 
 *lineWidth | 设置或返回当前的线条宽度 
 *miterLimit | 设置或返回最大斜接长度
 *fillStyle  设置fill的样式
 *strokeStyle 设置stroke的样式
 ***
 ** 渐变 **
 *createLinearGradient(x1,y1,x2,y2)  创建线性渐变
 *eg: var gradient = ctx.createLinearGradient(0,0,0,100);
 *        gradient.addColorStop(0,"color1");
 *        gradient.addColorStop(1,"color2");
 *createRadialGradient(x0,y0,r0,x1,y1,r1)   创建放射性渐变
 *eg: var gradient = ctx.createRadialGradient(canvasCentreX,canvasCentreY,0,canvasCentreX,canvasCentreY,250)
 *        gradient.addColorStop(0,"color1");
 *        gradient.addColorStop(1,"color2");
 *        ctx.fillStyle = gradient;
 *        ctx.fillRect(0,0,canvas.width(),canvas.height());
 *** 
 **   操作文字 **
 *shadowOffsetX    阴影X轴位移
 *shadowOffsetY    阴影Y轴位移
 *shadowBlur       阴影大小
 *shadowColor      阴影颜色
 *fillText(text,x,y) 
 ***
 **   操作图片 **
 *var img = new Image()  					创建图片对象
 *img.onload = function(){}  				设置img对象的onload属性
 *drawImage(image,x,y)   					绘制图像
 *drawImage(image,x,y,width,height) 		绘制图像
 *drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)  绘制图像
 *getImageData(x,y,width,height)  			访问像素值
 *createImageData(width,height);			创建像素值
 *putImageData(imageData,x,y);				将imageData放置在(x,y)处
 **imageData数据类型:
 *imageData[((y-1)*(width*4)) + ((x-1)*4)] :获取(x,y)处的red像素值
 ***/
 
/** Rect  **/
var Shape = function(x,y,width,height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

/** 随机选择形状  **/
for(var i = 0;i<10;i++){
	var x = Math.random()*250;
	var y = Math.random()*250;
	var width = height = Math.random()*50;
	shapes.push(new Shape(x,y,width,height));
};