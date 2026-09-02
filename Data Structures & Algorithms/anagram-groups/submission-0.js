class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /*
        strMap = new Map()
        for i = 0; i < strs.length; i++ {
            count = new Array(26).fill(0)
            for char in strs[i] {
                index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                count[index]++
            }
            key = count.toString()

            if strMap.has(key) {
                strMap.get(key).push(strs[i])
            } else {
                strMap.set(key, [strs[i]])
            }
        }
        return Array.from(strMap.values())
         */
        let strMap = new Map();
        for (let i = 0; i < strs.length; i++) {
            let count = new Array(26).fill(0);
            for (let char of strs[i]) {
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0); // ASCII code
                count[index]++;
            }
            let key = count.toString();

            if (strMap.has(key)) {
                strMap.get(key).push([strs[i]]);
            } else {
                strMap.set(key, [strs[i]]);
            }
        }
        return Array.from(strMap.values());
    }
}
