class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current === null) {
                return -1;
            }
            current = current.next;
        }
        if (current === null) {
            return -1;
        }
        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (this.head === null) {
            return false;
        }
        if (index === 0) {
            this.head = this.head.next;
            return true;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
            if (current === null) {
                return false;
            }
        }
        if (current.next === null) {
            return false;
        }
        current.next = current.next.next;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}
