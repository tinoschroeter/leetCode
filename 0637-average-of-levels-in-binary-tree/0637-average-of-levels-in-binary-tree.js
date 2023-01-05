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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    
    if(!root) return [];
    
    const queue = [root];
    const result = []
    
    
    while(queue.length) {
        
        result.push(queue.reduce((acc, node) => acc + node.val, 0) / queue.length);
        
        let len = queue.length;
        
        while(len--) {
            const node = queue.shift()
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return result;
};