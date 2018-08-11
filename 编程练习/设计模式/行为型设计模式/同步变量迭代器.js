/** 同步变量迭代器 **/

//同步变量
var A = {
	//所有用户共有
	common:{},
	//客户端数据
	client:{
		user:{
			username:'雨夜清河',
			uid:'123'
		}
	},
	//服务器端数据
	server:{}
};

//同步变量迭代取值器
AGetter = function(key){
	//如果不存在A则返回未定义
	if(!A)
		return undefined;
	var result = A;	//获取同步变量A对象
	key = key.split('.');		//解析属性层次序列
	//迭代同步变量A对象属性
	for(var i =0,len=key.length;i<len;i++){
		//如果第i层属性存在对应的值则迭代该属性值
		if(result[key[i]] !== undefined){
			result = result[key[i]];
			//如果不存在则返回未定义
		}else{
			return undefined;
		}
	}
	//返回获取的结果
	return result;
}
//获取用户名数据
console.log(AGetter('client.user.username'));	//雨夜清河
console.log(AGetter('server.lang.local'));		//undefined