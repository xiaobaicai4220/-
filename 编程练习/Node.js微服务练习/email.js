module.exports = function(options){
	//发送邮件
	this.add({channel:'email',action:'send'},function(msg,res){
		console.log("发送邮件");
		res(null,{})
	});
	
	//获取邮件列表
	this.add({channel:'email',action:'pending'},function(msg,res){
		console.log("获取邮件列表");
		res(null,{})
	});
}