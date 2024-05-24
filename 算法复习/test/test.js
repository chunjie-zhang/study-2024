//冒泡排序
// var arr = [1,2,54,654,324,687,9874];

// function compare(a,b){
//    if(a>b){
//       return true;
//    }else{
//        return false;
//    }
// }

// function exchange(arr,a,b){
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function sort (arr){
//    for(var i =0;i<arr.length;i++){
//        for(var j= 0;j<arr.length-i;j++){
//            if(compare(arr[j],arr[j+1])){
//                    exchange(arr,j,j+1);
//            }
//        }
//    }
//    return arr;
// }
// console.log(sort(arr));

//表的逆置

// function nizhi(root){
//     if(root.next ==null){
//        return root;
//     }
//     if(root.next.next == null){
//         root.next.next = root
//         return root.next
//     }else{
//         var result = nizhi(root.next);
//         root.next.next = root;
//         root.next = null;
//         return result;
//     }
// }
// nizhi(a);

// function test (str){
//     var result = str.replace(/ /g,"%20");
//     return result;

// }
// console.log(test("hello word "));

//选择排序
// function compare(a,b){
//    if(a>b){
//        return true;
//    }else{
//        return false;
//    }
// }

// function exchange(arr,a,b){
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function sort (arr){
//  for(var i=0;i<arr.length;i++){
//      var index = 0; 
//     for(var j=0;j<arr.length;j++){
//        if(compare(arr[index],arr[j])){
//             index=j;
//        }
//     }
//      exchange(arr,index,arr.length-1-i);
//   }
//   return arr;
// }
// console.log(sort(arr));

//快速排序

// var arr = [21,4,43,28,231,56,6543,54,746,414,56,445];
// function kuaipai(arr){
//     if(arr==null||arr.length ==0)return [];
//     var leader = arr[0];
//     var left = [];
//     var right = [];
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]<leader){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     left = kuaipai (left);
//     right = kuaipai (right);
//     left.push(leader);
//     return left.concat(right);
// }
// console.log(kuaipai(arr));

// function Node(value){

// }
// function erchashu(qian,zhong){
//     var root = new Node(qian[0])
//     index = zhong.indexOf(root.value);
//     var qianleft = qian.slice(1,index+1);
//     var qianright = qian.slice(index+1,qian.length);
//     var zhongleft = zhong.slice(0,index);
//     var zhongRight = zhong.slice(index+1,zhong.length);
//     root.left = erchashu

// }

//节流

// var odiv = document.getElementById("num");
// var obtn = document.getElementById("btn");

// obtn.onclick = throttle(buy,1000);
// function throttle(callback,delay){
//     var lastTime = 0;
//     return function(e){
//         var nowTime = new Date().getTime();
//         if(nowTime-lastTime >delay){
//                callback.apply(this,arguments);
//                lastTime = nowTime;
//         } 
//     }
// }

// function buy(e){
//    odiv.innerText = parseInt(odiv.innerText) +1;
// }

//防抖
// var oinp = document.getElementById("input");

// oinp.oninput = fangdou(callback,1000);

// function fangdou(callback,delay){
//    var timer = null;
//    return function(e){
//        var _self = this, arg = arguments;
//        clearTimeout(timer);
//       timer = setTimeout(function(){
//           callback.apply(_self,arg);
//       },delay)
//    }
// }
// function callback(e){
//    console.log(e.target.value);
// }


// var arr = [];
// var arr1 = [];

// function change(b){
//     var b = b.toString();
//     var b1 = b.split("").reverse().join("");
//     return parseInt(b1);
// }

// function sort(n){
//     if(8712<=n<87912){
//         console.log(1);  
//         console.log(8712,2178);
//    }
//    if(87912<=n<=100000){
//    console.log(2);  
//    console.log(8712,2178);
//     console.log(87912,21978);
       
//    }
//    for(var i=0;i<n;i++){
//           arr.push(i);
//       }
//     for(var j= 0;j<arr.length;j++){
//         var g = change(arr[j]);
//         if(g<=n&&g/4==arr[j]){
//             arr1.push(arr[j]);
//         }
//     }
//     console.log(arr1.length-1);
//     for(var k=1;k<arr1.length;k++){
//         var k1 = change(arr1[k]);
//       console.log(k1,arr1[k]);
//     }
// }
// sort(10000);

// function CalulateMethodCount( num_money ) {
//     // write code here
//     if(num_money==0){
//         return;
//     }else if(num_money==1){
//         return 1;
//     }
//     else if(num_money==2){
//         return 2;
//     }
//     else if(num_money==3){
//         return 4;
//     }else{
//         var result = 0;
//         for(var i=0;i<num_money;i++){
//           result +=i
//         }
//     return result+1;
//     }
    
// }
// console.log(CalulateMethodCount(1));

const multipleAxios = async(params, limit) => {
    const arr = []
    let res
    for (let i = 0; i < limit; i += 1) {
      arr.push(i)
    }
    for await (const i of arr) {
      try {
        res = await axios(params)
        if (res) {
          break
        }
      } catch (err) {
        console.log(`err${i}次`, err)
      }
    }
    return res
  }


///////////

// const arr = [123,3,4434,6,54,34,234,12,312,3]

// function quickSort (arr) {
//   let base = arr[0];
//   let leftArr = [];
//   let rightArr = [];
//   if (!(arr && arr.length > 0)) {
//     return [];
//   }

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > base) {
//       rightArr.push(arr[i]);
//     } else {
//       leftArr.push(arr[i]);
//     }
//   }

//   leftArr = quickSort(leftArr);
//   rightArr = quickSort(rightArr);
//   leftArr.push(base);
//   return leftArr.concat(rightArr);
// }

// console.log(quickSort(arr));

// function exchange (arr, i, j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }
// function maopao (arr) {
//   for (let index = 0; index < arr.length; index++) {
//     for (let i = 0; i < arr.length - index; i++) {
//       if (arr[i] > arr[i + 1]) {
//         exchange(arr, i, i+1);
//       }
//     }
//   }
//   return arr;
// }
// console.log(maopao(arr));

// 

// function exchange (arr, i, j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// function select(array) {
//   for (let i = 0; i < array.length; i++) {
//     let max = 0;
//     for (let j = 0; j < array.length - i; j++) {
//       if (array[max] < arr[j]) {
//         max = j
//       }  
//     }
//     exchange(array, max, array.length-1-i);  
//   }
//   return array;
// }
// console.log(select(arr));

var arr = [1,213,3,443,545,656,7,8];

function maopao (arr) {

}
console.log(maopao(arr));