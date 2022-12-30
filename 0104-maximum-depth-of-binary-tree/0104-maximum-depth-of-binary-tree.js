/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    
    const dfs = (node, count) => {
        if(!node) return
    
        count++
        max = Math.max(max, count);
        if(node.left) dfs(node.left, count);
        if(node.right) dfs(node.right, count);
    }
    
    dfs(root,0)
    return max;
};