// var twoSum = function(nums, target) {
//   if(!(nums && nums.length > 0)) {
//       return[]
//   }
//   for (var i = 0; i< nums.length; i++) {
//       var num = target - nums[i];
//       console.log(num, nums,nums.includes(num))
//      if(nums.includes(num)) {
//           var index = nums.findIndex((item) => {
//           return item === num;
//           })
//           if (index !== undefined) {
//               return [i, index]
//           }
//      }
//   }
// }
// console.log(twoSum([3,2,4], 6));


// const result = arr.sort((item) => {
//   return item
// });

// console.log(result);

// console.log('a'.charCodeAt());

// const str = Array.from('12312');;
// str.sort();
// console.log(str);

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// function strArr (strs) {
//   if (!(strs && strs.length > 0)) {
//     return [];
//   }
//   let map = new Map();
//   for (let index = 0; index < strs.length; index++) {
//     let str = Array.from(strs[index]);
//     str.sort();
//     const newStr = str.toString();

//     const list = map.get(newStr) ? map.get(newStr) : new Array();
//     list.push(strs[index]);
//     map.set(newStr, list)
//   }
//   return Array.from(map.values())
// }
// console.log(strArr(strs));

// const arr = [213,234,3254,345,54,656,67,88,9,9]

// arr.sort()
// console.log(arr);


/**
 * item item - 1  ?  1 : val + 1
*/

// function long (arr) {
//   let map = new Map();
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], map.get(arr[i] - 1) ? arr[i - 1] + 1 : 1)
//     console.log(map);
//   }
//   let result = 0;
//   for( let val of map.values()) {
//     result = Math.max(val, result)
//   }
//   return result;
// }
// console.log(long(arr));


// 题目描述：
// 你是一个盗窃专家，某一天晚上你要去盗窃某一条街道的一排房子。这些房子都有相连的防盗系统，如果你把相邻的两家都偷了那么就会触发报警器。
// 用一个数组来表示这些房子的金钱数量，请你完成 rob 函数，计算出在不触发报警器的情况下最多能偷多少钱。例如：
// rob([1, 2, 3]) // => 4
// const arr = [5,100,4,200,1,3,2];

// function rob(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let result = 0;

//   while (left < right) {
//     for (let middle = left + 2; middle <= right;  middle++) {
//       const sum = arr[middle] + arr[left]
//       result = Math.max(result, sum);
//     }
//     left ++;
//   }

//   return result;
// }
// console.log(rob(arr));

// 重复字符的最长子串
// var lengthOfLongestSubstring = function(s) {
//   if(!s) {
//       return 0; 
//   }
//   if(s === ' ') {
//       return 1;
//   }
//   let resArr = [];
//   let middle = [];
//   let max = 0;
//   let arr = Array.from(s);
//   for(let i = 0; i<arr.length; i++) {
//       if (!middle.includes(arr[i])) {
//           middle.push(arr[i]);
//           console.log(middle);
//       } else {
//           resArr.push(middle);
//           middle = [];
//           middle.push(arr[i]);
//       }
//       if (i === arr.length - 1) {
//         resArr.push(middle);
//         middle = [];
//       }
//   }
//   resArr.forEach((item) => {
//       max = item.length > max ? item.length : max;
//   })
//   return max
// };

// console.log(lengthOfLongestSubstring('c'));

// var str = '213123123';
// for (const i of str) {
//   console.log(i);
// }

// function 