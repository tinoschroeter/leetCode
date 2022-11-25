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
        
        const left = node.left;
        const right = node.right;
           
         if(left) dfs(left, count);
         if(right) dfs(right, count);
    }
    
    dfs(root, 0);
    
    
    return max;
};