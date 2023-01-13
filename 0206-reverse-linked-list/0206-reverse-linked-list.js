/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  
    
    let prew = null
    let node = head
    let next = null
    
    while(node) {
        
        next = node.next
        node.next = prew
        prew = node
        node = next
    }
    
    return prew;
};