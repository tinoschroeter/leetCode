/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    
    if(!root) return [];
    
    const arr = [];
    
    const dfs = (nodes, arr) => {
        
        for(let node of nodes.children) {
            dfs(node, arr)
             arr.push(node.val)
        }
    }
    
    dfs(root, arr)
    
    arr.push(root.val)
    return arr;
};