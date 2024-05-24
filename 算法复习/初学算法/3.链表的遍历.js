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

function each(root) {
  if(root === null) return;
  console.log(root.value);
  each(root.next);

}

each(a);

//第一种方法
/**
 * 
 * @param {*} root //链表
 */
function bian(root){
   var temp = root;
   while(true){
       if(temp!=null){
           console.log(temp.value);
       }else{
           return;
       }
       temp = temp.next;
   }
}

// bian(a);

//第二种方法

function bian1(root){
   if(root==null)return;
   console.log(root.value);
   bian1(root.next);
}
// bian1(a);