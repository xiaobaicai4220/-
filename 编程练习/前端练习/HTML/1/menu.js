function makeMenu(){
	//获取所有h2元素
	var h2s = document.getElementsByTagName("h2")
	//为菜单创建一个新的页面元素
	var menu = document.createElement("div")
	//创建一个UL元素，并将其添加到菜单div
	var menuUI = document.createElement("ul")
	menu.appendChild(menuUI);
	//遍历H2元素
	for(var i =0;i<h2s.length;i++){
		//获取h2元素的文本节点
		var itemText = h2s[i].childNodes[0].nodeValue;
		//添加一个列表项
		var menuLi = document.createElement("li");
		menuUI.appendChild(menuLi);
		var menuLiA = document.createElement("a");
		menuLiA = menuLi.appendChild(menuLiA);
		//设置链接的href
		menuLiA.setAttribute("href","#item"+i);
		//设置链接的文本
		var menuText = document.createTextNode(itemText);
		menuLiA.appendChild(menuText);
		//创建相应的锚点元素
		var anc = document.createElement("a");
		anc.setAttribute("name","item"+i);
		//将锚点元素添加到标题列
		document.body.insertBefore(anc,h2s[i]);
	}
	//将菜单添加到页面顶部
	document.body.insertBefore(menu,document.body.firstChild);
}