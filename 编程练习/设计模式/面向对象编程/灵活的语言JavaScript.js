
/** 用对象收编变量 **/
//调用方式:CheckObject.checkName()
var CheckObject = {
	checkName:function(){
		//验证姓名
	},
	checkEmail:function(){
		//验证邮箱
	},
	checkPassword:function(){
		//验证密码
	}
}

/** **/
var CheckObject = function(){
	return{
		checkName:function(){
			//验证姓名
		},
		checkEmail:function(){
			//验证邮箱
		},
		checkPassword:function(){
			//验证密码
		}
	}
}

/** 使用类封装 **/
var CheckObject = function(){
	this.checkName:function(){
		//验证姓名
	},
	this.checkEmail:function(){
		//验证邮箱
	},
	this.checkPassword:function(){
		//验证密码
	}
}

/** 使用prototype绑定类方法 **/
var CheckObject = function(){};
CheckObject.prototype = {
	checkName:function(){
		//验证姓名
	},
	checkEmail:function(){
		//验证邮箱
	},
	checkPassword:function(){
		//验证密码
	}
}

/**  实现可链式调用  **/
var CheckObject = function(){};
CheckObject.prototype = {
	checkName:function(){
		//验证姓名
		return this;
	},
	checkEmail:function(){
		//验证邮箱
		return this;
	},
	checkPassword:function(){
		//验证密码
		return this;
	}
}
