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
var middleNode = function(head) {
    
    const arr = []
    let node = head;
    let middle = head;
    
    while(node) {
        
        arr.push(node.val);
        node = node.next
    }
    
    const stop = Math.floor(arr.length / 2);
    
    
    for(let i = 0; i<stop; i++) {
        
        middle = middle.next;
    }
    
    return middle;
    
};