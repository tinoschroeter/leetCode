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
        
    
    if(!root) return [];

    let count = 1;
    const queue = [root];
    const result = [];
    
    while(queue.length) {
        let len = queue.length;
       
        if(count % 2 === 0) { 
            result.push(queue.map(item => item.val).reverse());
        } else {
            result.push(queue.map(item => item.val));
        }
        
        count++
        while(len--) {
          const node = queue.shift();     
            
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right)
        }
        
    }
    
    return result;
};