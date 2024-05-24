function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");

a.left = c;
a.right = b;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function zhongxu (root){
  if(root==null)return;
  zhongxu(root.left);
  console.log(root.value);
  zhongxu(root.right);

}
zhongxu(a);
