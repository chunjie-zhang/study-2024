function Node(value){
    this.value = value;
    this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// function reserve(root) {
//   if (root.next === null) {
//     return root;
//   }
//   if (root.next.next === null) {
//      root.next.next = root;
//      return root.next;
//   }
//    var result = reserve(root.next);
//    root.next.next = root;
//    root.next = null;
//    return result;

// };

// console.log(reserve(c));

// function Nizhi(root){
//     if(root.next==null){
//        return root;
//     }
//     if(root.next.next ==null){
//         root.next.next = root;
//         return root.next;
//     }else{
//         var result = Nizhi(root.next);
//         root.next.next=root;
//         root.next=null
//         return result;
//     }
// }

function Nizhi(root){
  let temp = null; let pre = null; let cur = root
   while(cur){
      temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp
   }
   return pre;
}
console.log(Nizhi(c));


