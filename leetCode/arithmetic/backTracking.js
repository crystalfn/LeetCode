/**
 * 回溯法
 */

/**
 * 例 1：给出 n 对括号，求括号排列的所有可能性
 */
function backTracking(n) {
    // 定义一个变量传递不完整的解
    let temp = "";
    // 定义一个变量存储每一个完整的解，最后返回输出
    let result = [];

    // 定义左右括号数量均为 n
    let leftNum = n, rightNum = n;

    // 回溯
    parenthese("", result, leftNum, rightNum);

    return result;
}
function parenthese(temp, result, leftNum, rightNum) {
    // 定义结束条件
    if(leftNum === 0 && rightNum === 0) result.push(temp);
    // 定义构建每一步解的条件
    /**
     * 两个 if 中 temp 的改变一定要分开，要么按照注释掉的方法写，不改变原 temp 值
     * 要么对 left 和 right 分别定义 temp 分别改变
     * 因为在 js 中没有块作用域，所以如果上一个 if 中改变了 temp 值，会影响第二个 if 中 temp 的值
     * 
     * 从第一个 if 中出来，进入第二个 if 时，直接递归的是 leftNum - 1 和 rightNum
     * 其实就是在恢复状态了
     */
    if(leftNum > 0) {
        let tempLeft = temp + "(";
        parenthese(tempLeft, result, leftNum - 1, rightNum);
        // parenthese(temp+"(", result, leftNum - 1, rightNum);
    }
    if(rightNum > leftNum) {
        let tempRight = temp + ")";
        parenthese(tempRight, result, leftNum, rightNum - 1);
        // parenthese(temp+")", result, leftNum, rightNum - 1);
    }
}





/**
 * 例 2：给出一个大于 0 且不重复的数字数组和一个目标，
 * 求数组中数的组合的和得到该目标（数字不同组合顺序当做一个解）
 * 
 * 没有去重，个人觉得这题应该采用 map 的方法来写更好
 *  var twoSum = function(nums, target) {
        let res = [];
        let map = new Map();
        for(let i in nums) {
            map.set(nums[i], i);
        }
        
        for(let j = 0; j < nums.length - 1; j++) {
            let cur = target - nums[j];
            if(map.has(cur) && map.get(cur) != j) {
                res = [j, map.get(cur)];
                return res;
            }
        }
    };
 */
// 定义一个变量存储每一个完整的解，最后返回输出
let result = [];
function backTracking(num, target) {
    // 定义一个变量传递不完整的值
    let temp = "";
    
    // 回溯
    find(num, target, temp);

    return result;
}
function find(num, target, temp) {
    if(output(target, temp)) result.push(temp);

    for(let i = 0; i < num.length; i++) {
        if(num[i] !== -1) {
            let cur = num[i];
            num[i] = -1;
            find(num, target, temp + cur);
            // 恢复原状态
            num[i] = cur;
        }
    }
}
function output(target, temp) {
    let cur = 0;
    for(let i = 0; i < temp.length; i++) {
        cur += parseInt(temp[i]);
    }
    if(cur === target) return true;
    else return false;
}
// console.log(backTracking([2, 3, 7, 6, 4, 5, 1, 8], 9));





/**
 * 例 3：给一个字符串，给出他的所有排列
 */
let result = new Set();
function backTracking(str) {
    let temp = "";
    combination(str, temp);
    return [...result];
}
function combination(str, temp) {
    if(str.length === 0) {
        result.add(temp);
        return;
    }
    for(let i = 0; i < str.length; i++) {
        let curStr = str.slice(0, i) + str.slice(i+1, str.length);
        combination(curStr, temp + str[i]);
    }
}
console.log(backTracking('abc'));