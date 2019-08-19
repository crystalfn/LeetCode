/**
 * 不同的二叉搜索树
 * 
 * Given n, 
 * how many structurally unique BST's (binary search trees) that store values 1 ... n?
 * 
 * Example:
    Input: 3
    Output: 5
    Explanation:
    Given n = 3, there are a total of 5 unique BST's:
        1         3     3      2      1
         \       /     /      / \      \
          3     2     1      1   3      2
         /     /       \                 \
        2     1         2                 3
 */

 /**
  * 动态规划
  * 卡特兰数公式
  * 找状态方程：res[n] += res[i-1] * res[n-i]
  */
 var numTrees = function(n) {
    let res = new Array(n+1).fill(0);
    res[0] = 1;
    res[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            res[i] += res[j-1] * res[i-j];
        }
    }

    return res[n];
};