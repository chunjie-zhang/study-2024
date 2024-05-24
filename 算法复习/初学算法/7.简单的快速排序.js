//找数组的第一个，如果比他大在他左边，比他小在他右边，然后依次往复，左边的最小，然后右边打的

var arr = [21,4,43,28,231,56,6543,54,746,414,56,445];

function quickSort(arr){
    if(arr==null||arr.length==0)return [];
    var leader = arr[0];
    var left = [];
    var right = [];
    for(var i=1;i<arr.length;i++){
       if(arr[i]<leader){
          left.push(arr[i]);
       }else{
           right.push(arr[i]);
       }
    }
    left =  quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return left.concat(right);
}
console.log(quickSort(arr));