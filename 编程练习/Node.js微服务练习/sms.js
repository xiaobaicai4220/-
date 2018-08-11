module.exports = function(options){
	//发送短信
	this.add({channel:'sms',action:'send'},function(msg,res){
		console.log("发送短信");
		res(null,{})
	});
	//获取未读短信
	this.add({channel:'sms',action:'pending'},function(msg,res){
		console.log("获取未读短信");
		res(null,{})
	});
}