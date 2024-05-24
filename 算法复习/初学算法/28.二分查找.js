//二分查找，也称为折半查找，是指在有序的数组里找出指定的值，返回该值在数组中的索引。查找步骤如下：
//（1）从有序数组的最中间元素开始查找，如果该元素正好是指定查找的值，则查找过程结束。否则进行下一步;
//（2）如果指定要查找的元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作;
//（3）重复以上过程，直到找到目标元素的索引，查找成功;或者直到子数组为空，查找失败。
//优点是比较次数少，查找速度快，平均性能好；其缺点是要求待查表为有序表，且插入删除困难。因此，折半查找方法适用于不经常变动而查找频繁的有序列表。


// 非递归实现的js代码
// function binary_search(arr, key) {
//     var low = 0,
//         high = arr.length - 1;
 
//     while(low <= high) {
//         var mid = parseInt((high + low) /2);
//   		// console.log(mid+'h'+high+'l'+low);
//         if(key == arr[mid]) {
//             return mid;
//         } else if(key > arr[mid]) {
//             low = mid + 1;
//         } else {
//             high = mid -1;
//         }
//     }
// 	return -1
// }`
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
function erfen (arr,key){
    var start = 0;
    var end = arr.length-1;
    while(start<=end){
        var mod = parseInt((start+end)/2);
        if(key == arr[mod]){
            return mod;
        }else if(key<arr[mod]){
           end = mod-1;
        }else{
            start = mod+1;
        }
    }
    return -1;
}
console.log(erfen(arr,44));

// var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
// var result = binary_search(arr, 10);
// console.log(result);   // 9
// var resultNone = binary_search(arr, 100);
// console.log(resultNone);  // -1
