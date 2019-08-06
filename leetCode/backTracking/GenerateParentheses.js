/**
 * 括号生成
 * Generate Parentheses
 * 
 * Given n pairs of parentheses, 
 * write a function to generate all combinations of well-formed parentheses.
 * 
 * For example, given n = 3, a solution set is:
    [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
    ]
 */
var generateParenthesis = function(n) {
    // 如果输入的 n 为 0，则返回空数组
    if(n === 0) return [];
    let result = [];
    let temp = "";
    let leftNum = n, rightNum = n;
    backTracking(leftNum, rightNum, temp, result);
    return result;
};
function backTracking(leftNum, rightNum, temp, result) {
    if(leftNum === 0 && rightNum === 0) {
        result.push(temp);
        return ;
    }
    if(leftNum > 0) {
        backTracking(leftNum - 1, rightNum, temp + '(', result);
    }
    if(rightNum > leftNum) {
        backTracking(leftNum, rightNum - 1, temp + ')', result);
    }
}