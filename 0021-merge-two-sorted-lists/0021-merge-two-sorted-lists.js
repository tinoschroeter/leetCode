/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    
    const a1 = [];
    while(list1) {
        a1.push(list1.val);
        list1 = list1.next
    }
    
    const a2 = [];
    while(list2) {
        a2.push(list2.val);
        list2 = list2.next
    }
    
    const s = [...a1, ...a2].sort((a,b) => a-b);
    
    let node = new ListNode(77);
    let head = node;
    
    for(let val of s) {
        node.next = new ListNode(val);
        node = node.next
    }
    
    
    return head.next
};