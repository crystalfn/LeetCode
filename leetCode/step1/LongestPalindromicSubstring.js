/**
 * 最长回文子串
 * Description:
 * Given a string s, find the longest palindromic substring in s. 
 * You may assume that the maximum length of s is 1000.
 * 
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 */

/**
 * made by myself
 * 
 * (前期看了一下相关标签，里面提到了动态规划，
 * 然后又去看了一下别人写的动态规划的博客，里面提到了爬梯子问题、所有路径问题、最小路径和问题，
 * 根据看到的内容，结合之前做的题目中用到滑动窗口、双指针，得到解决这道题的方法)
 * 
 * 动态规划的思想：将大问题化为小问题，通过解决小问题从而解决大问题
 * 如果一个字符串 s 是回文子串，那么 s.slice(1, s.length - 1) 一定也是回文子串
 * 一步一步倒退，从最回文子串的中心找起，运用双指针，依次向两端扩展
 * 由于回文子串长度是奇是偶对找回文子串有影响，所以这里进行了分类讨论
 */
var longestPalindrome = function(s) {
    let res = '';
    let len = s.length;
    
    // 回文子串的长度是奇数
    for(let i = 0; i < len; i++) {
        let left = i, right = i;
        let curStr = '';
        while(left >= 0 && right < len) {
            if(s[left] === s[right]) {
                curStr = s.slice(left, right + 1);
                left--;
                right++;
            } else {
                break;
            }
        }
        if(curStr.length > res.length) res = curStr;
    }
    // 回文子串的长度是偶数
    for(let i = 0; i < len - 1; i++) {
        let left = i, right = i + 1;
        let curStr = '';
        while(left >= 0 && right < len) {
            if(s[left] === s[right]) {
                curStr = s.slice(left, right + 1);
                left--;
                right++;
            } else {
                break;
            }
        }
        if(curStr.length > res.length) res = curStr;
    }
    return res;
};

/**
 * made by others
 * 中心扩展算法
 * 观察到回文中心的两侧互为镜像
 * 因此，回文可以从它的中心展开，并且只有 2n − 1 个这样的中心
 * 2n - 1: 所含字母数为偶数的回文的中心可以处于两字母之间
 */
var longestPalindrome = function(s) {
    let len = s.length;
    if(len < 2) return s;
    
    let left = 0, right = 0;
    for(let i = 0; i < len; i++) {
        // 调用判断回文子串的函数，分奇偶
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i+1);
        let curLen = Math.max(odd, even);
        
        /**
         * 当返回的回文子串长度大于当前存储的回文子串长度时，进行替换
         * 如果此时 i = 1, curLen = 4, right - left = 1;
         * 那么要以 i 为中心扩展出回文子串的左指针和右指针
         */
        if(curLen > right - left) {
            left = i - parseInt((curLen - 1) / 2);
            right = i + parseInt(curLen / 2);
        }
    }
    
    return s.substring(left, right + 1);
};

function expandAroundCenter(s, left, right) {
    while(left > -1 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    /**
     * 返回回文子串长度
     * 原本长度应是 right - left + 1, 
     * 由于 left--; right++; 长度应为 right - left - 1;
     */
    return right - left - 1;
}