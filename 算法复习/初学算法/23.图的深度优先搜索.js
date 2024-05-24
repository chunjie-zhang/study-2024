function Node(value){
    this.value = value;
    this.neighbor=[];
 }
 var a = new Node('a');
 var b = new Node('b');
 var c = new Node('c');
 var d = new Node('d');
 var e = new Node('e');
 var f = new Node('f');
 
 a.neighbor.push(b);
 a.neighbor.push(c);
 b.neighbor.push(a);
 b.neighbor.push(c);
 b.neighbor.push(d);
 c.neighbor.push(a);
 c.neighbor.push(b);
 c.neighbor.push(d);
 d.neighbor.push(b);
 d.neighbor.push(c);
 d.neighbor.push(e);
 e.neighbor.push(d);

 function sheng(root,target,path){
     if(root==null)return false;
     if(path.indexOf(root)>-1)return false;
     if(root.value==target)return true;
     path.push(root);
     var result = false;
     for(i=0;i<root.neighbor.length;i++){
        result |= sheng(root.neighbor[i],target,path);
     }
   return result?true:false;
 }
 console.log(sheng(a,'n',[]));

