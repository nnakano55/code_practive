// https://leetcode.com/problems/merge-two-sorted-lists/
// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 1->2->4
 * 
 * 1->3->4 
 * 
 * 
 * 
 * Output: 1->1->2->3->4->4
 * 
 * 
 * 
 */




/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let ret_val = new ListNode(null, null);
    let loop_val = ret_val;
    if(!l1 && !l2)
      return null;
      
     while(l1 && l2)
     {
        
        if(l1.val < l2.val)
        {
          loop_val.val = l1.val;
          l1 = l1.next;
        }
        else 
        {
          loop_val.val = l2.val;
          l2 = l2.next;
        }
        loop_val.next = new ListNode(null,null);
        loop_val = loop_val.next;
     }
     if(l1)
     {
      loop_val.val = l1.val;
      loop_val.next = l1.next;
     }
     if(l2)
     {
      loop_val.val = l2.val;
      loop_val.next = l2.next;
     }
    return ret_val;
};
















