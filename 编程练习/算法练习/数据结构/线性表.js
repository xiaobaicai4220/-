//头结点类
class Header{
	constructor(length,node=null){
		this.length = length;
		this.next = node;
	}
}
//节点类
class Node{
	constructor(data,next=null){
		this.data = data;
		this.next = next;
	}
}
//创建链表
function CreateList(){
	var List = new Header(0);
	return List;
}
//获得链表大小
function Size(List){
	if(List == null){
		console.log("传入链表有误");
	}
	return List.length;
}
//插入元素
function Insert(List,pos,data){
	if(List==null||pos<0 || pos>Size(List)){
		console.log("参数传入有误");
	}
	//找到要插入的位置
	let node = new Node(data);
	if(pos == 0){
		[List.next,node.next] = [node,List.next];
	}else{
		let node_tmp = List.next;
		for(let i=1;i<pos;i++){
			node_tmp = node_tmp.next;
		}
		[node_tmp.next,node.next] = [node,node_tmp.next];
	}
	List.length++;
}
//查找某个元素
function Find(List,data){
	if(List == null || data == null){
		console.log("参数传入有误");
		return null;
	}
	let node_tmp = List.next;
	while(node_tmp != null){
		if(node_tmp.data === data){
			return node_tmp;
		}
		node_tmp = node_tmp.next;
	}
	console.log("链表中没有你要找的数据");
	return null;
}
//删除元素
function Delete(List,data){
	if(List==null || data == null){
		console.log("输入的参数有错误");
		return null;
	}
	let node_tmp = List;
	while(node_tmp.next != null){
		if (node_tmp.next.data == data){
			console.log("删除元素");
			node_tmp.next = node_tmp.next.next;
			//释放内存 
			List.length--;
			return null;
		}
		node_tmp = node_tmp.next;
	}
	console.log("在链表中找不到你要删除的元素");
}

var List = CreateList();
var a = List.next;
Insert(List,0,1);
Insert(List,1,3);
var a = Find(List,1);
console.log(a);
var b = Find(List,2);
console.log(b);
Delete(List,1);
console.log(List);
			

	