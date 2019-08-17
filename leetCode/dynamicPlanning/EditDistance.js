/**
 * 编辑距离
 * Edit Distance
 * 
 * Given two words word1 and word2, 
 * find the minimum number of operations required to convert word1 to word2.
 * 
 * You have the following 3 operations permitted on a word:
    Insert a character
    Delete a character
    Replace a character

 * Example 1:
    Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation: 
    horse -> rorse (replace 'h' with 'r')
    rorse -> rose (remove 'r')
    rose -> ros (remove 'e')
 */

 /**
  * made by others
  * 定义一个二维数组 dp[i][j]：表示 word1 到 i 位置转换为 word2 到 j 位置需要的最小步数
  * dp[i-1][j]：代表 word1 删除一位的操作；
  * dp[i][j-1]：代表 word1 增加一位的操作；
  * do[i-1][j-1]：代表替换的操作
  * 在知道 dp[i-1][j]、dp[i][j-1]、dp[i-1][j-1] 的情况下有：
  * 1、word1[i-1] = word2[j-1]: dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1])
  * 2、word1[i-1] ！= word2[j-1]: dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+1)
  */
 var minDistance = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;

    if(len1 === 0 || len2 === 0)  Math.max(len1, len2);

    let res = new Array(len1);
    for(let i = 0; i <= len1; i++) {
        res[i] = new Array(len2);
        for(let j = 0; j <= len2; j++) {
            // 初始化
            if(i === 0 || j === 0) res[i][j] = Math.max(i, j);
            else {
                let flag;
                flag = word1[i-1] === word2[j-1] ? 0 : 1;
                res[i][j] = Math.min(res[i-1][j]+1, res[i][j-1]+1, res[i-1][j-1]+flag);
            }
        }
    }

    return res[len1][len2];
};