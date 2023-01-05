/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    const queue = [root];
    const result = [];
    
    
    while(queue.length) {
        
        result.push(queue.map(item => item.val));
        
        let len = queue.length;
        
        while(len--) {
            const node = queue.shift();
          
            for(let item of node.children) {
                queue.push(item);
            }
        }
    }
    
    return result;
};