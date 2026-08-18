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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwoLists(a, b) {
            let dummy = new ListNode();
            let tail = dummy;

            while (a !== null && b !== null) {
                if (a.val > b.val) {
                    tail.next = b;
                    tail = b;
                    b = b.next;
                } else {
                    tail.next = a;
                    tail = a;
                    a = a.next;
                }
            }

            if (a !== null) {
                tail.next = a;
            } else {
                tail.next = b;
            }
            return dummy.next;
        }
    mergeKLists(lists) {
        /**
        mergeTwoLists(a, b):
            dummy = new ListNode()
            tail = dummy
            while a !== null && b !== null:
                if a.val > b.val:
                    tail.next = b
                    tail = b
                    b = b.next
                else:
                    tail.next = a
                    tail = a
                    a = a.next
            if a !== null:
                tail.next = a
            else:
                tail.next = b
            return dummy.next
        
        if lists.length <= 0:
            return null
            
        result = lists[0]
        for i = 1 to lists.length:
            newResult = mergeTwoLists(result, lists[i])
            result = newResult
        return result
         */

        if (lists.length <= 0) {
            return null;
        }

        while (lists.length > 1) {
            let nextRound = [];
            for (let i = 0; i < lists.length; i += 2) {
                if ((i + 1) < lists.length) {
                    let merged = this.mergeTwoLists(lists[i], lists[i + 1]);
                    nextRound.push(merged);
                } else {
                    nextRound.push(lists[i]);
                }
            }
            lists = nextRound;
        }
        return lists[0];
    }
}
