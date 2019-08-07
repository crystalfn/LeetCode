/**
 * 组合总和 1
 * Combination Sum
 * 
 * Given a set of candidate numbers (candidates) (without duplicates) 
 * and a target number (target), 
 * find all unique combinations in candidates 
 * where the candidate numbers sums to target.
 * The same repeated number may be chosen from candidates unlimited number of times.
 * 
 * Note:
    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.
 *
 * Example 1:
    Input: candidates = [2,3,6,7], target = 7,
    A solution set is:
    [ [7], [2,2,3] ]
 *
 * Example 2:
    Input: candidates = [2,3,5], target = 8,
    A solution set is:
    [ [2,2,2,2], [2,3,3], [3,5] ]
 */

var combinationSum = function(candidates, target) {
    candidates.sort((n1, n2) => n1 - n2);
    if(candidates.length === 0 || target < candidates[0]) return [];
    let result = [];
    let temp = [];
    backTracking(candidates, target, temp, result, 0);
    return result;
};
function backTracking(candidates, target, temp, result, index) {
    if(target < 0) return;
    else if(target === 0) {
        temp = temp.slice();
        result.push(temp);
        return ;
    } else {
        for(let i = index; i < candidates.length; i++) {
            temp.push(candidates[i]);
            backTracking(candidates, target - candidates[i], temp, result, i);
            // 把压入到 temp 中的值弹出，恢复 temp 的原状态，用于下一个情况的开始
            temp.pop();
        }
    }
}
console.log(combinationSum([2,3,6,7], 7));



/**
 * 组合总和 2
 * Combination Sum II
 * 
 * Given a collection of candidate numbers (candidates) 
 * and a target number (target), 
 * find all unique combinations in candidates
 * where the candidate numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Example 1:
    Input: candidates = [10,1,2,7,6,1,5], target = 8,
    A solution set is:
    [
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6]
    ]
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((n1, n2) => n1 - n2);
    if(candidates.length === 0 || target < candidates[0]) return [];
    let result = [];
    let temp = [];
    backTracking(candidates, target, temp, result, 0);
    return result;
};
function backTracking(candidates, target, temp, result, index) {
    if(target < 0) return;
    else if(target === 0) {
        temp = temp.slice();
        result.push(temp);
        return ;
    } else {
        for(let i = index; i < candidates.length; i++) {
            /**
             * 关键点 1
             * 去重，i > index 这个点没有想出来
             * 当循环到下一个数时，如果它的值等于前一个数，则会产生重复
             * 故去掉对这个值的回溯
             */
            if(i > index && candidates[i] === candidates[i-1]) continue;
            temp.push(candidates[i]);
            /**
             * 关键点 2
             * 此时传下去的 index 是 i+1 
             */
            backTracking(candidates, target - candidates[i], temp, result, i+1);
            temp.pop();
        }
    }
}
console.log(combinationSum2([10,1,2,7,6,1,5], 8));