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


    let count = 0;
    
    const dfs = (node, c) => {
        
        if(!node) return
        c++
        
        count = Math.max(c, count)
        
        if(node.left) dfs(node.left, c)
        if(node.right) dfs(node.right, c)
    }
    
    
    dfs(root, 0)
    
    return count
};