//插入排序的工作原理就是将未排序数据，对已排序数据序列从后向前扫描，找到对应的位置并插入。插入排序通常采用占位的形式，空间复杂度为O(1),因此，在从后向前扫描的过程中，需要反复的把已排序的元素逐步向后挪位，为新插入元素提供插入的位置。
//2，算法描述
//1）从第一个元素开始，该元素可以被认为已经被排序
//2）取出下一个元素，在已经排好序的序列中从后往前扫描
//3）直到找到小于或者等于该元素的位置
//4）将该位置后面的所有已排序的元素从后往前依次移一位
//5)将该元素插入到该位置
//6)重复步骤2~5
//3，算法分析
//如果目标是升序排序，那么插入排序有最好情况和最坏情况两种。最好情况是，序列已经是升序排列，那么只需要比较n-1次，当序列是降序排列，那么比较次数是n(n-1)/2,赋值操作是比较次数减去（n-1）次。平均来说，插入算法时间复杂度是O(n^2),空间复杂度是O（1）。我们可以看到，当n较大时，时间复杂度太大，因此插入排序的不适合大数据量的排序，一般来说适合小数据量排序，如n<1000，插入排序也作为快排的补充，当n<8时，使用插排，否则使用快排。
//时间复杂度最好为o(n) 最坏为(n^2) 平均为o(n^2)   空间复杂度为o(1) 稳定
var arr = [4,1,32486,13,756,45,4,132,47];
// var arr = [4,1,3]
// function insertSort(arr) {
//     var len =arr.length;
//     for (var i=1;i<len; i++) {
//         var temp=arr[i];
//         var j=i-1;//默认已排序的元素
//         while (j>=0 && arr[j]>temp) {  //在已排序好的队列中从后向前扫描
//                 arr[j+1]=arr[j]; //已排序的元素大于新元素，将该元素移到一下个位置
//                 j--;
//             }
//         arr[j+1]=temp;
//         }
//     return arr
//  }

function insertSort(arr){
   var preIndex,current;
   for(var i=1;i<arr.length;i++){
       var preIndex = i-1;
       var current = arr[i];
       while(preIndex>=0&&current<arr[preIndex]){
             arr[preIndex+1] = arr[preIndex];
             preIndex--;
       }
       arr[preIndex+1] = current;
   }
   return arr;
}
 console.log(insertSort(arr));

