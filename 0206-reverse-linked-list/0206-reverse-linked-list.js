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
    
    
    let node = head
    let reverse = head;
    const stack = []
    
    while(node) {
        stack.push(node.val) 
        node = node.next
    }
    
    node = head
    while(node) {
        node.val = stack.pop()
        node = node.next;
    }
    
    return reverse;
};