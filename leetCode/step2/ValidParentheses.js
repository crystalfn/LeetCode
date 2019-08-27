/**
 * 有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串。

  * 示例 1:
        输入: "()"
        输出: true
  * 示例 2:
        输入: "()[]{}"
        输出: true
  * 示例 3:
        输入: "(]"
        输出: false
 */

 /**
  * 利用栈来完成
  */
 var isValid = function(s) {
    let len = s.length;
    if((len % 2) === 1 || s[0] === ')' || s[0] === ']' || s[0] === '}') {
        return false;
    } else {
        let stack = [];
        for(let i = 0; i < len; i++) {
            if(s[i] === "(" || s[i] === '[' || s[i] === '{') {
                stack.push(s[i]);
            } else {
                let cur = stack.pop();
                if(cur === '(' && s[i] === ')') continue;
                else if(cur === '[' && s[i] === ']') continue;
                else if(cur === '{' && s[i] === '}') continue;
                else return false;
            }
        }
        if(stack.length === 0) return true;
        else return false;
    }
};