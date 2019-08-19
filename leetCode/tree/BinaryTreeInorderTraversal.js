/**
 * 中序遍历二叉树
 */

/**
 * 递归
 */
var inorderTraversal = function(root) {
    let res = [];
    inorder(root, res);
    return res;
};
function inorder(node, res) {
    if(node !== null) {
        if(node.left !== null) {
            inorder(node.left, res);
        }
        res.push(node.val);
        if(node.right !== null) {
            inorder(node.right, res);
        }
    }
}

/**
 * point
 * 迭代，利用栈来做
 */
var inorderTraversal = function(root) {
    let res = [];
    let cur = root;
    let stack = [];
    
    while(cur !== null || stack.length > 0) {
        while(cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    
    return res;
};