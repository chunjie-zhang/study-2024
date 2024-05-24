/**动态规划，英文：Dynamic Programming，简称DP，将问题分解为互相重叠的子问题，通过反复求解子问题来解决原问题就是动态规划，如果某一问题有很多重叠子问题，使用动态规划来解是比较有效的。
 * 重叠子问题、最优子结构、状态转移方程就是动态规划三要素
 * 动态规划和其他算法的区别
      动态规划和分治的区别：动态规划和分治都有最优子结构 ，但是分治的子问题不重叠
      动态规划和贪心的区别：动态规划中每一个状态一定是由上一个状态推导出来的，这一点就区分于贪心，贪心没有状态推导，而是从局部直接选最优解，所以它永远是局部最优，但是全局的解不一定是最优的。
      动态规划和递归的区别：递归和回溯可能存在非常多的重复计算，动态规划可以用递归加记忆化的方式减少不必要的重复计算
* 动态规划的解题方法
      递归+记忆化(自顶向下)
      动态规划（自底向上）
* 解动态规划题目的步骤
      1. 根据重叠子问题定义状态
      2. 寻找最优子结构推导状态转移方程
      3. 确定dp初始状态
      4. 确定输出值
 * **/



// 1. 通常的递归写法

//暴力递归复杂度O(2^n)
var fib = function (N) {
  if (N == 0) return 0;
  if (N == 1) return 1;
  return fib(N - 1) + fib(N - 2);
};

// 递归 + 记忆化 (自顶向下)
var fib = function (n) {
  const memo = {}; // 对已算出的结果进行缓存，减少了递归方法的重复计算

  const helper = (x) => {
      if (memo[x]) return memo[x];
      if (x == 0) return 0;
      if (x == 1) return 1;
      memo[x] = helper(x - 1) + helper(x - 2);
      return memo[x];
  };

  return helper(n);
};

// 动态规划 （自底向上）
const fib = (n) => {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
      //自底向上计算每个状态
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 滚动数组优化
const fib = (n) => {
  if (n <= 1) return n;
  //滚动数组 dp[i]只和dp[i-1]、dp[i-2]相关，只维护长度为2的滚动数组，不断替换数组元素
  const dp = [0, 1];
  let sum = null;
  for (let i = 2; i <= n; i++) {
      sum = dp[0] + dp[1];
      dp[0] = dp[1];
      dp[1] = sum;
  }
  return sum;
};

// 动态规划 + 降维，（降维能减少空间复杂度，但不利于程序的扩展）
var fib = function (N) {
  if (N <= 1) {
      return N;
  }
  let prev2 = 0;
  let prev1 = 1;
  let result = 0;
  for (let i = 2; i <= N; i++) {
      result = prev1 + prev2; //直接用两个变量就行
      prev2 = prev1;
      prev1 = result;
  }
  return result;
};