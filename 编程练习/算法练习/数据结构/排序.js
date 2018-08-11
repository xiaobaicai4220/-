//快速排序
function QuickSort(arr,left,right){
	if(left >= right){
		return
	}
	var i = left;
	var j = right;
	var key = arr[i];
	while(i<j){
		while((i<j)&&(key<=arr[j])){
			j--;
		}
		arr[i] = arr[j];
		while((i<j)&&(key>=arr[i])){
			i++;
		}
		arr[j] = arr[i];
	}
	arr[i] = key;
	QuickSort(arr,left,i-1);
	QuickSort(arr,i+1,right);
}
//测试
arr = [5,7,8,6,3,1,4,2,77,9,4];
QuickSort(arr,0,10);
console.log(arr)

//直接插入排序
function InsertA(arr,n){
	//arr 已经排好序的数组，n，待插入的值
	o