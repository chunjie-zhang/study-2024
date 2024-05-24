//内层循环一圈，找到最大的放到后面，然后arr长度减去最后一个再循环内圈找

var arr = [48,145,89,2,42,41,91,6,784];

//比较两个数的大小
function compare(a,b){
    if(a<b){
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
  console.log(arr, a, b);
}

//循环数组遍历
function sort(arr){
    for(var i=0;i<=arr.length-1;i++) {
      var index = 0; 
      for(var j=0;j<=arr.length-1-i;j++) {
        if (compare(arr[index],arr[j])) {
           index = j
        }
    }
    exchange(arr,index,arr.length-1-i)
   }   
}
sort(arr);

console.log(arr);