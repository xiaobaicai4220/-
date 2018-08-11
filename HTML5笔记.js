/***
 *@name HTML5 APP开发笔记
 *@author xiaobaicai
 *@startTime 2018/7/9
 *@lastTime  2018/7/10
 ***
 
***  HTML5页面基础  ***
*注释      <!--  注释语句  -->
*DTD声明   <!DOCTYPE html>
*根标签    <html>
*头部标签  <head>
*主体标签  <body>
*布局DIV标签
  内嵌样式 <div style="background-color:red"></div>
*文本控制标签
  段落 <p></p>
  水平线 <hr/>
  换行   <br/>
*超链接 <a>
*列表 
  无序列表   <ul> <li></li></ul>
  有序列表   <ol> <li></li></ol>
*语义化标签
  <header>  网页头部，可包含logo,导航，搜索条等内容
  <main>    主体内容
  <nav>     定义包含多个超链接的内容，标注页面导航链接
  <footer>  定义网页或文章的尾部区域
  <section> 标注为网页中的一个独立区域
  <article> 完整，独立的内容块，可包含独立的<header><footer>
  <aside>   定义主内容之外的内容块，如注解
  <figure>  代表一段独立的内容，经常与<figcaption>配合使用，可用于文章中的图片
            插图，代码，表格等
  <figcaption> 定义<figure>元素的标题
  
*页面交互性标签 
 <details> <summary>1</summary> <ul><li>2</li><li>3</li></ul></details>
*progess标签 
  <progess value="当前值" max="最大值"></progess>
*表格
*表单
  <from method="提交方式" action="服务端url" enctype="编码方式"></from>
*input标签
  文本输入框    <input type="text" value="hello" />
  密码输入框    <input type="password" value="12345" />
  按钮          <input type="button" value="按钮" />
  单选框	    <input type="radio" name="sex" checked /> 男
  复选框		<input type="checkbox" checked />同意与否
  提交			<input type="submit" value="注册" />
  图片按钮		<input type="image" src=".."> 
  重置			<input type="reset" value="取消" />
  隐藏 			<input type="hidden" value="这是隐藏的值" />
  文件上传框 	<input type="file" multiple />
  email输入 	<input type="email" />
  url输入 		<input type="url" />
  电话输入 		<input type="tel" />
  搜索框		<input type="search" />
  颜色输入框 	<input type="color" />
  数字输入框 	<input type="number" value="当前值" min="最小值" max="最大值" 	step="值的间隔">
  滑动条  		<input type="range" value="当前值" min="最小值" max="最大值" step="值的间隔">
  日期和时间输入框 <input type="date" />
  月份输入框    <input type="month" />
  时间输入框    <input type="time" />
*input标签的其他属性
  placeholder  required  pattern  disabled  autofocus
*textarea标签
*select标签
  <select>
	<option value="item1">1</option>
	<option value="item2">2</option>
  </select>
 
*移动开发中的meta标签的使用
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />

*ios系统的一些控制
  <!-- 强制全屏 -->
  <meta name="Apple-mobile-web-App-capable" content="yes" />
  <!-- 设置状态栏颜色 -->
  <meta name="Apple-mobile-web-App-status-bar-style" content="black" />
  <!-- 设置添加到主屏标题 -->
  <meta name="Apple-mobile-web-App-title" contend="标题" />
  
***  CSS样式   ***
*CSS单位
  % em ex px  rem vh vw
*颜色
  预定义颜色名 rgb(x,x,x) rgba(x,x,x,a) #ffffff 
*HTML中应用CSS
  内联   <div style="color:red;font-size:14px;">HTML5</div>
  内嵌   <style>.div{color:red;font-size:14px;}</style>
  链接   <link rel="stylesheet"  href="CSS文件路径" />
*选择器

***  JavaScript编程基础   ***
*Math对象常用方法
 abc    返回数值的绝对值
 acos   返回数值的反余弦值
 asin   返回数值的反正切值
 ceil   向上取整
 exp    返回e的幂
 floor  向下取整
 round  四舍五入
*Date对象


*** JavaScript交互编程基础  ***
*document对象
  alinkColor    表示激活链接(焦点在此链接上)的颜色
  bgColor   	表示页面背景色
  body 			表示<body>节点
  charset 		表示页面的字符集
  doctype 		表示文档类型节点
  documentElement 表示<html>节点
  fgColor 		表示前景色(文本颜色)
  forms 		表示页面上的所有form元素
  head 			表示<head>节点
  images 		表示页面上的所有img元素
  lastModified 	表示最终修改过的日期
  linkColor 	表示未单击过的链接颜色
  links 		表示页面中的所有a元素
  scripts 		表示页面中的所有script元素
  styleSheets   表示页面中的所有link或style元素
  title 		表示title的内容
  URL  			表示当前文档的URL
  vlinkColor    表示已单击过的链接颜色
*查找节点
  document.getElementById  查找指定ID的节点
  document.getElementsByClassName  查找指定class的节点
  document.getElementsByTagName
  querySelector 
  querySelectorAll
*Node对象的常用属性和方法
  innerHTML         表示当前节点的内部标签
  innerText 		表示当前节点的文字内容
  length 			返回Nodelist中的节点数
  nodeName 			节点名称，根据节点的类型而定义
  nodeValue 		节点的值，根据节点的类型而定义
  nodeType 			节点类型常理值之一
  firstChild 		childNodes节点集合中的第一个节点
  lastChild 		childNodes节点集合中的最后一个节点
  parentNode   		指向所在节点的父节点
  childNodes 		所有子节点的集合
  previousSibling	指向前一个兄弟节点
  nextSibling		指向后一个兄弟节点
  hasChildNodes 	是否包含一个或多个子节点
  AppendChild(node) 将node添加到childNodes的结尾
  removeChild(node)	从childNodes中删除node
  replaceChild(newnode,oldnode)  将childNodes中oldnode换成newnode
  insertBefore(newnode,refnode)  在childNodes中refnode之前插入newnode
  cloneNode(deep)				 deep为true是深复制，为false是浅复制
*处理属性
  getAttribute(name) 		获得某个属性的值
  setAttribute(name,value)	设置某个属性的值
  removeAttribute(name)		移除某个属性
*读取和设置内容
  innerText
  innerHTML
*创建节点
  createTextNode(text)		创建包含text的文本节点
  createElement(tagName)	创建标签为tagName的HTML元素节点
  createDocumentFragment()  创建文档碎片节点
*DOM的样式编程
  className  			读取和设置HTML元素的class属性
  classList 			读取和设置元素的多个class属性
		lenth 			返回HTML元素对象class属性中样式类的个数
		add(className)	给HTML元素的class属性添加一个样式类
		remove(className) 给HTML元素对象的class属性删除一个指定的样式类
		toggle(className) 若样式存在，指向remove,若样式不存在，执行add
		contains(className) 检测是否包含指定的类
*style对象
  style对象包含了与每个CSS样式对应的属性，只是格式略有不同。
  使用大写代替-  如 background-color   backgroundColor
*常用事件
  onkeydown				按键被按下
  onkeypress 			按键被按住
  onkeyup				按键被释放
  onmousedown			鼠标键按下
  onmousemove 			鼠标移动
  onmouseout			鼠标从某个HTML元素中移开触发
  onmouseover 			鼠标移动到某个HTML元素上时触发
  onmouseup				松开鼠标键触发
  onclick 				鼠标被点击时触发
  ondbclick  			鼠标双击某个HTML元素触发
  ontouchstart			当手指触摸屏幕时触发
  ontouchmove 			当手指在屏幕上滑动的时候连续地触发
  ontouchend			当手指从屏幕上离开的时候触发
  ontoouchcancel		当系统停止跟踪触摸的时候触发(例如有电话或短信时)
  onabort			图片加载被中断被触发
  onblur 			HTML元素失去焦点时触发
  onchange 			内容发生改变时触发
  onerror 			当加载文档或图像时发生错误时触发
  onfocus 			HTML获得焦点时触发
  onresize 			窗口调整尺寸时触发
  onunload 			退出页面时触发
*标准的事件监听函数
  addEventListener(eventName,callback,usecaptuer);
  usecapture设置事件监听是在"捕获"阶段中监听(false)还是在"冒泡"阶段(true)中监听
*事件触发过程
  1:捕获阶段   从window到达目标节点的阶段过程
  2:目标阶段   在目标节点上触发事件的过程
  3:冒泡节点   从目标节点原路返回的过程
*事件的Event对象
  cancelable		Boolean 表示事件能否被取消
  cancelBubble		Boolean 表示事件冒泡是否取消
  clientX           Number  事件发生时，鼠标在客户端区域的X坐标
  clientY			Number  事件发生时，鼠标在客户端区域的Y坐标
  currentTarget 	Object  触发事件的HTML元素对象
  eventPhase 		Number  事件所处阶段 0-捕获阶段 1-目标阶段 2-冒泡阶段
  pageX 			Number  鼠标或触摸点相对页面的X坐标
  pageY  			Number  鼠标或触摸点相对页面的Y坐标
  preventDefault() 	Function阻止事件的默认行为
  screenX  			Number  相对屏幕的鼠标X坐标
  screenY			Number  相对屏幕的鼠标Y坐标
  stopPropagation() Function阻止事件冒泡
  target 			Object  引起事件的HTML元素对象
  type 				String  触发的事件类型
  isTrusted 		Boolean 事件是浏览器触发的还是JavaScript触发的
  
*** jQuery编程基础  ***
*jQuery选择器
  $(selector).action()
*jQuery的基本过滤器
  :first        匹配找到的第一个元素
  :last         匹配找到的最后一个元素
  :even 	    匹配索引值为偶数的元素
  :odd 		    匹配索引值为奇数的元素
  :eq(index)   	匹配给定索引值的元素
  :gt(index)	匹配大于给定索引值的元素
  :lt(index)	匹配小于给定索引值的元素
  :header 		匹配h1,h2,h3类的标签
  :animated 	匹配所有正在执行动画效果的元素
 内容过滤器
  :contains(text)	$("div:contains('hello')")
  :has(selector)	$("div:has(p)")
  :parent  查找有子节点的P元素  $("p:parent")
 可见性过滤器
  :hidden 		匹配所有不可见元素
  :visible 		匹配所有可见元素
 表单选择器
  :input        匹配所有的input,textarea,button元素
  :text 		匹配所有的输入文本框
  :password 	匹配密码框
  :radio 		匹配单选框
  :checkbox 	匹配复选框
  :submit 		匹配提交框
  :image 		匹配图片按钮
  :reset 		匹配重置按钮
  :button 		匹配普通输入按钮
  :file 		匹配上传按钮
  :selected     匹配所有选中的option元素
*jQuery对象与DOM对象的转换
  var $div = $("#mydiv")	//取得jQuery对象
  var oDiv = $div[0]		//取得DOM对象
  var oDiv = document.getElementById("mydiv")  //取得DOM对象
  var $div = $(oDiv)		//转换成相应的jQuery对象
*jQuery事件监听
  bind() 		向匹配元素附加一个或更多事件处理函数
  blur()		监听元素对象的onblur事件
  change()		onchange
  click() 		onclick
  dbclick()		ondbclick
  error()		onerror
  focus()		onfocus
  hover()		onhover
  keydown()		onkeydown
  keypress()	onkeypress
  mousedown()	onmousedown
  mouseenter()	onmouseenter
  mouseleave()	onmouseleave
  mousemove()	onmousemove
  mouseout()	onmouseout
  mouseover()	onmouseover
  mouseup()		onmouseup
  on()			给元素绑定一个或多个事件的事件处理函数
  off()			给元素移除一个或多个用on绑定的事件处理函数
  one()			想元素添加只能执行一次的事件处理函数
  resize()		主要用于监听window对象的onresize事件
  scroll()		监听元素的onscroll事件
  select()		监听元素的onselect事件
  submit()		监听form表单的onsubmit事件
  trigger()		触发元素的某个事件
  unbind()		移除由bind()方法添加的一个或多个事件处理函数
*jQuery遍历方法
  $(selector).each(function([index]){
	  //处理代码，this关键字指向当前对象，index代表当前序号
  })
  $.each(array,function([index]){})
  $.each(object,function(key){})
*jQuery DOM交互
  attr() removeAttr()   设置属性
  html() text() 		设置innerHTML,innerText
  val()					设置Value
  $("元素名")			创建元素
  Append() AppendTo()	尾部附加
  before() after()		插入元素
  remove() empty()		删除元素
  replaceWith()			替换元素
  clone()				克隆元素
  addClass() removeClass() 
  toggleClass() css()	样式修改
*jQuery全局函数的扩展
  $.extend({methodName:function([args]){...}}) //扩展函数
  $.methodName([args])			//调用函数
  
***   AJAX通信技术   ***

*session标题各字段的含义
  #			HTTP会话编号，从1开始，按HTTP的请求顺序递增
  Result 	HTTP的相应状态码
  Protocol	HTTP或HTTPS
  Host		请求地址的域名
  URL 		请求的服务器路径和文件名
  Body		相应内容主体的字节数
  Cache		缓存或过期的时间控制
  Content-Type  相应消息的内容
  Process  	发出此请求的Windows进程及进程ID
  
*HTTP请求
  1:请求行
	Method Request-URI HTTP-Version CRLF
	eg: GET http://127.0.0.1:8020/index HTTP/1.1
  2:请求报头
  3:请求正文
*常用的HTTP请求方法
  GET		请求由URI所标识的资源
  POST 		向URI所标识的资源通过请求正文发送附加的数据
  HEAD		请求获取由URI所标识的资源消息报头
  PUT		请求服务器存储一个资源
  DELETE 	请求服务器删除由URI所标识的资源
  TRACE		请求服务器回送的请求信息，主要用于测试或诊断
  CONNECT	HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务
  OPTIONS	请求查询服务器的性能，或查询与资源相关的选项和需求
  
*HTTP响应
  1:状态行
	HTTP-Version Status-Code Reason-Pharse CRLF
	eg:  HTTP/1.1 200 OK
  2:响应报头
  3:响应正文

*常见状态码
  200		客户端请求成功
  400		由于客户端请求有语法错误，不能被服务器所理解
  401 		请求未经授权,这个状态码必须和WWW-Authenticate报头域一起使用
  403		服务器收到请求，但是拒绝提供服务
  404		请求的资源不存在
  500		服务器发送错误，导致无法完成客户端的请求
  503		服务器当前不能处理客户端的请求

*消息报头
  HTTP消息报头包括普通报头，请求报头，响应报头，实体报头
  普通报头
	Cache-Control	用于指定缓存指令
	Connection		允许发送者指定连接的选项，例如指定连接是持续的，或者"close"
					选项，通知服务器，在消息完成后，关闭连接
	Date			消息产生的日期和时间
  请求报头
    Accept			指定客户端能够处理的MIME类型
	Accept-Charset	用于标名客户端接受的字符集
	Accept-Encoding	用于标明可接受的内容编码，如gzip和deflate压缩编码
	Accept-Language	标明浏览器支持的语言
	Cookie			向服务器发送属于该网站的Cookie
	Host			用于指定被请求资源的Internet主机和端口号，通常从URL中提取
	Upgrade-Insecure-Requests 让浏览器不在显示HTTPS页面中的http请求警报
	User-Agent 		标明客户端的操作系统，浏览器和其他相关信息，服务器根据这个
					报头判断浏览器类型，可以利用这个报头对不同的浏览器作相应处理
	Range			标明请求资源的字节范围，可用来实现断点续传功能
  响应报头
    Location		用于重定向到一个新的位置，常见的服务器控制页面跳转实际上就是
					在响应消息中用这个报头控制
	Server			包含了服务器用于处理请求的Web服务器软件信息
	Set-Cookie		服务器指示浏览器生成并存储Cookie，如服务器端编程的Session
					的SessionId就是靠这个报头生成的
  实体报头
	Content-Encoding	标明正文的压缩方式，客户端在使用前解压
	Content-Language	描述资源所用自然语言，
	Content-Length		标明完全的正文长度，以十进制的字节方式表示
	Content-Type 		指明发送给浏览器的实体正文的媒体类型
	Last-Modified		用于标明资源的最后修改日期和时间
	Expires				给出响应过期的日期和时间，针对浏览器的缓存，为了让其在
						一段时间后更新页面，可使用该报文

*XMLHttpRequest对象
  XMLHttpRequest对象的常用属性
    onprogress      分成上传和下载两种情况
	ontimeout		HTTP请求超时事件触发器
	onreadystatechange 状态改变的事件触发器，每个状态改变都会触发这个事件触发器
	readyState		数值，代表XMLHttpRequest对象的5个状态
	responseText	服务器的响应，字符串
	responseXML		服务器的响应，XML DOM对象
	status 			服务器返回的HTTP状态码
	statusText		HTTP状态码的响应文本
	timeout			设置HTTP请求的时限，单位为ms，超时时限自动停止HTTP请求
	abort()			停止当前请求
	getResponseHeader(header) 返回指定响应头的字符串值
  XMLHttpRequest对象的常用方法
    abort()						停止当前请求
	getAllResponseHeaders()		将HTTP请求的所有响应头作为键值对返回
	getResponseHeader(header)	返回指定响应头的字符串值
	open(method,URL[,asyncFlay[,"userName"[,"password"]]])
								建立对服务器的请求
	setRequestHeader(header,value)  把指定请求头设置为所提供的值，在调用该方法
									之前必须先调用open方法
	send(content)				向服务器发送请求(空字符串必须是null)
  设置状态改变时的事件，
   XMLHttpRequest对象有一个属性readyState，有5个值，对应5个状态
	0   未初始化，对象已创建，但还未使用open方法 
	1   正在加载，还未使用send方法
	2	已加载，send方法已使用，但当前的状态未知
	3	交互中，接收了部分数据
	4	完成，数据接收完毕
  一段XHR代码
    eg:
	  var xhr = new XMLHttpRequest();
	  xhr.open("GET","http://www.xiaobaicai.com/css/example.css",true);
	  xhr.onreadystatechange = function(){
		  if(xhr.readyState == 4){
			  if(xhr.status == 200){
				  odiv.innerHTML = xhr.responseText;
			  }
			  else{
				  alert("请求失败")
			  }
		  }
	  }
	  xhr.send(null);

*FormData对象
  创建
    var formData = new FormData();
	formData.Append(key,value);		
	
	var oform = document.getElementById("myform");
	var formData = new FormData(oform);
  发送
    xhr.send(formData);
  使用FormData对象上传文件
    XMLHttpRequest对象与上传文件相关的事件
	  progress    	进度检测事件 event{lengthComputable,loaded,total}
	  load 			传送数据成功事件
	  abort 		传送数据中断事件
	  error 		传送数据发生错误事件
	  loadstart		开始传送数据事件
	  
***  WebSocket基础  ***
*


*** 播放多媒体  ***
  <audio>标签
    <audio src="音频文件地址" id="myaudio"></audio>
  <video>标签
    <video src="音频文件地址" id="myvideo"></video>
  标签的主要属性
    autoplay	自动播放音频和视频
	controls	显示系统自带的播放面板
	loop		自动循环播放音频和视频
	preload		值为"auto"表示页面载入后自动加载音频或视频，值为"meta"表示页面
				载入后只加载音频或视频的元数据。为none表示页面载入后不加载
	muted		静音控制，音频或视频播放是无音量
  <video>标签独有的属性
    poster      用来定义视频播放器的预览图片
	width 		设置视频播放器的宽度，不需要使用单位，如width="320"
	height
	
*audio对象和video对象的API
  获取对象
    var myaudio = document.getElementById("myaudio");
	var myvideo = document.getElementById("myvideo");
  对象常用方法
    load()		重新加载音频/视频
	play()		播放音频/视频
	pause()		暂停当前播放的音频/视频
  常用属性
    autoplay   	Boolean 设置或返回是否在加载完成后随即播放音频/视频
	buffered    返回TimeRanges对象，表示用户的音视频缓冲范围。缓冲范围指的是已
				缓冲音视频的时间范围。如果用户在音视频中跳跃播放，会得到多个缓冲
				范围，TimeRanges对象属性如下:
				  length        已缓冲范围的数量
				  start(index)  获得某个已缓冲范围的起始位置
				  end(index)    获得某个已缓冲范围的结束位置
	currentSrc  String 返回当前音频/视频的URL
	currentTime Number 返回或设置视频播放的当前位置 以秒计
	duration	Number 返回当前音频/视频的长度，以秒计
	ended 		Boolean 返回音频/视频是否已结束
	loop 		Boolean 设置或返回音频/视频是否应该在结束时再次播放
	muted 		Boolean 设置或返回音频/视频是否应该被静音
	paused      Boolean 返回音频/视频是否已暂停
	playbackRaete  Number 设置或返回音频/视频的播放速度
	played		返回TimeRanges对像
	preload 	Boolean类型，设置或返回是否在页面加载后立即加载音频/视频
	readyState  Number类型，返回音频/视频的当前就绪状态。0:没有关于音频/视频是否
				就绪的信息；1:关于音频/视频就绪的元数据;2:关于当前播放位置的数据
				是可用的，但没有足够的数据来播放下一帧/毫秒;3:当前以及至少下一帧
				的数据是可用的；4:可用数据足以开始播放
	seekable	返回TimeRanges对像
	volume		Number 设置或返回音频/视频的当前音量，介于0.0~1.0之间
  常用事件 
    abort			当音频/视频的加载已放弃时
	canplay			当浏览器可以播放音频时
	canplaythrough	当浏览器可在不因缓冲而停顿的情况下进行播放时
	durationchange	当音频/视频的时长已更改时
	emptied			当目前的播放列表为空时
	ended 			当目前的播放列表已结束时
	error 			当在加载其间已发生错误时
	loadeddata 		当浏览器已加载当前帧时
	loadedmetadata	当浏览器已加载元数据时
	loadstart		当浏览器已加载音频/视频时
	pause 			暂停时
	play 			播放时
	playing 		当音频/视频已因缓冲而暂停或因停止后已就绪时
	progress 		当浏览器正在下载音频/视频时
	ratechange 		当音频/视频的播放速度已更改时
	seeked 			当用户已移动/跳跃到音频/视频中的新位置时
	seeking 		当用户开始移动/跳跃到音频/视频中的新位置时
	timeupdate		当目前的播放位置已更改时
	volumechange	当音量已更改时
	waiting 		当视频由于需要缓冲下一帧而停止时
	
***  本地存储   ***
  localStorage  和 sessionStorage 
    区别:localStorage是本地存储，存储是永久性的，除非手动删除，
	     sessionStorage是会话存储，当浏览器关闭时，数据将会被删除
    API方法
	  setItem(key,value)		为Web存储对象添加一个键值对
	  getItem(key)				获得键索引值对应的值
	  clear()					清楚所有的键值对数据
	  removeItem(key)			删除
	  key(n)					检索第n个键的值
  Web SQL数据库
    支持程度太低了.  忽略. 
  IndexDB 数据库.
    同样支持度不高..

***  Canvas绘图  ***
  定义Canvas
    <canvas id="mycanvas" width="400" height="400"></canvas>
	var ctx = document.getElementById("mycanvas").getContext("2d");
  绘制直线
    strokeStyle		设置画笔绘制路径的颜色，渐变和模式
	lineWidth		定义绘制线条的宽度
	globalAlpha		定义绘制内容的透明度,0.0~1.0
	lineCap			指定线条两端的线帽如何绘制，"butt","round","square"
	beginPath()		起始一条路径
	closePath()		创建从当前点回到起始点的路径
	moveTo(x,y)		把路径移动到画布中的指定点(x,y),不创建线条
	lineTo(x,y)		添加一个新点，然后在画布中创建从该点到最后指定点的线条
	stroke()		绘制已定义的路径
  绘制贝塞尔曲线
    ctx.quadraticCurveTo(cpx,cpy,x,y);
	ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
  绘制填充
    fillstyle
	fill()
  使用渐变色
    ctx.createLinearGradient(xStart,yStart,xEnd,yEnd)  线性渐变
	ctx.createRadialGradient(xStart,yStart,radiusStart,xEnd,yEnd,radiusEnd) 
			放射性渐变
	addColorStop(offset,color)  设置颜色基准
  绘制矩形
    rect(x,y,width,height)	
	strokeRect(x,y,width,height)
	fillRect(x,y,width,height)
  绘制圆弧
    ctx.arc(x,y,radius,startAngle,endAngle,countercolockwise)
  绘制文字
    font 		设置绘制文字所使用的字体，使用方式与CSS font属性一致
	fillText(text,x,y,[,maxWidth])
	strokeText(text,x,y,[,maxWidth])
  绘制图片
    ctx.drawImage(img,x,y)
	ctx.drawImage(img,x,y,width,height)
	ctx.drawImage(img,sx,sy,sWidth,sHeight,x,y,width,height)
  擦除
    ctx.clearRect(x,y,width,hieght)
  坐标变换
    ctx.translate(x,y) 		原点平移
	ctx.rotate(angle)		坐标体系旋转，正值表示顺时针
	ctx.scale(x,y)			坐标体系缩放，x,y是缩放因子
	ctx.save()				将当前坐标体系状态入栈
	ctx.restore()			将上一个保存的坐标体系状态从栈中再次取出
  像素操作
    ctx.getImageData(x,y,width,width)：
	ctx.putImageData(imgData,x,y)
	ctx.createImageData(width,height)
	
***   HTML5+ Runtime   ***
*调用H5+API
  document.addEvenetListener('plusready',function(){
	  //在这里调用5+ API
  },flase);

*H5+ API的各模块
  Accelerometer  	访问设备传感器			plus.accelerometer
  Audio				访问设备麦克风			plus.audio
  Cache				访问应用缓存			plus.cache
  Camera			访问摄像头设备			plus.camera
  Contacts			访问系统联系人信息		plus.contacts
  Device			访问设备信息 			plus.device
  Downloader 		管理文件下载任务		plus.downloader
  File 				访问本地文件系统 		plus.file
  Gallery 			访问系统相册 			plus.gallery
  Geolocation		获取设备位置信息 	 	plus.geolocation
  Messaging			获取设备位置信息 		plus.messaging
  NativeObj 		原生对象 				plus.nativeObj
  NativeUI			原生UI控件 				plus.nativeUI
  Navigator 		浏览器信息				plus.navigator
  Orientation		获取设备方向信息		plus.orientation
  Push				管理消息推送能力		plus.push
  Proximity			获取距离传感器 			plus.proximity
  Storage			管理应用本地数据 		plus.storage
  Uploader			管理文件上传人物		plus.uploader
  Runtime 			管理运行期环境API		plus.Runtime
  Webview			窗口管理 				plus.Webview
  XMLHttpRequest	跨域网络访问API			plus.net
  Zip				文件压缩与解压缩		plus.zip
  Maps				地图扩展功能			plus.maps
  Barcode			二维码功能				plus.barcode
  Payment			支付功能				plus.payment
  Share				分享功能				plus.share
  Speech			语言识别功能			plus.speech
  Statistic			统计功能				plus.statistic
  
*Webview模块
  all 		获取应用中已创建的所有Webview模块，包括所有未显示的Webview窗口，返回
			一个WebviewObject对象数组，按创建的先后顺序排列，即数组中第一个
			WebviewObject对象数组，按创建的先后顺序排列，即数组中第一个
			WebviewObject对象是加载应用的入口页面。语法形式为:
				Array[WebviewObject] plus.Webview.all();
				
  close     关闭已经打开的Webview的窗口，需先获取窗口对象或窗口id，并可指定关闭
			窗口的动画及动画持续时间。语法形式为:
			
			    void plus.Webview.close(id_wvobj[,aniClose,duration,extras])
	id_wvobj	窗口的id或窗口对象，
	aniClose	String类型，代表关闭Webview窗口的动画效果，取值如下
	  "auto"			自动选择动画，即使用显示时设置的窗口动画对应的关闭动画
	  "none"			立即关闭页面，无任何动画
	  "slide-out-right" 页面从屏幕中横向向右滑动到屏幕外关闭
	  "slide-out-left"	页面从屏幕中横向向左滑动到屏幕外关闭
	  "slide-out-top"	页面从屏幕中竖向向上滑动到屏幕外关闭
	  "slide-out-bottom"页面从屏幕中竖向向下滑动到屏幕外关闭
	  "fade-out"		页面从不透明到透明渐渐隐藏关闭
	  "zoom-in"			从大逐渐缩小关闭动画
	  "zoom-fade-in"	从大逐渐到小，并且从不透明逐渐到透明隐藏关闭动画
	  "pop-out"			页面从屏幕右侧滑出消失，同时上一个页面带阴影效果从屏幕左
						侧滑入显示
	duration	关闭Webview窗口动画的持续时间，单位为ms，如果没有设置，则使用显示
				窗口动画时间
	extras		关闭Webview窗口扩展参数，是个JSON对象，可用于指定Webview窗口是否
				使用图片加速
  create 	创建Webview窗口，用于加载新的HTML页面，可通过style设置Webview窗口的
			样式，创建完成后需要调用show方法才能将Webview窗口显示出来。语法形式:
				
				WebviewObject plus.Webview.create(url[,id,styles,extras]);
	url 		新打开Webview窗口要加载的HTML页面地址，支持本地地址和网络地址
	id			新窗口的标识，可用于在其他页面中通过getWedviewById来查找
	extras		创建Webview窗口的额外扩展参数，是一个JSON对象，可用来在界面间传值
	styles 		一个JSON对象，可用来创建Webview窗口的样式。
  currentWebview 获取当前窗口的WebviewObject对象
				  WebviewObject plus.Webview.currentWebview();
  getWebviewById 在已经创建的窗口列表中查找指定标识的Webview窗口并返回。若没有找
				 到指定标识的窗口则返回null,若存在多个相同标识的Webview窗口，则
				 返回第一个创建的Webview窗口
				  WebviewObject plus.Webview.getWebviewById(id);
  getLaunchWebview 获取应用首页WebviewObject窗口对象。
				  WebviewObject plus.Webview.getLaunchWebview();
  getTopWebview  获取应用显示栈顶的WebviewObject窗口对象
				  WebviewObject plus.Webview.getTopWebview();
  hide			根据指定的WebviewObject对象或id隐藏Webview窗口，使得窗口不可见
				  void plus.Webview.hide(id_wvobj[,aniHide,duration,extras]);
  open 			创建并显示Webview窗口，用于加载新的HTML页面，可通过styles设置
				Webview窗口的样式，创建完成后自动将Webview窗口显示出来。
				  WebviewObject plus.Webview.open(url[,id,style,aniShow,duration,showedCB])
  show 			void plus.Webview.show(id_wvobj[,aniShow,duration,showedCB,extras])
  
*Webview配置参数
  cachemode 		string类型，窗口的缓存模式
		default  表示根据cache-control决定是否使用缓存数据，如果存在缓存并且没有
				 过期则使用本地缓存资源，否则从网络获取，
		cacheElseNetwork 主要存在缓存数据则使用(即使已经过期)，否则从网络上获取
		noCache  表示不使用缓存数据，全部从网络上获取
		cacheOnly表示仅使用缓存数据，不从网络上获取
  background 		String类型，窗口的北京颜色，窗口空白区域的背景模式
        颜色值 	    窗口为独占模式显示
		transparent 窗口背景透明，为非独占模式
  blockNetworkImage Boolean类型，是否阻塞网络图片的加载，true表示阻塞，false表示
					不阻塞，可以使用setBlockNetWorkImage() 方法动态修改此状态
  bottom 			String类型，窗口垂直向上的偏移量，支持百分比，默认值无值
  bounce			String类型，窗口遇到边框是否有反弹效果，有4种取值
		none 	  没有反弹效果
		vertical  垂直方向有反弹效果
		horizontal水平方向上有反弹效果
		all		  表示垂直和水平方向上都有反弹效果
  bounceBackground  String类型，窗口回弹效果区域的背景，窗口回弹效果区域的背景支
					持颜色值或图片。 #111111 url(%image path%) url(./icon.png)
  deceleration 		Number类型，表示窗口内停止滑动的减速度
  dock				String,窗口的停靠方式，当Webview窗口添加到另外一个窗口中时，
					停靠方式才会生效
		top  	  表示控件停靠在页面顶部
		bottom	  表示控件停靠在页面底部
		right 	  表示控件停靠在页面右侧
		left 	  表示控件停靠在页面左侧
  errorPage			String,窗口加载错误时跳转的页面地址。当Webview窗口无法加载
					指定的url地址时，(如本地页面不存在,或者无法访问的网络地址),
					此时会自动跳转到指定的错误页面地址(仅支持本地地址)，设置为
					"none"则关闭跳转到错误页面功能，此时显示Webview默认的错误页面
					内容。
  hardwareAccelerated Boolean,窗口是否开启页面加速
  height			String,窗口的高度，未设置高度时，优先通过top,bottom来计算高度
  kernel			String,窗口使用的内核
  left 				String,窗口水平向右的偏移量，默认值为0
  margin 			String,窗口的边距，用于定位窗口的位置，支持auto,表示居中
  mask				String,窗口的遮罩，用于设置Webview窗口的遮罩层样式。遮罩层
					会覆盖Webview中所有内容，包括子Webview，并且截取Webview的所有
					触屏事件，此时Webview窗口的单击操作会触发maskClick事件。可取
					值rgba(0,0,0,0.5)：黑色半透明遮罩
  opacity			Number,窗口的不透明度，0为全透明，1为不透明。
  popGesture		String,窗口的侧滑返回功能，仅IOS平台支持,
		none	  表示无侧滑返回功能
		close	  表示侧滑返回关闭Webview窗口
		hide	  表示侧滑返回隐藏Webview窗口
  render			String,窗口渲染模式,仅Android平台支持
		onscreen	Webview窗口在屏幕区可见是渲染，不可见时不渲染,此时能减少内存
					使用量
		always		Webview在任何时候都渲染，在内存较大的设备上使用，被遮挡的窗口
					在此种模式下显示的时候会有更流畅的效果。默认值为onscreen
  right 			String,窗口水平向左的偏移量，默认根据left和weidth属性来计算
  scalable 			Boolean类型，窗口是否可缩放。设置为true时，用户可通过双指进行
					缩放，默认为false，即不可缩放
  scrollIndicator	String,用于控制窗口滚动条样式，有4种取值。all表示垂直和水平
					滚动条都显示，vertical表示仅显示垂直滚动条；horizontal表示仅
					显示水平滚动条，none表示垂直和水平滚动条都不显示。默认值为all
  scrollToTop		单击设备的状态栏时是否滚动返回至顶部，仅支持ios平台
  softinputMode		String,弹出系统软键盘模式,有两种选值。adjustPan表示弹出软键盘
					时Webview窗口自动上移，以保证当前输入框可见；adjustResize表示
					自动跳转Webview窗口大小(屏幕区域减去软键盘区域),同时自动滚动
					Webview保证输入框可见。默认值为"adjustPan"
  top 				String类型，窗口垂直向下的偏移量,默认为0
  position			String,Webview窗口的排版位置。当Webview窗口添加到另一个窗口中
					时，排版位置才会生效，排版位置决定子窗口在父窗口中的排版方式
		static 	  表示控件在页面中正常定位，如果页面存在滚动条则随窗口位置正常滚
				  动
		absolute  表示控件在页面中绝对定位
		dock 	  表示控件在页面中停靠，停靠的位置由dock属性值决定，默认为absolut
  width				String,窗口的宽度
  zindex 			Number类型，窗口的堆叠顺序值。拥有更高堆叠顺序的窗口总是会处
					于堆叠顺序较低的窗口的前面，拥有相同堆叠顺序的窗口后调用show
					方法则在前面

*Webview打开动画效果参数
  auto			自动选择动画效果
  none 			立即显示页面，无任何动画效果，页面显示默认的动画效果
  slide-in-right页面从屏幕右侧外向内横向滑动显示
  slide-in-left 页面从屏幕左侧外向内横向滑动显示
  slide-in-top  页面从屏幕上侧外向内竖直滑动显示
  slide-in-bottom  页面从屏幕下侧外向上竖直滑动显示
  fade-in 		页面从完全透明到不透明逐渐显示
  zoom-out 		页面在屏幕中间从小到达逐渐放大显示
  zoom-fade-out 页面在屏幕中间从小到达逐渐放大并且从透明到不透明逐渐显示
  pop-in		页面从屏幕右侧滑入显示，同时上一个页面带阴影效果从屏幕左侧滑出隐
				藏
  
*WebviewObject
*1:id
  Webview窗口的标识，是一个String类型，在打开或创建Webview窗口时设置，如果没有设
  窗口标识，此属性值为undefined。所以在创建或打开Webview窗口时，应该尽量为其设置
  ID属性，并保证其值的唯一性。如果要获取应用入口页面所属的Webview窗口的id属性,其
  标识为应用的%AppID%，可通过plus.Runtime.Appid获取(如果是在HBuilder真机运行获取
  的是固定值"HBuilder",需要提交APP云端打包运行后才能获取真实的AppID值)
*2:方法
  添加监听事件   wobj.addEvenetListener(event,listener[,capture])
  Webview窗口事件类型
    close 		窗口关闭
	dragBounce 	窗口顶部下拉回弹
	slideBounce	窗口左右侧滑回弹
	error 		窗口加载错误
	hide		窗口隐藏
	loading		窗口页面开始加载
	loaded 		窗口页面加载完成
	maskClick	窗口显示遮罩层时单击
	show 		窗口显示
	popGesture 	窗口侧滑返回
	titleUpdate	加载页面标题更新

*WebviewObject 方法
  Append  	  将一个Webview窗口或View控件对象添加到当前Webview窗口中
				void wobj.Append(Webview);
  AppendJsFile 添加Webview窗口预加载JS文件
				wobj.AppendJsFile(file);
  back 		  Webview窗口历史记录操作，后退到窗口上次加载的HTML页面，
				void wobj.back();
  children	  获取添加到Webview窗口中的所有子Webview窗口，如果没有子Webview窗口则
			  返回空数组。
			    Array[WebviewObject] wobj.children()
  clear 	  清除原生窗口的内容，用于重置原生窗口加载的内容，清楚其加载的历史记
			  录等内容。
				void wobj.clear()
  close		  关闭并销毁Webview窗口，可设置关闭动画和关闭时间
				void wobj.close([aniClose,duration,extras])
  draw 		  将Webview窗口的可视区域截屏并绘制到Bitmap图片对象中。
				void wobj.draw(bitmap,successCallback,errorCallback)
  evalJS	  在Webview窗口中指向JS脚本
				void wobj.evalJS(js)
  forward	  Webview窗口历史记录操作，前进到窗口上次加载的HTML页面。
				void wobj.forward();
  getURL 	  获取Webview窗口加载HTML页面的地址
				String wobj.getURL()
  hide 		  隐藏Webview窗口可保存已加载HTML页面的上下文数据，能降低应用使用的
			  系统资源，通过show方法可将隐藏的Webview窗口显示出来。
				void wobj.hide(aniHide,duration,axtras)
  isHardwareAccelerated  查询Webview窗口是否开启硬件加速
				Boolean wobj.isHardwareAccelerated();
  loadURL 	  从新的URL地址加载页面，如果url地址无效，将导致页面显示失败。
				void wobj.loadURL(url)
  nativeInstanceObject  获取Webview窗口对象的原生(Native.JS)实例对象，Android
						平台返回android.webkit.Webview实例对象,ios平台返回Webview
						窗口对象的UIWebview实例对象。
				InstanceObject wobj.nativeInstanceObject();
  opener 	  获取当前Webview窗口的创建者，创建者为调用plus.Webview.open或create
			  方法创建当前窗口的Webview窗口
				WebviewObject wobj.opener()
  parent 	  获取当前Webview窗口的父窗口，Webview窗口作为子窗口添加到其他Webview
			  窗口时有效
				WebviewObject wobj.parent()
  resetBounce 开启窗口回弹效果后，当窗口中展现的内容滚动到头(顶部或底部),再拖曳时
			  窗口整体内容将跟随移动，松开后自动回弹到停靠位置。这时需要调用此方
			  法来重置窗口的回弹位置，窗口将采用动画方式回弹到其初始显示的位置。
				void wobj.resetBounce();
  remove 	  从当前Webview窗口移除指定的子Webview窗口，若指定的Webview对象不是当
			  前窗口的子窗口，则无任何作用。移除后，子Webview窗口不会关闭，需要调
			  用close方法才能真正关闭并销毁。
				void wobj.remove(Webview)
  setBlockNetworkImage  设置Webview窗口是否阻塞加载页面中使用的网络图片。block是
						布尔值，true表示不加载页面中使用的网络图片，false表示加载
						页面中使用的网络图片
				void wobj.setBlockNetworkImage(block)
  setPullToRefresh      设置Webview窗口的下拉刷新效果。开启Webview窗口的下拉刷新
						功能，显示窗口内置的下拉刷新控件样式，语法样式为:
				void wobj.setPullToRefresh(style,refreshCB)
	style是Webview窗口下拉刷新样式参数，是一个JSON配置对象，配置参数如下:
	  support  Boolean,是否开启Webview窗口的下拉刷新功能
	  height   String,下拉刷新控件高度，支持百分比和像素值
	  range    String,窗口的可下拉拖拽范围，支持百分比和像素值
	  contentdown  JSON类型,在下拉可刷新状态时显示的内容，支持caption
	  contentover  JSON类型,在释放可刷新状态时显示的内容，支持caption
	  contentrefresh 在正在刷新状态时显示的内容，支持caption属性
	refreshCB是Webview窗口下拉事件回调，用户操作窗口的下拉刷新触发窗口刷新事件
		时触发
  setStyle	  设置Webview窗口的样式，如窗口位置，大小，背景色等，
				void wobj.setStyle(styles);
			  styles是要设置的窗口样式，这是一个JSON配置对象，配置的参数和plus.
			  Webview.open方法中的一致
  getStyle 	  获取Webview窗口的样式，返回一个JSON对象，和setStyle的参数一致，
				WebviewStyle wobj.getStyle();
  show 		  当调用plus.Webviewcreate方法创建Webview窗口后,需要调用其show方法
			  才能显示，并可设置窗口显示动画及动画时间。Webview窗口被隐藏后，也
			  可以调用此方法来从新显示。
				void wobj.show([aniShow,duration,showedCB,extras])
		
  