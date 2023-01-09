/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    let node = head;
    const values = []
    
    while(node) {
        values.push(node.val)
        node = node.next
    }
    
    let c = 1, l = 0, r = values.length -1;
    node = head;
    
    while(l<=r) {
        if(c % 2 === 1) {
            node.val = values[l]
            l++
        } else {
            node.val = values[r]
            r--
        }
        
        c++
        node = node.next;
    }
    
    return head
};