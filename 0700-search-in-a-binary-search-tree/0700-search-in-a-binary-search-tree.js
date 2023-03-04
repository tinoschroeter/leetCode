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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    
   if(!root) return null; 
   let node = root;
    
    while(node !== null) {
        
        if(node.val === val) {
            return node
        }
        if(node.val > val) {
            if(!node.left) return null
            node = node.left
        } else {
            if(!node.right) return null
            node = node.right
        }
    }
};