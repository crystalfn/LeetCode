/**
 * Description:
 * Given n non-negative integers a1, a2, ..., an , 
 * where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis forms a container, 
 * such that the container contains the most water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * Example:
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 */

/**
 * made by myself
 * 暴力法：
 * 双重循环遍历出每一种情况，选中面积最大的
 */
var maxArea = function(height) {
    let res = 0;
    
    for(let i = 0; i < height.length - 1; i++) {
        for(let j = i + 1; j < height.length; j++) {
            let h = Math.min(height[i], height[j]);
            let w = j - i;
            if(res < h * w) res = h * w;
        }
    }

    return res;
};

/**
 * made by myself
 * 暴力法：
 * 双重循环遍历出每一种情况，选中面积最大的
 */
var maxArea = function(height) {
    let res = 0;
    
    for(let i = 0; i < height.length - 1; i++) {
        for(let j = i + 1; j < height.length; j++) {
            let h = Math.min(height[i], height[j]);
            let w = j - i;
            if(res < h * w) res = h * w;
        }
    }

    return res;
};

/**
 * made by others
 * 双指针法，一个从头开始，一个从尾开始
 */
var maxArea = function(height) {
    let res = 0;
    let l = 0, r = height.length - 1;
    
    while(l < r) {
        let cur = Math.min(height[l], height[r]) * (r - l);
        res = res < cur ? cur : res;

        if(height[l] < height[r]) l++;
        else r--;
    }
    
    return res;
};