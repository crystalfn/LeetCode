/**
 * 不同路径
 * Unique Paths
 * 
 * A robot is located at the top-left corner of a m x n grid 
 * (marked 'Start' in the diagram below).
 * 
 * The robot can only move either down or right at any point in time. 
 * The robot is trying to reach the bottom-right corner of the grid 
 * (marked 'Finish' in the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
    Input: m = 3, n = 2
    Output: 3
    Explanation:
    From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Right -> Down
    2. Right -> Down -> Right
    3. Down -> Right -> Right

 * Example 2:
    Input: m = 7, n = 3
    Output: 28
 */

/**
 * made by myself
 * 状态方程：res[m, n] = res[m-1, n] + res[m, n-1]
 * 需要考虑边界，边界只能向右或者向下走
 */
var uniquePaths = function(m, n) {
    // 定义一个二维数组，为了处理边界情况添加一行和一列
    let res = new Array(m+1);
    for(let i = 0; i < m + 1; i++) {
        res[i] = new Array(n+1);
    }
    // 为第一行和第一列赋值为 0
    for(let i = 0; i < n + 1; i++) {
        res[0][i] = 0
    }
    for(let i = 0; i < m + 1; i++) {
        res[i][0] = 0;
    }

    // 定义初始值
    res[1][1] = 1;
    // 动态规划
    for(let i = 1; i < m + 1; i++) {
        for(let j = 1; j < n + 1; j++) {
            if(i === 1 && j === 1) continue;
            res[i][j] = res[i - 1][j] + res[i][j - 1];
        }
    }
    return res[m][n];
};
console.log(uniquePaths(7, 3));

/**
 * made by myself
 */
var uniquePaths = function(m, n) {
    // 定义一个二维数组，为了处理边界情况添加一行和一列
    let res = new Array(m);
    for(let i = 0; i < m; i++) {
        res[i] = new Array(n);
    }
    // 动态规划
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) res[0][0] = 1;
            else if(i === 0) res[i][j] = res[i][j - 1];
            else if(j === 0) res[i][j] = res[i - 1][j];
            else res[i][j] = res[i - 1][j] + res[i][j - 1];
        }
    }
    return res[m-1][n-1];
};
console.log(uniquePaths(7, 3));