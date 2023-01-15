/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    let max = 0;
    
    const dfs = (node, count) => {
        if(!node) return 
        
        count++
        max = Math.max(max, count);
        
        node.children.forEach(n => dfs(n, count));
    };
    
    dfs(root, 0)
    return max;
};