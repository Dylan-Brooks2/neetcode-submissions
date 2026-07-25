class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        /*
        pair = [] (stack)
        pairMap = new Map([
        [']', '['],
        [')', '('],
        ['}', '{']
        ])

        for each char of s:
            if char === "[", "(" or "{":
                pair.push(char)
            else if char === "]", ")" or "}":
                if pair.length === 0:
                    return false; 
                top = pair.pop()
                if top !== pairMap.get(char):
                    return false
            else:
                return false
        return pair.length === 0   
         */
        let pair = [];
        let pairMap = new Map([
            [']', '['],
            [')', '('],
            ['}', '{']
        ]);

        for (let char of s) {
            if (char === "[" || char === "(" || char === "{") {
                pair.push(char);
            } else if (char === "]" || char === ")" || char === "}") {
                if (pair.length === 0) {
                    return false;
                }
                let top = pair.pop();
                if (top !== pairMap.get(char)) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return pair.length === 0;
    }
}
