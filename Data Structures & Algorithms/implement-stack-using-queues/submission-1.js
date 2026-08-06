class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue2.push(x);
        while (this.queue1.length > 0) {
            let removed = this.queue1.shift();
            this.queue2.push(removed);
        } 
        while (this.queue2.length > 0) {
            let removed = this.queue2.shift();
            this.queue1.push(removed);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        let popped = this.queue1.shift();
        return popped;
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue1[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
