/**
 * 全排列 1
 * Permutations 1
 * 
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
    Input: [1,2,3]
    Output:
    [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
    ]
 */
var permute = function(nums) {
    if(nums.length === 0) return [];
    else if(nums.length === 1) return [nums];
    let len = nums.length;
    let result = [];
    let temp = [];
    backTracking(nums, result, temp, len);
    return result;
};
function backTracking(nums, result, temp, len) {
    temp = temp.slice();
    if(temp.length === len) {
        result.push(temp);
        return ;
    } else {
        for(let i = 0; i < nums.length; i++) {
            temp.push(nums[i]);
            backTracking(nums.slice(0, i).concat(nums.slice(i+1)), result, temp, len);
            temp.pop();
        }
    }
}
// console.log(permute([1,2,3]));

/**
 * 全排列 2
 * Permutations II
 * 
 * Given a collection of numbers that might contain duplicates, 
 * return all possible unique permutations.
 * 
 * Example:
    Input: [1,1,2]
    Output:
    [
    [1,1,2],
    [1,2,1],
    [2,1,1]
    ]
 */
var permuteUnique = function(nums) {
    nums.sort((n1, n2) => n1 - n2);
    let len = nums.length;
    if(len === 0) return [];
    if(len === 1) return [nums];
    let result = [];
    let temp = [];
    backTracking(nums, result, temp, len);
    return result;
};
function backTracking(nums, result, temp, len) {
    temp = temp.slice();
    if(temp.length === len) {
        result.push(temp);
        return ;
    } else {
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === nums[i - 1]) continue;
            temp.push(nums[i]);
            backTracking(nums.slice(0, i).concat(nums.slice(i+1)), result, temp, len);
            temp.pop();
        }
    }
}
console.log(permuteUnique([1, 1, 2]));