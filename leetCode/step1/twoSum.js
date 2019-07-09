/**
 * Description:
 * 
 * Given an array of integers,
 * return indices of the two numbers such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * made by myself
 * 运用 indexOf() 方法找到剩下一个数字的索引值
 * 判断这个索引值是否大于 -1 且不等于第一个数字的索引值
 * 但是出题人想要的应该不是我这种思路
 */
var twoSum = function(nums, target) {
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        let j = nums.indexOf(target - nums[i]);
        if(j > -1 && j !== i) {
            res = [i, j];
            break;
        }
    }
    return res;
};

/**
 * made by others
 * 使用 map 
 * map 具有极快的查找速度
 * 将数组的值和对应的索引以 [键,值] 的形式保存为 map
 * 重复的值会被最后一个替代，存储的索引为最后一个出现的值的索引
 */
var twoSum = function(nums, target) {
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

/**
 * made by others
 * 使用 json 数组
 * 边存边比较，如果当前的数字不符合条件，就以 [键,值] 的形式存入 json 中
 * 直至找到符合条件的数
 */
var twoSum = function(nums, target) {
    let obj = {};
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        if(obj[target - nums[i]] > -1) {
            return [obj[target - nums[i]], i];
        }
        obj[nums[i]] = i;
    }
};

/**
 * made by others
 * 上一个方法的改进，使用尾递归
 * 使用尾递归，就不会发生栈溢出，相对节省内存
 */
var twoSum = function(nums, target, i = 0, object = {}) {
    let obj = object;
    if(obj[target - nums[i]] > -1) return [obj[target - nums[i]], i];
    else {
        obj[nums[i]] = i;
        i++;
        // 尾递归
        if(i < nums.length) return twoSum(nums, target, i, obj);
        else return 'not found';
    }
}