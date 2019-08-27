/**
 * 买卖股票的最佳时机 II
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

/**
 * 在 1 的基础上稍微变换状态方程
 */
var maxProfit = function(prices) {
    let len = prices.length;
    
    if(len < 2) return 0;
    
    let dp = new Array(len);
    for(let i = 0; i < len; i++) {
        dp[i] = new Array(2);
    }
    
    for(let i = 0; i < len; i++) {
        // 初始化
        if(i === 0) {
            dp[0][0] = 0;
            dp[0][1] = -prices[i];
            continue;
        } else {
            dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
            dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] -prices[i]);
        }
    }
    
    return dp[len-1][0];
};