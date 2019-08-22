/**
 * 验证二叉搜索树
 * Validate Binary Search Tree
 * 
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 假设一个二叉搜索树具有如下特征：
    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。

 * 输入:
        5
       / \
      1   4
         / \
        3   6
    输出: false
    解释: 输入为: [5,1,4,null,null,3,6]。
         根节点的值为 5 ，但是其右子节点值为 4 。
 */

/**
 * 二叉搜索树的中序遍历为递增的数组
 * 利用中序遍历，加上保存上一个值临时变量，比较
 */
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
var isValidBST = function(root) {
   let cur = root;
   let stack = [];
   let pre = new TreeNode();
   
   while(cur !== null || stack.length > 0) {
       while(cur !== null) {
           stack.push(cur);
           cur = cur.left;
       }
       cur = stack.pop();
       if(pre !== null && cur.val <= pre.val) return false;
       pre = cur;
       cur = cur.right;
   }
   return true;
};

/**
 * 递归
 * 没有中序遍历的效果好
 */
function help(node, min, max) {
   if(node === null) return true;

   if(min !== null && node.val <= min) return false;
   if(max !== null && node.val >= max) return false;
   return help(node.left, min, node.val) && help(node.right, node.val, max);
}
var isValidBST = function(root) {
   return help(root, null, null);
};