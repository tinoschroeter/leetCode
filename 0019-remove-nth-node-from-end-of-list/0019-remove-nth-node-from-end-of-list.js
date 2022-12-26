/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
      
    const arr = [];
    let node = head;
    
    while(node) {
        arr.push(node.val)
        node = node.next;
    }
    
    arr.splice(arr.length - n, 1);
    
    if(arr.length === 0) return head.next
    
    node = head;
    
    for(let i = 0; i<arr.length; i++) {
        node.val = arr[i];
        if(i === arr.length - 1) {
            node.next = null
        }
        node = node.next
    }
    
    return head
};


