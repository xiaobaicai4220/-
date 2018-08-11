//二叉链表示法
class BitNode{
	constructor(data,left=null,right=null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

//三叉链表示法
class BitNodeA{
	constructor(data,parent=null,left=null,right=null){
		this.data = data;
		this.parent = parent;
		this.left = left;
		this.right = right;
	}
}

//二叉树的遍历

//先序遍历
function preOrder(BitNode){
	if(BitNode == null){
		return null;
	}
	console.log(BitNode.data);
	preOrder(BitNode.left);
	preOrder(BitNode.right);
	return null;
}

//中序遍历
function inOrder(BitNode){
	if(BitNode == null){
		return null;
	}
	inOrder(BitNode.left);
	console.log(BitNode.data);
	inOrder(BitNode.right);
	return null;
};

//后序遍历
function lastOrder(BitNode){
	if(BitNode == null){
		return null;
	}
	lastOrder(BitNode.left);
	lastOrder(BitNode.right);
	console.log(BitNode.data);
	return null;
};

//求叶子节点
function getLeafNum(BitNode){
	var sum = 0;
	function getLeafNumA(BitNode){
		if(BitNode === null){
			return null;
		}
		if(BitNode.left===null && BitNode.right === null){
			sum++;
		}
		getLeafNumA(BitNode.left);
		getLeafNumA(BitNode.right);
	}
	getLeafNumA(BitNode);
	return sum;
}

//求树的高度
function Depth(BitNode){
	var depth = 0;
	
//初始化一个二叉树
var a = new BitNode(1);
var b = new BitNode(2);
var c = new BitNode(3);
var d = new BitNode(4);
a.left = b;
a.right = c;
b.left = d;
preOrder(a);
inOrder(a);
lastOrder(a);
console.log(getLeafNum(a));