var arr = [21,4,43,28,231,56,6543,54,746,414,56,445];

// 快排
// function quickSort(arr) {
//   if (!(arr && arr.length > 0)) return [];

//   let base = arr[0];
//   let left = [];
//   let right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= base) {
//       right.push(arr[i])
//     } else {
//       left.push(arr[i]);
//     }
//   }
//   left = quickSort(left)
//   right = quickSort(right);
//   left.push(base);
//   return left.concat(right);
// }


function exchange(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 冒泡排序-两两比较，每次找到最大的

// function maopao(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j<arr.length - i; j++) {
//       if(arr[j] > arr[j+1]) {
//         exchange(arr, j, j+1);
//       }
//     }
//   }
//   return arr;
// }

// 选中排序-两两比较拿到最大值的索引，最后赋值
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for(let j = 0; j<arr.length - i; j++) {
      if (arr[j] > arr[max]) {
        max = j
      }
    }
    exchange(arr, max, arr.length - 1 - i)
  }
  return arr;
}

console.log(selectSort(arr));