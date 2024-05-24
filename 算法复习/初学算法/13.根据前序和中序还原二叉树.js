var qian = ['a','c','f','g','b','d','e'];
var zhong = ['f','c','g','a','d','b','e'];

function Node (value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function erchashu (qian,zhong){
   if(qian==null||zhong==null||qian.length==0||zhong.length==0||zhong.length!=qian.length)return;
   var root = new Node(qian[0]);//前子树
   var index = zhong.indexOf(root.value);//前子树在中子树的索引
   var qianLeft = qian.slice(1,index+1);//前序遍历的左子树
   var qianRight = qian.slice(index+1,qian.length);//前序遍历的右子树
   var zhongLeft = zhong.slice(0,index);//中序遍历的左子树
   var zhongRight = zhong.slice(index+1,zhong.length);//中序遍历的右子树
   root.left = erchashu(qianLeft,zhongLeft);//还原前序和中序的左子树给root.left
   root.right = erchashu(qianRight,zhongRight);//还原前序和中序的右子树给root.right
   return root;
}
var root = erchashu(qian,zhong)
console.log(root);