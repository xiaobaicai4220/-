/***
 *@name mui框架学习笔记
 *@plain  mui框架是一筐HTML5 APP端开发框架
 *@author xiaobaicai
 *@startTime  2018/7/10
 *@lastTime   2018/7/10
 ***

*页面整体布局
  固定栏靠前 mui-bar
    顶部导航栏   <header class="mui-bar mui-bar-nav"></header>
	底部工具条   <nav class="mui-bar mui-bar-footer"></nav>
	底部选项卡   <nav class="mui-bar mui-bar-tab"></nav>
  主体  <div class="mui-content"></div>
  
  内联  <div class="mui-inline">苹果</div>
  块级  <span class="mui-block">block</span>
  
  浮动  <div class="mui-pull-left">左浮动</div>
		<div class="mui-pull-right">右浮动</div>
		<div class="mui-clearfix">清除浮动</div>
  列表元素  mui-list-unstyled 清除默认  mui-ist-inline 将li设置为内联块元素
		<ul class="mui-list-unstyled mui-list-inline">
			<li>item1</li> <li>item2</li> <li>item3</li>
		</ul>
  元素的显示与隐藏
        mui-visibility  显示
		mui-hidden		隐藏
  OS环境多平台适配
		mui-plus-visible   	在H5+环境下显示，其他环境下隐藏
		mui-wechat-visible	在微信环境下显示，其他环境下隐藏
		mui-plus-hidden 	在H5+环境下隐藏，其他环境下显示
		mui-wechat-hidden 	在微信环境下隐藏，其他环境下显示

*mui内置方法对象
  mui()  	选择元素
			mui("p") mui("p.title")
  each()	mui(selector).each() 遍历DOM结构,
  init()	MUI框架将很多功能配置都集中在mui.init()方法中，要使用某项功能，只需要
			在mui.init()方法中完成对应参数配置即可，目前支持在mui.init方法中配置
			的功能包括创建子页面，关闭页面，手势事件配置，预加载，下拉刷新，上拉
			加载，设置系统状态栏背景颜色。
  scrollTo()滚动窗口屏幕到指定位置，该方法是对window.scrollTo()方法在手机端的增强
			实现,可设定滚动动画时间及滚动结束后的回调函数，鉴于手机屏幕大小，该方
			法仅可实现屏幕纵向滚动，语法结构如下:
			  mui.scrollTo(ypos[,duration][,handler])
  mui.os    在浏览器中,经常需要通过navigator.userAgent判断当前运行环境，MUI框架对
			此进行了类似的封装，它的属性如下表所示。
	mui.os.plus 	Boolean,返回是否在基座中运行
	mui.os.stream	Boolean,返回是否为流应用
	mui.os.android  Boolean,返回是否为Android
	mui.os.ios		Boolean,返回是否为ios
	mui.os.ipad		Boolean,返回是否为ipad
	mui.os.iphone	Boolean,返回是否为iphone
	mui.os.wechat   Boolean,返回是否在微信中运行
	mui.os.version	Boolean,当前运行环境的版本号
	
*事件管理
  tap代替click
		element.addEventListener('tap',function(){
			//单击响应逻辑
		},false);
  事件绑定 
		mui(selector).on(event,selector2,handler)
  事件取消
		mui(selector).off() 删除mui上的所有事件
		mui(selector1).off(event,selector2)  删除selector1选择器对应的HTML对象中
											的selector2子对象上的事件回调
		mui(selector1).off(event,selector2,handler)
  事件触发
		mui.trigger(element,event,data)

*手势事件
  tap 			单击屏幕
  doubletap		双击屏幕
  longtap		长按屏幕
  hold			按住屏幕
  release 		离开屏幕
  swipeleft 	向左滑动
  swiperight	向右滑动
  swipeup		向上滑动
  swipedown		向下滑动
  dragstart		拖动开始
  drag 			拖动中
  dragend		拖动结束
	具体需要监听的手势事件时，需要在初始化的时候进行配置:
		mui.init({
			gestureConfig:{
				tag:true,
				doubletap:false,
				longtap:true,
				swipe:true,
				drag:true,
				hold:false,
				release:false
			}
		});

*自定义事件
  使用:
	window.addEventListener(customEventName,function(event){
		//通过1event.detail可获得传递过来的参数
	});
  触发:
	mui.fire(target,event,data);
	
*窗口管理
  mui.plusReady(function(){
	  console.log("当前页面URL:"+plus.webview.currentWebview().getURL())
  });
*打开新窗口
  mui.openWindow({
	  url:new-page-url,
	  id:new-page-id,
	  styles:{//和HTML5+中Webview的open方法中的配置一致},
	  extras:{
		  ...//自定义扩展参数，可以用来处理页面间传值
	  },
	  createNew:false,//是否创建同样id的webview，默认为false
	  show:{
		  autoShow:true,//页面loaded事件发生后自动显示，默认为true
		  aniShow:animationType, //页面显示动画，默认为"slide-in-right";
		  duration:animationTime //页面动画持续时间，Android默认100ms,IOS200ms;
	  },
	  waiting:{
		  autoShow:true, //自动显示等待框，默认为true
		  title:'正在加载...', //等待对话框上显示的提升内容
		  options:{
			  width:waiting-dialog-width, //等待框背景区域亮度，默认根据内容自动
											计算合适宽度
			  height:waiting-dialog-hieght, //等待框背景区域高度
			  ...
			}
	  }
  })
  mui打开新窗口时等待框的处理逻辑为:显示等待框>创建目标页面Webview>目标页面loaded
  事件发生>关闭等待框。

*关闭窗口
  MUI框架将窗口关闭功能封装在mui.back方法中，具体执行逻辑是:若当前Webview为预加载
  页面，则hide当前Webview,否则，close当前Webview
  1:点击class属性包含"mui-action-bakc"类的控件
    <button type="button" class="mui-btn mui-btn-danger mui-action-back">关闭</b>
  2:在屏幕内，向右滑动
    默认未启动，需要手动开启
	mui.init({
		swipeBack:true //启动右滑关闭功能
	});
  3:Android手机按下back按键
    mui.init({
		keyEventBind:{
			backbutton:false  //关闭back按键监听
		}
	});
  4:直接调用 mui.back方法
    var old_back = mui.back;
	mui.back = function(){
		var btn = ["确定","取消"];
		mui.confirm('确认关闭当前窗口?','Hello MUI',btn,function(e){
			if(e.index == 0){
				//执行mui封装好的窗口关闭逻辑;
				old_back();
			}
		});
	}

*预加载
  所谓的预加载技术就是在用户尚未触发窗口跳转时,提前创建目标窗口，这样当用户跳转时
  就可以立即进行页面切换，节省创建新页面的时间，提示App使用体验。MUI框架提供了两
  种方式实现页面预加载。
  1:mui.init() preloadPages参数进行配置
    mui.init({
		preloadPages:[
		{
			url:preload-page-url,
			id:preload-page-id,
			styles:{},
			extras:{},
			subpages:[{},{}]
		}
		],
		preloadLimit:5
	});
	该种方法使用简单，可预加载多个页面，但不会返回预加载每个页面的引用，若要获得
	对应Webview引用,还需要通过plus.webview.getWebviewById方式获得；另外，因为mui
	.init()方法是异步执行，在没有预加载完成前，去获得对应Webview引用,可能失败
  2:mui.preload()方法预加载，
    var page = mui.preload({
		url:new-page-url,
		id:new-page-id,
		styles:{},
		extras:{}
	});
	
*子页面
  mui.init({
	  subpages:[{
		  url:your-subpage-url,
		  id:your-subpage-id,
		  styles:{
			  top:subpage-top-position,
			  button:subpage-button-position,
			  width:subpage-width,
			  height:subpage-height,
			  ...
		  },
		  extras:{}
	  }]
  });
  实例:
	mui.init({
		subpages:[{
			url:'list.html',
			id:'list.html',
			styles:{
				top:'45px',
				bottom:'0px'
			}
		}]
	});

*窗口之间数据的传递

***   各种UI组件	***
*按钮
  普通按钮:
    <button type="button" class="mui-btn">默认</button>
	<button type="button" class="mui-btn mui-btn-primary">蓝色</button>
	<button type="button" class="mui-btn mui-btn-success">绿色</button>
	<button type="button" class="mui-btn mui-btn-warning">黄色</button>
	无底色，有边框的按钮
	  <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">蓝色
  带图标的按钮
    <button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-home
		mui-right">首页</button>
  带数字的按钮
    <button type="button" class="mui-btn mui-btn-royal">点击查阅
		<span class="mui-badge mui-badge-royal">6</span>
	</button>
  块级按钮
    <button type="button" class="mui-btn mui-btn-royal mui-btn-clock">
		块级按钮
	</button>
	<button type="button" class="mui-btn mui-btn-block mui-btn-outlined">
		块级按钮
	</button>
  加载中按钮
    mui(btnElem).button('loading') //切换为loading状态
	mui(btnElem).button('reset')	//切换为reset状态
	  加载中的按钮定制属性
	    data-loading-text       loading状态显示的文字，默认为:loading
		data-loading-icon  		loading状态显示的icon,默认为mui-spinner或mui
								-spinner mui-spinner-white,
		data-loading-icon-position  icon显示位置，支持left/right 默认left
  数字角标
    <span class="mui-badge">1</span>
	<span class="mui-badge mui-badge-prmary">2</span>
  数字输入框
    <div class="mui-numbox">
	  <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
	  <input class="mui-numbox-input" type="number"/>
	  <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
	</div>
	  data-numbox-min   输入框允许使用的最小值，
	  data-numbox-max 	输入框允许使用的最大值
	  data-numbox-step	每次单击"+","-"按钮变化的步长
 
*列表
  普通列表
    <ul class="mui-table-view">
		<li class="mui-table-view-cell">item1</li>
		<li class="mui-table-view-cell">item2</li>
		<li class="mui-table-view-cell">item3</li>
	</ul>
    在普通列表中增加导航箭头
		<li class="mui-table-view-cell">
			<a class="mui-navigate-right">item1</a>
		</li>
  列表式单选
    <ul class="mui-table-view mui-table-view-radio">
		<li class="mui-table-view-cell">
			<a class="mui-navigate-right">item1</a>
		</li>
		<li class="mui-table-view-cell">
			<a class="mui-navigate-right">item2</a>
		</li>
		<li class="mui-table-view-cell">
			<a class="mui-navigate-right">item3</a>
		</li>
	</ul>  
  滑动触发列表项
    <li class="mui-table-view-cell">
		<div class="mui-slider-right mui-disabled">
			<a class="mui-btn mui-btn-red">删除</a>
		</div>
		<div class="mui-slider-handle">
			要删除的列表项
		</div>
	</li>
  图文列表
    <ul class=mui-table-view">
		<li class="mui-table-view-cell mui-media">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" 
					src="../images/shuijiao.jpg">
				<div class="mui-media-body">
					幸福
					<p class="mui-ellipsis">
						能和心爱的人一起睡觉，是件幸福的事情，可是打呼噜怎么办?
					</p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a href="javascript:;">
				<>

*折叠面板
    <ul class="mui-table-view">
		<li class="mui-table-view-cell mui-collapse">
			<a class="mui-navigate-right" href="#">面板1</a>
			<div class="mui-collapse-content">
				<p>面板1子内容</p>
			</div>
		</li>
	</ul>
	
*卡片视图
    使用mui-card生成一个卡片视图
	<div class="mui-card">
		<div class="mui-card-header">页眉</div>
		<div class="mui-card-content">内容区</div>
		<div class="mui-card-footer">页脚</div>
	</div>
	在页眉放置图片
	<div class="mui-card-header mui-card-media"
		style="height:40vw;background-image:url(../images/cbd.jpg)">
	</div>
	在页眉中放置更多信息
	<div class="mui-card-header mui-card-media">
		<img src="../images/logo.png" />
		<div class="mui-media-body">
			小M
			<p>发表于2018/7/11</p>
		</div>
	</div>
	
*轮播组件
	<div class="mui-slider">
		<div class="mui-slider-group">
			<div class="mui-slider-item">
			</div>
			<div class="mui-slider-item">
			</div>
		</div>
	</div>
	当拖动切换内容时，会触发slide事件，通过该事件的事件对象参数对象的detail.slid
	eNumber属性可以获得当前显示项的索引(从0开始的),利用该事件，可在显示内容切换
	时，动态处理一些业务逻辑，实例代码如下:
	  document.querySelector('.mui-slider').addEventListener('slide',function(e){
		  if(e.detail.slideNumber ==1){
			  //切换到第二个选项卡
			  //根据具体业务，动态获得第二个选项卡内容;
		  }else if(e.detail.slideNumber == 2){
			  //切换到第三个选项卡
			  //根据具体业务，动态获得第三个选项卡内容;
		  }
	  });
	  
*单选框和复选框
  <div class="mui-input-row mui-checkbox">
	<label>苹果</label>
		<input name="checkbox1" value="Apple" type="checkbox" checked>
  </div>
  
  </div class="mui-input-row mui-radio">
	<label>苹果</label>
		<input name="gender" value="boy" type="radio" checked>
  </div>
  
  JavaScript获取开关状态
   document.getElementById("my-switch").addEventListener("toggle",function(e){
	   if(e.detail.isActive){
		   console.log("开关启用");
	   }else{
		   conosle.log("开关关闭");
	   }
   })
  
*滑动组件
  <div class="mui-input-row mui-input-range">
	<label>滑块</label>
	<input type="range" min="0" max="100" id="rangeNumber">
  </div>
  JavaScript
  document.getElementById("rangeNumber").addEventListener("input",function(){
	  console.log(this.value);
  });
  
*字体图标
  <span class="mui-icon mui-icon-weixin"></span>
  可以在 http://dev.DCloud.net.cn/mui/ui/#icon页面上查看更多
  
*表单组件
  表单结构
    <from class="mui-input-group">
		<div class="mui-input-row">
			<label>用户名</label>
			<input type="text" class="mui-input-clear" placeholder="请输入用户名">
		</div>
		<div class="mui-input-row">
			<label>密码</label>
			<input type="password" class="mui-input-password" placeholder="请输入密码">
		</div>
		<div class="mui-button-row">
			<button type="button" class="mui-btn mui-btn-primary">
				确认
			</button>
			<button type="button" class="mui-btn mui-btn-danger">
				取消
			</button>
		</div>
	</from>
  增强的input输入
    mui-input-clear
  search输入框
    <div class="mui-input-row mui-search">
		<input type="search" class="mui-input-clear" placeholder="">
	</div>
  注意:mui.init()会自动初始化基本各表单输入组件，但是动态添加的元素需要重新进行
		初始化，例如:
		mui('.mui-input-row input').input();
		
*进度条组件
  
  
*弹出菜单组件
	<div id="popover" class="mui-popover">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell"><a href="#">Item1</a></li>
			<li class="mui-table-view-cell"><a href="#">Item2</a></li>
			<li class="mui-table-view-cell"><a href="#">Item3</a></li>
		</ul>
	</div>
	<a href="#popover" id="openPopover" class="mui-btn mui-btn-primary mui-btn-block">
		打开弹出菜单
	</a>
	
*遮罩层组件
  创建，显示，关闭
    var mask = mui.createMask(callback);
	mask.show();
	mask.close();
  默认遮罩css定义
    .mui-backdrop{
		position:fised;
		top:0;
		right:0;
		bottom:0;
		left:0;
		z-index:998;
		background-color:rgba(0,0,0,.3);
	}
	
*操作表组件
  <div id="sheet1" class="mui-popover mui-popover-bottom mui-popover-action">
  </div>
  
*对话框组件
  提示对话框
    mui.alert(message,title,btnValue,callback[,type])
  确认对话框
    mui.confirm(message,title,btnValue,callback[,type])
	eg:
	  var btnArray = ['是','否']；
	  mui.confirm('MUI是个好框架，确认?','Hello MUI',btnArray,
		function(e){
			if(e.index == 0){
				info.innerText = '你刚确认MUI是个好框架';
			}else{
				info.innerText = 'MUI没有得到你的认可，继续加油';
			}
		});
  输入对话框
    mui.prompt(message,placeholder,title,btnValue,callback[,type])
  自动消失对话框
    mui.toast(message[,options]);
	option: duration  持续显示时间
	        type  'div'，强制使用mui消息框(div模式)
	
*scroll区域滚动
  MUI区域滚动组件,HTML代码结构
    <div class="mui-scroll-wrApper">
		<div class="mui-scroll">
			<!--这里放置真实显示的DOM内容  -->
		</div>
	</div>
  区域滚动组件默认为absolute定位，全屏显示；在实际使用过程中，需要手动设置滚动区
  域的位置(top和height)。若要使用区域滚动组件，需手动初始化区域滚动组件，它的配置
  参数是一个JSON对象，属性如下:
    var options = {
		scrollY:true,	//是否竖向滚动
		scrollX:true,	//是否横向滚动
		startX:0,		//初始化时滚动至x
		startY:0,		//初始化时滚动至y
		indicators:true,	//是否显示滚动条
		deceleration:0.0006,	//阻尼系数，系数越小滑动越灵敏
		bounce:true,		//是否启用回弹
	}
	初始化代码
	mui('.mui-scroll-wrApper').scroll(options);
  