/** 建造者模式 **/

//创建一位人类
var Human = function(param){
	//技能
	this.skill = param && param.skill||'保密';
	//兴趣爱好
	this.hobby = param && param.hobby||'保密';
}
//类人原型方法
Human.prototype = {
	getSkill:function(){
		return this.skill;
	},
	getHobby:function(){
		return this.hobby;
	}
}
//实例化姓名类
var Named = function(name){
	var that = this;
	//构造器
	//构造函数解析姓名的姓与名
	(function(name,that){
		that.wholeName = name;
		if(name.indexOf(' ')>-1){
			that.firstName = name.slice(0,name.indexOf(' '));
			that.secondName = name.slice(name.indexOf(' '));
		}
	})(nmae,that);
}
//实例化职位类
var Work = function(work){
	var that = this;
	//构造器
	//构造函数中通过传入的职位特征来设置相应职位以及描述
	(function(name,that){
		switch(namr){
			case 'teacher':
				that.work = '老师';
				that.workDescript = '每天愉快的和小朋友们玩耍';
				break;
			case 'code':
				that.work = '程序员';
				that.workDescript = '每天都会掉头发';
				break;
			default:
				that.work = '啥都不是';
				that.workDescript = '真悲伤，你没有职位';
		}
	})(work,that);
}
//更换期望的职位
Work.prototype = {
	changeWork:function(work){
		this.work = work;
	},
	changeDescript:function(descript){
		this.workDescript = descript;
	}
}

//应聘者建造者
var Person = function(name,work){
	var _persion = new Human();
	_person.name = new Named(name);
	_person.work = new Work(work);
}

//实例化
var person = new Person('xiaoming','code');
