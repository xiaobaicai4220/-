function Logger(name){
	this.name = name;
}
Logger.prototype.log = function(message){
	console.log(`[${this.name}]${message}`);
}
Logger.prototype.hello = function(){
	console.log("hello");
}
module.exports = Logger;
