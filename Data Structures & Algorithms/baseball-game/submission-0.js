class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        /*
            record = [] (stack)

            for (i = 0 -> operations.length):
                if (op[i] === '+'):
                    result = record[record.length - 1] + record[record.length - 2]
                    record.push (result)
                else if (op[i] === 'D'):
                    record.push(record[record.length - 1] * 2)
                else if (op[i] === 'C'):
                    record.pop()
                else:
                    record.push (parseInt(op[i]))
            
            return record.reduce((totalSum, curr) => totalSum + curr, 0)
         */

        let records = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === '+') {
                let result = records[records.length - 1] + records[records.length - 2];
                records.push(result);
            } else if (operations[i] === 'D') {
                records.push(records[records.length - 1] * 2);
            } else if (operations[i] === 'C') {
                records.pop();
            } else {
                records.push(parseInt(operations[i]));
            }
        }
        return records.reduce((totalSum, curr) => totalSum + curr, 0);
    }
}
