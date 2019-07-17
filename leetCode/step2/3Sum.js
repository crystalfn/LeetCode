/**
 * Decription:
 * Given an array nums of n integers, 
 * are there elements a, b, c in nums such that a + b + c = 0? 
 * Find all unique triplets in the array which gives the sum of zero.
 * 
 * Note: The solution set must not contain duplicate triplets.
 * 
 * Example:
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is: [ [-1, 0, 1], [-1, -1, 2] ]
 */

/**
 * made by others
 * 首先将数组排序；
 * 然后从左边开始，选定第一个人；
 * 双指针，从指定的人的后一位开始，一个指针指向最左边，一个指针指向最右边
 * 如果结果大于 0，右指针左移，如果结果小于 0，左指针右移
 */
var threeSum = function (nums) {
    let res = []
    let len  = nums.length;

    // 排序
    nums.sort((n1, n2) => n1 - n2);

    // 只有当数组中的元素有正有负或者全为 0 时才有解
    if(nums[0] <= 0 && nums[len - 1] >= 0) {
        // 循环，选定第一个人
        for(let i = 0; i < len - 2;) {
            // 如果最小的数都大于 0，无解
            if(nums[i] > 0) break;
            let l = i + 1, r = len - 1;
            do {
                // 如果最大的数都小于 0，无解
                if(l >= r || nums[r] < 0) break;
                let sum = nums[i] + nums[l] + nums[r];
                // 如果符合条件，将符合条件的数放入结果数组中
                if(sum === 0) res.push([nums[i], nums[l], nums[r]]);
                // 如果结果小于 0，右移左指针
                if(sum <= 0) {
                    while(l < r && nums[l] === nums[++l]) {}
                }
                // 如果结果大于 0，左移右指针
                else {
                    while(l < r && nums[r] === nums[--r]) {}
                }
            } while(l < r)
            // 如果 nums[i] === nums[++i]，跳过 ++i
            while(nums[i] === nums[++i]) {}
        }
    }

    return res;
  }