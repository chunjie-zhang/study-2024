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


function log (root) {
  if (root === null) {
     return;
  }
  console.log(root.value);
  log(root.left);
  log(root.right);
}

function qianxu (root){
    if(root==null){
        return ;
    }
    console.log(root.value);
    qianxu(root.left);
    qianxu(root.right);
}

log(a)
