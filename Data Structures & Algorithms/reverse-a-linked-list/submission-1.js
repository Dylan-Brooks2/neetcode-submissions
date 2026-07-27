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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        /*
        prev = null
        curr = head

        while curr !== null:
            nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = prev
         */

        let prev = null;
        let curr = head;

        while (curr !== null) {
            let nextNode = curr.next;
            curr.next = prev
            prev = curr;
            curr = nextNode;
        }

        return prev;
    }
}
