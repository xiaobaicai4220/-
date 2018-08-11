/** MVC模式

//为简化页面操作逻辑，这里引用链模式中实现的A框架
//页面加载后创建MVC对象
$(function(){
	//初始化MVC对象
	var MVC = MVC || {};
	//初始化MVC数据模型层
	MVC.model = function(){
		//内部数据对象
		var M = {};
		//服务器端获取的数据，通常通过Ajax获取并存储，后面的案例为简化实现，直接作为同步数据
		//写在页面中，减少服务器端异步请求操作
		M.data = {};
		//配置数据，页面加载时即提供
		M.conf = {};
		//返回数据层对象操作方法
		return{
			//获取服务器端数据
			getData:function(m){
				//根据数据字段获取数据
				return M.data[m];
			},
			//获取配置数据
			getConf:function(c){
				//根据配置数据字段获取配置数据
				return M.conf[c]
			},
			//设置服务器端数据(通常将服务器端异步获取到的数据，更新该数据)
			setData:function(m,v){
				//设置数据字段m对应的数据v
				M.data[m] = v;
				return this;
			}
			//设置配置数据(通常在页面中执行某些操作，为做记录而更新配置数据)
			setConf:function(c,v){
				//设置配置数据字段c对应的配置数据v
				M.conf[c] = v;
				return this;
			}
		}
	}();
	//初始化MVC视图层
	MVC.view = function(){
		//模型数据层对象操作方法引用
		var M = MVC.model;
		//内部视图创建方法对象
		var V = {};
		//获取视图接口方法
		return function(v){
			//根据视图名称返回视图(由于获取的是一个方法，这里需要将该方法执行一遍以获取响应视图)
			V[v]();
		}
	}();
	//初始化MVC控制器层
	MVC.ctrl = function(){
		//模型数据层对象方法引用
		var M = MVC.model;
		//视图数据层对象操作方法引用
		var V = MVC.view;
		//控制器创建方法对象
		var C = {};
	}();
});

  **/
  
//为简化页面操作逻辑，这里引用链模式中实现的A框架
//页面加载后创建MVC对象
$(function(){
	//初始化MVC对象
	var MVC = MVC || {};
	//初始化MVC数据模型层
	MVC.model = function(){
		//内部数据对象
		var M = {};
		//服务器端获取的数据，通常通过Ajax获取并存储，后面的案例为简化实现，直接作为同步数据
		//写在页面中，减少服务器端异步请求操作
		M.data = {
			//左侧侧边栏导航服务器端请求得打的响应数据
			slideBar:[
				{
					text:'萌妹子',
					icon:'left_meng.png',
					title:'喵耳萝莉的千本樱',
					content:'自古幼女有三好~',
				}]	
		};
		//配置数据，页面加载时即提供
		M.conf = {
			//侧边栏导航动画配置
			slideBarCloseAnimate:false;
		};
		//返回数据层对象操作方法
		return{
			//获取服务器端数据
			getData:function(m){
				//根据数据字段获取数据
				return M.data[m];
			},
			//获取配置数据
			getConf:function(c){
				//根据配置数据字段获取配置数据
				return M.conf[c]
			},
			//设置服务器端数据(通常将服务器端异步获取到的数据，更新该数据)
			setData:function(m,v){
				//设置数据字段m对应的数据v
				M.data[m] = v;
				return this;
			}
			//设置配置数据(通常在页面中执行某些操作，为做记录而更新配置数据)
			setConf:function(c,v){
				//设置配置数据字段c对应的配置数据v
				M.conf[c] = v;
				return this;
			}
		}
	}();
	//初始化MVC视图层
	MVC.view = function(){
		//模型数据层对象操作方法引用
		var M = MVC.model;
		//内部视图创建方法对象
		var V = {
			//创建侧边导航模块视图
			createSlideBar:function(){
				//导航图标内容
				var html='',
					//视图渲染数据
					data = M.getData('slideBar');
				//屏蔽无效数据
				if(!data || !data.length){
					return;
				}
				//创建视图容器
		};
		//获取视图接口方法
		return function(v){
			//根据视图名称返回视图(由于获取的是一个方法，这里需要将该方法执行一遍以获取响应视图)
			V[v]();
		}
	}();
	//初始化MVC控制器层
	MVC.ctrl = function(){
		//模型数据层对象方法引用
		var M = MVC.model;
		//视图数据层对象操作方法引用
		var V = MVC.view;
		//控制器创建方法对象
		var C = {};
	}();
});