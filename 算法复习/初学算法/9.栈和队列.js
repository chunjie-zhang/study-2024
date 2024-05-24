//栈:先进后出
//模拟栈
// function Stack(){
//    this.arr = [];
//    this.push = function(value){
//        this.arr.push(value);
//    }
//    this.pop = function(value){
//        this.arr.pop(value);
//    }
// }

class Stack{
    constructor(){
        this.item = {};
        this.count = 0;
    }

    push(item1){
       this.item[this.count] = item1; 
       this.count++
    }
    pop(){
       this.count--;
       delete this.item[this.count]
    }
}

var a = new Stack();
a.push(1);
a.push(2);
a.push(3); 
console.log(a.item);

a.pop();
console.log(a.item);

//队列:先进先出
//模拟队列
// function Queue(){
//     this.arr = [];
//     this.push = function(value){
//         this.arr.push(value);
//     }
//     this.shift = function(value){
//         this.arr.shift(value);
//     }
//  }
 
//  var b = new Queue();
//  b.push(1);
//  b.push(2);
//  b.push(3); 
//  console.log(b.arr);
 
//  b.shift();
//  console.log(b.arr);