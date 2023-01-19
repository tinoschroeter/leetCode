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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    const result = [];
    const dfs = node => {
        if(!node) return 
        
        if(node.left) dfs(node.left);
        result.push(node.val)
        if(node.right) dfs(node.right);
    };
    
    dfs(root)
    
    for(let i = 0; i<result.length -1; i++) {
        if(result[i] >= result[i+1]) return false
    }
    
    return true
};