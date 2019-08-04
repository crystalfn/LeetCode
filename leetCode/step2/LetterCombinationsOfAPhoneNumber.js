/**
 * Description:
 * Given a string containing digits from 2-9 inclusive, 
 * return all possible letter combinations that the number could represent.
 * 
 * A mapping of digit to letters 
 * (just like on the telephone buttons) is given below. 
 * Note that 1 does not map to any letters.
 * 
 * Examile:
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

/**
 * made by myself
 */
var letterCombinations = function(digits) {
    let map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    // 定义一个变量传递不完整的值
    let temp = "";
    let result = new Set();
    if(digits === "") return [];
    // 回溯
    combinations(digits, temp, map, result);
    return [...result];
};
function combinations(digits, temp, map, result) {
    if(digits.length === 0) {
        result.add(temp);
        return ;
    }
    for(let i = 0; i < map[digits[0]].length; i++) {
        combinations(digits.substring(1), temp + map[digits[0]][i], map, result);
    }
};
console.log(letterCombinations('23'));
