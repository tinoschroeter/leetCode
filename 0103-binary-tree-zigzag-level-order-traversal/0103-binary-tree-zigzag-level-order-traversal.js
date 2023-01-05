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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
    
    if(!root) return []
    
    const queue = [root];
    const result = []
    let count = 1;
    
    while(queue.length) {
        
        if(count % 2 === 0) {
            result.push(queue.map(item => item.val).reverse())
        } else {
            result.push(queue.map(item => item.val))
        }
        count++
        
        let len = queue.length;
        
        while(len--) {
            const node = queue.shift()
            
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    
    return result
};