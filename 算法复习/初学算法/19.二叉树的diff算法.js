function Node (value){
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
 
 a.left = b;
 a.right = c;
 b.left = d;
 b.right = e;

 c.right = g;
 
 var a1 = new Node("a");
 var b1 = new Node("b");
 var c1 = new Node("c");
 var d1 = new Node("d");
 var e1 = new Node("e");
 var f1 = new Node("f");
 var g1 = new Node("g");
 
 a1.left = b1;
 
 var diffList = [];
 function diff(root,root1,diffList){
     if(root==root1) return diffList;//两个二叉树相等
    if(root==null&&root1!=null){
        diffList.push({type:'新增',origin:null,now:root1});
    }else if(root!=null&&root1==null){
       diffList.push({type:'删除',origin:root,now:null});
    }else if(root.value!=root1.value){
       diffList.push({type:'修改',origin:root,now:root1});
       diff(root.left,root1.left,diffList);
       diff(root1.right,root1.right,diffList);
    }else{
        diff(root.left,root1.left,diffList);
        diff(root1.right,root1.right,diffList);
    }
 }
diff(a,a1,diffList);

console.log(diffList);