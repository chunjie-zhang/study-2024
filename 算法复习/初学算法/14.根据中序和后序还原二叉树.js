var zhong = ['f','c','g','a','d','b','e'];
var hou = ['f','g','c','d','e','b','a'];

function Node(value){
   this.value = value;
   this.left = null;
   this.right = null;
}

function erchashu(zhong,hou){
    if(zhong==null||hou==null||zhong.length==0||hou.length==0||zhong.length!=hou.length)return ;
    //  var root = new Node(hou[hou.length-1]);
    //  var index = zhong.indexOf(root.value);
    //  var zhongLeft = zhong.slice(0,index);
    //  var zhongRight = zhong.slice(index+1,zhong.length);
    //  var houLeft = hou.slice(0,index);
    //  var houRight = hou.slice(index,hou.length-1);
    //  root.left = erchashu(zhongLeft,houLeft);
    //  root.right = erchashu(zhongRight,houRight);
    //  return root;

    var root = new Node(hou[hou.length-1]);
    var i = zhong.indexOf(hou[hou.length-1]);
    root.left = erchashu(zhong.slice(0,i),hou.slice(0,i))
    root.right = erchashu(zhong.slice(i+1,zhong.length),hou.slice(i,hou.length-1));
    return root;
}
var root1 = erchashu(zhong,hou);
console.log(root1);

// function qianxu(root1){
//     if(root1==null||root1.length==0)return;
//     console.log(root1.value);
//     qianxu(root1.left);
//     qianxu(root1.right);
// }
// qianxu(root);