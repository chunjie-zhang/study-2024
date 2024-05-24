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

function gaung(rootList,target){
    if(rootList==null||rootList.length==0||target==null)return false;
    var childList = [];
    
    for(var i=0;i<rootList.length;i++){
        // console.log(rootList[i].value);
        if(rootList[i]==null||rootList[i].value==null){
            return false;
         }else if(rootList[i].value==target){
             return true;
        }else{
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
        
    }
    return gaung(childList,target);
}
console.log(gaung([a],"j"));