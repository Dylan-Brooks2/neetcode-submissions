class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
} 

class MyLinkedList {
    constructor() {
        this.dummyHead = new ListNode();
        this.dummyTail = new ListNode();
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let start = this.dummyHead;

        for (let i = 0; i < index; i++) {
            start = start.next;
        }
        return start;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index >= this.size || index < 0) {
            return -1;
        }

        let prevNode = this.getPrev(index);

        return prevNode.next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let newNode = new ListNode(val);

        this.dummyHead.next.prev = newNode;
        newNode.next = this.dummyHead.next;
        newNode.prev = this.dummyHead;
        this.dummyHead.next = newNode;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let newNode = new ListNode(val);

        this.dummyTail.prev.next = newNode;
        newNode.prev = this.dummyTail.prev;
        newNode.next = this.dummyTail;
        this.dummyTail.prev = newNode;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            return;
        }

        let prevNode = this.getPrev(index);
        let nextNode = prevNode.next;
        let newNode = new ListNode(val);

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return;
        }

        let prevNode = this.getPrev(index);
        let nodeToDelete = prevNode.next;
        let nextNode = nodeToDelete.next;
        
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        
        this.size--;
        }
}
