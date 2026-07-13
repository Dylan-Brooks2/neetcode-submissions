class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new Array(capacity);
    }
    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        return this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.array[this.size] = n;
        this.size = this.size + 1;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size = this.size - 1;
        return this.array[this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        let newArr = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.array[i];
        }
        this.array = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
