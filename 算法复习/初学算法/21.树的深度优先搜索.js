function Node(value){
   this.value = value;
   this.childs=[]
}
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.childs.push(c);
a.childs.push(f);
a.childs.push(b);
b.childs.push(d);
b.childs.push(e);

function deep(root,target){
    if(root==null)return false;
    if(root.value==target)return true;
    var result = false;
   //  console.log(root.value);树的遍历
    for(var i=0;i<root.childs.length;i++){
        result |= deep(root.childs[i],target);
    }
    return result?true:false;//返回0/1
}
console.log(deep(a,'d'));