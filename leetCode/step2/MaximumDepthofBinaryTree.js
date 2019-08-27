/**
 * Maximum Depth of Binary Tree
 * 二叉树的最大深度
 */

/**
 * 递归
 */
var maxDepth = function(root) {
    if(root === null) return 0;
    else {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
};