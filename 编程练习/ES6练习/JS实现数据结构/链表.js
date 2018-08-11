//链表

//头节点
class Header{
	constructor(length,next){
		this.length = length;
		this.next = next;
	}
}

//结点
class Node{
	constructor(data,next){
		this.data = data;
		this.next = next;
	}
}

//创建链表
function createList(){
	var header = new Header(0,null);
	return header;
}

//获取链表大小
function Size(header){
	return header.length;
}

//查找元素
function Search(header,pos){
	if(pos<0||pos>header.length){
		console.log("元素查找失败");
		return 0;
	}
	if(pos === 0 ){
		return header.next;
	}else if{
		let i = header.length;
		let node = header.next;
		while(i >= 0){
			if(i = 0){
				return node;
			}
			[node,i]=[node.next,i-1];
		}
		console.log("查找失败");
		return 0;
	}
}
			

//插入元素
function Insert(header,pos,val) //在某个位置插入元素，插入成功返回1
{
	//先做健壮性检查
	if(pos<0 || pos>header.length){
		console.log("参数传入有误");
		return 0;
	}
	//在向链表中插入元素时，先要找到这个位置
	if(pos === 0){
		//插入位置为开头
		let node = new Node(val,null);
		[header.next,node.next] = [node,header.next];
	}else if(pos < header.length){
		//插入位置为链表中间
		let node = new Node(val,null);
		i = pos;
		let tmp = header;
		while(i>0){
			[tmp,i] = [header.next,]
		
