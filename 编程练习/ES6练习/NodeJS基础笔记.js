/***
 *@name: nodejs基础
 *@plain: 记录nodejs基础笔记
 *@author:xiaobaicai
 *@startTime:2018-6-29
 *@endTime:null
 *@updateTime:
 ***
 
***String对象方法
*charAt(index):
*charCodeAt(index):
*concat(str1,str2,...):
*fromCharCode():
*indexOf(substring):
*lastIndexOf(subString):
*match(ragex):
*replace(regex/subString,replacementString):
*search(regex):
*slice(start,end):
*split(sep,limit):
*substr(start,length):
*substring(from,to):
*toLowerCase():
*toUpperCase():
*valueOf():

***Array对象方法
*concat(arr1,arr2):
*indexOf(value): 
*join(separator):
*lastIndexOf(value):
*pop():
*push(item1,item2...)
*reverse():
*shift():
*slice(start,end):
*sort(sortFunction):
*splice(index,count,item1,item2...):
*toString():
*unshift():
*valueOf():

***   npm命令行选项  ***
*search:在存储库中查找模块包
*install:使用在存储库或本地位置上的一个package.json文件来安装包
*install -g:在全局可访问的位置安装一个模块包
*remove:删除一个模块
*pack:把在一个package.json文件中定义的文件封装成.tgz文件
*view:显示模块的详细信息
*publish:把在一个package.json文件中定义的模块发布到注册表
*unpublish:取消发布你已发布的一个模块
*owner:允许你在存储库中添加，删除包和列出包的所有者

***   在package.json文件中使用的指令    ***
*name:包的唯一名字
*preferGlobal:表示该模块更倾向于在全局范围内安装
*version:该模块的版本
*author:
*description:
*contributors:
*bin:
*scripts:
*main:
*repository:
*keywords:
*dependencies:
*engines:

***   console模块成员函数   ***
*log([data],[...]) 
*info([data],[...])
*error([data],[...])
*warn([data],[...])
*dir(obj)
*time(label)
*timeEnd(label)
*trace(label)

***   事件，监听器，定时器，回调 ***
*setTimeout(callback,delayMilliSeconds,[args]):
*setInterval(callback,delayMilliSeconds,[args]):
*setImmediate(callback,[args]);
*(setTimeout(...)).unref();
*process.nextTick(func);


*** 事件IO ***
*JSON.parse(str):
*JSON.stringify(obj):
**缓存数据 Buffer
*编码:utf8  utf16le  ucs2 base64 Hex
*创建缓冲区:new Buffer(sizeInBytes|octetArray|(string,[encoding]))
*写入缓冲区:
*buffer.write(string,[offset],[length],[encoding])
*buffer[offset] = value
*buffer.fill(value,[offset],[end])
*writeInt8(value,offset,[noAssert])|writeInt16LE(...)
*读取缓冲区
*buffer.toString([encoding],[start],[end])
*stringDecoder.write(buffer)
*buffer[offset]
*readInt8(offset,[noAsser])
*Buffer.byteLength(buffer,[encoding])
*copy(targetBuffer,[targetStart],[sourceStart],[sourceIndex])
*slice([start],[end])：inplace操作
*concat(list,[totalLength]):

***  Stream模块  ***
*Read流:
*Read流事件: readable data  end  close  error
*Read流方法：
 read([size])  setEncoding(encoding) pause()  resume()  pipe(destination,[options]) unpipe([destination])

*Writable流
*流事件: drain finish pipe unpipe 
*流方法: write(chunk,[encoding],[callback])  end([chunk],[encoding],[callback])

***   fs模块    ***
*var fs = require('fs');
*fs.open(path,flags,[mode],callback);
 fs.openSync(path,flags,[mode],);
*fs.close(fd,callback);
 fs.closeSync(fd);
*fs.writeFile(path,data,[options],callback)
 fs.writeFileSync(path,data,[options])
*fs.writeSync(fd,data,offset,length,position)
 fs.write(fd,data,offset,length,position,calback)
