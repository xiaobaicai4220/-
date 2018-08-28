/**
 *NodeJS设计模式笔记
 *@author xiaobaicai
 *@startTime 2018/7/6
 *@endTime 
 **
 
*** 第一章 欢迎来到Node.js平台   ***
**Node.js的哲学思想
*小核心 小模块 小接触面 简单和实用

**ES6基础
*let const 
*箭头函数
*类语法
*get set
*Map Set
*WeakMap WeakSet
*模板字面量
*默认方法参数
*剩余参数
*扩展运算符
*解构
*new.target
*Proxy
*Reflect
*Symbol

**NodeJS核心 Reactor模式

*** 第二章 Node.js基础设计模式  ***
**回调模式:
*CPS(Continuation Passing Style):连续传递模式
*同步CPS
*异步CPS
*非CPS回调

**同步或异步
*不可预测的函数
*释放Zalgo
*使用同步API
*延迟执行

**Node.js回调约定
*回调函数置尾
*暴露错误优先
*传播错误
*未捕获异常

**模块系统及其模式
*module.exports 与 exports
*require函数是同步的
*解析算法
*模块缓存
*循环依赖

**模块定义模式
*命名导出
 exports.info = ()=>{}
 exports.hello = ()=>{}
*导出函数
 module.exports = ()=>{}
 module.exports.hello = ()=>{}
*导出构造函数
 class Logger{
	 constructor(name){
		 this.name = name;
	 }
	 log(message)=>{console.log(`[${this.name}]${message}`)}
	 hello()=>{console.log("hello")}
 }
 module.exports = Logger
*导出实例
 module.exports = new Logger('xiaobaicai');
*修改其他模块或全局作用域
 //file patcher.js
 //./logger is another module
 require('./logger').customMessage = ()=>console.log("customMessage");
 调用：
 //file main.js
 require('./patcher.js')
 const logger = require('./logger');
 logger.customMessage();

**观察者模式
*EventEmitter类
*创建emitter
 const EventEmitter = require('events').EventEmitter;
 const emitter = new EventEmitter();
*EventEmitter的基本方法:
 1:on(event,listener)
 2:once(event,listener)
 3:emit(event,[arg1],[...])
 4:removeListener(event,listener)
*EventEmitter与回调
 判断使用EventEmitter还是接受回调的一般性原则是:
 当结果必须以异步方式返回时，使用回调；当需要对刚刚发生的事情做传达时，使用事件   1