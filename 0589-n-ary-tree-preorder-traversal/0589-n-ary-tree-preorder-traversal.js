/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    if(!root) return [];
    const result = [];
    
    const dfs = node => {
        
        if(!node) return
        
        result.push(node.val);
        
        for(let item of node.children) {
            dfs(item)
        }
    }
    
    dfs(root);
    
    return result;
};