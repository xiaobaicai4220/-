var quiteSort = function (arr) {
        var newarr = []; //定义一个新数组
        var arrLeft = []; //存放在左边的数组
        var arrRight = []; //存放在右边的数组
        var arrMid = arr[0];
        if (arr.length <= 1) { //传入的数组长度小于1时，直接返回
            return arr;
        }
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < arrMid) { //比基准的小的数放在左边
                arrLeft.push(arr[i]);
            }
            if (arr[i] > arrMid) { //比基准的大的数放在右边
                arrRight.push(arr[i]);
            }
        }
        newarr = quiteSort(arrLeft).concat(arrMid, quiteSort(arrRight)); //采用递归的思想，不断对左右的数字进行排序
        return newarr;
    }
 
function uniq(array){
    var temp = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i]);
        }
    }
    return temp;
}

var aa = [1,2,2,4,9,6,7,5,2,3,5,6,5];
console.log(uniq(aa));
