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


function sheng(root,target){
    if(root==null||target==null)return false;
    if(root.value ==target)return true;
    var left = sheng(root.left,target);
    var right = sheng(root.right,target);
    return left||right
}

console.log(sheng(a,'h')); 