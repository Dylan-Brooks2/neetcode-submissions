/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        /*
        dummy = new Node()
        tail = dummy
        l1 = list1
        l2 = list2

        while l1 && l2 !== null:
            if l1.val < l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
            tail = tail.next
        
        if l1 !== null:
            tail.next = l1
        else:
            tail.next = l2

        return dummy.next
         */

        let dummy = new ListNode();
        let tail = dummy;
        let l1 = list1;
        let l2 = list2;

        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        if (l1 !== null) {
            tail.next = l1;
        } else {
            tail.next = l2;
        }

        return dummy.next;
    }
}
