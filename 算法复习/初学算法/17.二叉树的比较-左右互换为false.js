function Node (value){
   this.value = value;
   this.left = null;
   this.rigth = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");

a.left = c;
// a.right = b;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

var a1 = new Node("a");
var b1 = new Node("b");
var c1 = new Node("c");
var d1 = new Node("d");
var e1 = new Node("e");
var f1 = new Node("f");
var g1 = new Node("g");

a1.left = c1;
// a1.right = b1;
b1.left = d1;
b1.right = e1;
c1.left = f1;
c1.right = g1;

function compare(root,root1){
    if(root==root1)return true;//相同的节点树
    if(root==null&&root1!=null||root!=null&&root1==null)return false;
    if(root.value!=root1.value)return false;//相同位置的值是否相同
    var compareLft = compare(root.left,root1.left);
    var compareRight = compare(root.right,root1.right);
    return compareLft&&compareRight;
}
console.log(compare(a,a1));