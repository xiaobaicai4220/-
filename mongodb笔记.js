/**

*** 使用mongoose操作mongodb数据库  ***
*连接
 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/words');
 断开连接
 mongoose.disconnect();
*定义模式
 可用选项
   autoIndex      	boolean，true表示对集合的自动索引功能开启
   bufferCommands	boolean，true表示由于连接问题而无法执行的命令被缓存
   capped 		 	指定在封顶集合中支持的最大问价树
   collection		指定用于吃Schema模型的集合名称
   id 				boolean,true使模型中的文档有对应于该对象的_id值的id获取器
   _id 				boolean,true将导致mongoose自动为你的文档分配_id字段。
   read 			指定副本的读取首选项
   safe				true将导致mongoose应用一个写入关注到更新数据库的请求
   strict			boolean，true表示没有出现在定义的模式中的对象传入属性不会被
					保存到数据库
 
*query对象
 