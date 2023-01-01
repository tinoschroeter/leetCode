/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
      
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next || fast.next
    }
    
    const stack = [];
    
    while(slow) {
        stack.push(slow.val);
        slow = slow.next
    }
    
    let node = head;
    
    while(stack.length) {
        
        if(node.val === stack.pop()) {
            node = node.next;
        } else {
            return false
        }
    }
    
    return true;
};