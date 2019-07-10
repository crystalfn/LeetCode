/**
 * Description:
 * Given a string, 
 * find the length of the longest substring without repeating characters.
 * 
 * Example:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

/**
 * made by myself
 * 暴力法：遍历字符串
 * 以第一个字符为起点，找到以它为首的最长无重复的字符串，保存长度
 * 找到最大的长度返回，如果该长度比后面剩下字符的长度还要长，直接返回
 */
var lengthOfLongestSubstring = function(s) {
    if(s === '') return 0;
    let longest = 0;
    let len = s.length;
    let curArr = [];
    for(let i = 0; i < len; i++) {
        curArr = [];
        for(let j = i; j < len; j++) {
            if(curArr.indexOf(s[j]) === -1) {
                curArr.push(s[j]);
            } else {
                break;
            }
        }
        if(longest < curArr.length) longest = curArr.length;
        if(longest === len - i) return longest;
    }
    return longest;
};

/**
 * made by others
 * 滑动窗口的思想：
 * 两个指针分别指向滑动窗口的头和尾
 * 移动右指针，如果右指针指向的值在滑动窗口内有相同的值，则移动左指针至相同值的后一位
 * s.slice(left, right):就是滑动窗口
 * left += index + 1; 如果有相同的值，左指针需要在原来位置的基础上，左移 index + 1
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if(len <= 1) return len;
    let left = 0, res = 0;
    for(let right = left; right < len; right ++) {
        let index = s.slice(left, right).indexOf(s[right]);
        if(index === -1) {
            res = Math.max(res, right - left + 1);
        } else {
            left += index + 1;
        }
    }
    return res;
};