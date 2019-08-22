/**
 * 对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

/**
 * 递归
 * 利用中序遍历递归的思想
 */
function help(node1, node2) {
    if(node1 === null && node2 === null) return true;
    else if(node1 === null || node2 === null) return false;
    else if(node1.val !== node2.val) return false;
    else return help(node1.left, node2.right) && help(node1.right, node2.left);
}
var isSymmetric = function(root) {
    if(root === null) return true;
    else if(root.left === null && root.right !== null) return false;
    else if(root.right === null && root.left !== null) return false;
    else return help(root.left, root.right);
};

/**
 * 迭代
 * 利用队列来完成
 */
var isSymmetric = function(root) {
    if(root === null) return true;
    else{
        let link1 = [];
        let link2 = [];
        
        link1.push(root.left);
        link2.push(root.right);

        while(link1.length > 0 || link2.length > 0) {
            let cur1 = link1.shift();
            let cur2 = link2.shift();

            if(cur1 === null && cur2 === null) continue;
            if(cur1 === null || cur2 === null) return false;
            if(cur1.val !== cur2.val) return false;

            link1.push(cur1.left);
            link1.push(cur1.right);
            link2.push(cur2.right);
            link2.push(cur2.left);
        }

        return true;
    }
};