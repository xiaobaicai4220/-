/***
 *备忘录模式
 ***/

 /***
//下一页按钮点击事件
$('#next_page').click(function(){
	//获取新闻内容元素
	var $news = $("#news_content"),
	//获取新闻内容元素当前页数据
	var page = $news.data('page');
	//获取并显示新闻
	getPageData(page,function(){
		//修正新闻内容元素当前页数据
		$news.data('page',page+1)；
	})
});
//上一页按钮点击事件
$('#pre_page').click(function(){
	//显示上一页
})

//请求某一页新闻page:当前页  fn:成功回调函数
function getPageData(page,fn){
	//post 请求数据
	$.post('./data/getNewsData.php',{
		//数据，页码
		page:page
		},function(res){
			//正常返回数据
			if(res.errNo == 0){
				//显示当前页
				showPage(page,res.data);
				//执行回调函数
				fn && fn();
			}
		})
}
//显示某夜逻辑
function showPage(page,data){
	//...
}

	***/

/** 缓存数据 **/
//page备忘录类
var Page = function(){
	//信息缓存对象
	var cache = {};
	/***
	 *主函数
	 *参数page页码
	 *参数fn 成功回调函数
	 ***/
	return function(page,fn){
		//判断该页是否在缓存中
		if(cache[page]){
			//恢复到该页状态，显示该页内容
			showPage(page,cache[page]);
			//执行成功回调函数
			fn && fn();
		}else{
			//若缓存Cache中无该页数据
			$.post('./data/getNewsData.php',{
				//请求携带数据页码
				page:page
			},function(res){
				//成功返回
				if(res.errNo == 0){
					//显示该页数据
					showPage(page,res.data);
					//将该页数据种入缓存中
					cache[page] = res.data;
					//执行成功回调函数
					fn && fn();
				}else{
					//处理异常
				}
			})
		}
	}
}()

//下一页按钮点击事件
$('#next_page').click(function(){
	//获取新闻内容元素
	var $news = $("#news_content");
	//获取新闻内容元素当前页数据
	var page = $news.data('page');
	//获取并显示新闻
	Page(page,function(){
		//修正新闻内容元素当前页数据
		$news.data('page',page+1);
	})
});