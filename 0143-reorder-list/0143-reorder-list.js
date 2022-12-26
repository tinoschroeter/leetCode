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
        
    const arr = [];
    let node = head;
    
    while(node) {
        arr.push(node.val)
        node = node.next;
    }
    
    let count = 1;
    let left = 0;
    let right = arr.length - 1;
    
    node = head;
    
    while(left <= right) {
        if(count % 2 === 1) {
            node.val = arr[left]
            left++
        } else {
            node.val = arr[right]
            right--
        }
        
        count++
        node = node.next
    }
    
    return head;
};