class Node {
    constructor(url) {
        this.url = url;
        this.next = null;
        this.prev = null;
    }
}
class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.curr = new Node(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let visitURL = new Node(url);
        this.curr.next = visitURL;
        visitURL.prev = this.curr;
        this.curr = visitURL;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        let count = 0;

        while (count < steps && this.curr.prev !== null) {
            this.curr = this.curr.prev;
            count++;
        }
        return this.curr.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let count = 0;

        while (count < steps && this.curr.next !== null) {
            this.curr = this.curr.next;
            count++;
        }

        return this.curr.url;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
