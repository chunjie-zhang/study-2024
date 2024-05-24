function Node(value){
    this.value = value;
    this.next = null;
    this.pre = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);

a.next = b;
b.pre = a;
b.next = c;
c.pre = b;
c.next = d;
d.pre = c;
d.next = e;
e.pre = d;

console.log(e.pre.value);


