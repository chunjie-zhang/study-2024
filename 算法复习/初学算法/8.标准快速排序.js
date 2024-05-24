var arr = [5,16,1,53,46,54,40];
/**
 * 快速排序
 * @param {*} arr 传入的数组[5,16,1,53,46,54,82]
 * @param {*} start 开始下标
 * @param {*} end 结束下标
 */
function quickSort1(arr) {
    function quickSort(arr, start, end) {
        if (start >= end || start > arr.length - 1) {
            return "数组错误";
        }
        var low = start;
        var high = end;
        var base = arr[end]; //40
        while (low < high) {
            while (low < high && arr[low] <= base) {
                low++;
            }
            arr[high] = arr[low];
            while (low < high && arr[high] >= base) {
                high--;
            }
            arr[low] = arr[high];
        }
        arr[low] = base;
        quickSort(arr, start, low - 1); //基准左边快排
        quickSort(arr, low + 1, end); //基准右边快排
    }
    quickSort(arr, 0, arr.length - 1);
}
quickSort1(arr);
console.log(arr);