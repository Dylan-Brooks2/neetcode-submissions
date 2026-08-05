class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     * 0 - circular -- 1 - square
     */
    countStudents(students, sandwiches) {
        /*
            queue = [...students] (FIFO)
            stack = [...sandwiches] (LIFO)
            skipCount = 0

            while (queue.length !== 0 && skipCount < queue.length):
                if (queue[0] === stack[0]):
                    queue.shift()
                    stack.shift()
                    skipCount = 0
                else:
                    skipCount++
                    skippedStudent = queue.shift()
                      queue.push(skippedStudent)                   
         */

        let queue = [...students];
        let stack = [...sandwiches];
        let skipCount = 0;

        while (queue.length !== 0 && skipCount < queue.length) {
            if (queue[0] === stack[0]) {
                queue.shift();
                stack.shift();
                skipCount = 0;
            } else {
                skipCount++;
                let skippedStudent = queue.shift();
                queue.push(skippedStudent);
            }
        }
        return queue.length;
    }
}
