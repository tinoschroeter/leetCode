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
const reverseList = (head) => {
    
    let curr = head
    let prev = null
    
    while(curr) {
        
        const nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    
    return prev;
};