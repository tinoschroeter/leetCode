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
    
    let head = new ListNode(77)
    let node = head;
    
    while(list1 && list2) {
     
        if(list1.val < list2.val) {
            head.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            head.next = new ListNode(list2.val)
            list2 = list2.next
        }
        head = head.next
        
    }
    
    if(list1) head.next = list1
    if(list2) head.next = list2
    
    return node.next;
};