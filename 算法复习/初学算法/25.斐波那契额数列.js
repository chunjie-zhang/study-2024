// 0 1 1 2 3 5 8 13 21

function feibo(n) {
   if(n<=0)return;
   if(n==1)return 0;
   if(n==2)return 1;
   var a=0;
   var b=1
   var c;
   for(var i=3;i<=n;i++){
     c=a+b;
     a=b;
     b=c;
   }
   return c;
}
console.log(feibo(1000));

// function feibo1(n) {
//     if(n<=0)return;
//     if(n==1)return 0;
//     if(n==2)return 1;
//     return feibo1(n-1)+feibo1(n-2);
//  }
//  console.log(feibo1(1000));
 