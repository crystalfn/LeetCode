/**
 * 字母大小写全排列
 * 
 * Given a string S, 
 * we can transform every letter individually 
 * to be lowercase or uppercase to create another string.  
 * Return a list of all possible strings we could create.
 * 
 * Examples:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 * 
 * Input: S = "12345"
 * Output: ["12345"]
 */

/**
 * made by myself
 */
var letterCasePermutation = function(S) {
    // 如果字符串为空，直接返回
    if(S === '') return [];
    // 如果字符串中只有数字，直接返回字符串
    if(String(Number(S)) === S) return [S];
    /**
     * 在假设传入的字符串中只有字母和数字且字符串不全为数字的情况下
     * 定义全局变量存储结果，定义变量传递不完全解
     */
    let result = new Set();
    let temp = "";
    S = S.toLowerCase();
    backTracking(S, result, temp);
    return [...result];
};
function backTracking(S, result, temp) {
    if(temp.length === S.length) {
        result.add(temp);
        return ;
    }
    let len = temp.length;
    if(Number(S[len])) backTracking(S, result, temp + S[len]);
    else {
        backTracking(S, result, temp + S[len]);
        backTracking(S, result, temp + S[len].toUpperCase());
    }
}
