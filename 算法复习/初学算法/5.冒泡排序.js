//每两位进行比较，直到最后找到最大的那个在最后一个

var arr = [48,145,89,2,42,41,91,6,784];

//比较两个数的大小
function compare(a,b){
    if(a>b){
        return true;
    }else{
        return false;
    }
}

//交换数组的两个值
function exchange(arr,a,b){
    var temp = arr[a]
    arr[a] = arr[b];
    arr[b] = temp;
}

//循环数组遍历
function sort(arr){
    for(var i=0;i<=arr.length-1;i++){
      for(var j=0;j<=arr.length-1-i;j++){
        if(compare(arr[j],arr[j+1])){
            exchange(arr,j,j+1);
        }
    }
   }   
}
sort(arr);

console.log(arr);