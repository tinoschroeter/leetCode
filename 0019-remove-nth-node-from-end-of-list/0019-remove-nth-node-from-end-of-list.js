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

    const toArray = [];
    let node = head;
    
    while(node) {
        toArray.push(node.val)
        node = node.next
    } 
    
    toArray.splice(toArray.length - n, 1);
    
    node = new ListNode(77);
    let res = node
    
    toArray.forEach(item => {
        
        node.next = new ListNode(item)
        node = node.next;
    })
    
    return res.next;
};