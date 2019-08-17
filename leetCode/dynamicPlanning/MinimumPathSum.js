/**
 * 最小路径和
 * Minimum Path Sum
 * 
 * Given a m x n grid filled with non-negative numbers, 
 * find a path from top left to bottom right 
 * which minimizes the sum of all numbers along its path.
 * 
 * Example:
    Input:
    [
    [1,3,1],
    [1,5,1],
    [4,2,1]
    ]
    Output: 7
    Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * made by myself
 * 状态方程：res[m, n] = grid[m, n] + min(res[m-1, n], res[m, n-1])
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // 定义二维数组
    let res = new Array(m);
    for(let i = 0; i < m; i++) {
        res[i] = new Array(n);
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) res[i][j] = grid[i][j];
            else if(i === 0) res[i][j] = res[i][j-1] + grid[i][j];
            else if(j === 0) res[i][j] = res[i-1][j] + grid[i][j];
            else res[i][j] = Math.min(res[i-1][j], res[i][j-1]) + grid[i][j];
        }
    }

    return res[m-1][n-1];
};