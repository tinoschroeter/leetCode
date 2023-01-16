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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const res = [];
    
    const dfs = node => {
        if(!node) return 
        
        if(node.left) dfs(node.left);
        res.push(node.val);
        if(node.right) dfs(node.right);
    }
    
    dfs(root)

    let l = 0, r = res.length -1;
    
    while(l<r) {
        const val = res[l] + res[r];
        if(val === k)  return true;
        
        (k < val) ? r-- : l++
    }
    
    return false
};