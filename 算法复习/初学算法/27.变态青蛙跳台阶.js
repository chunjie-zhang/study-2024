//f(n)=f(n-1)+f(n-2)+....+f(2)+f(1)+f(0);

function jump (n){
  if(n<=0)return;
  if(n==1)return 1;
  if(n==2)return 2;
  var result =0;
  for(var i=1;i<n;i++){
      result+=jump(n-i);
  }
  return result+1;//1为直接从原地跳到终点
}
console.log(jump(8));


