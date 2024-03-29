/**
 * 最大子序列和
 * Maximum Subarray
 * 
 * Given an integer array nums, 
 * find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 * 
 * Example:
    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
 */

/**
 * made by myself
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return null;
    let res = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        res = Math.max(res, sum);
    }
    return res;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
