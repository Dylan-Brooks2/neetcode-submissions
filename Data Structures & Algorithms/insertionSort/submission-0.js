/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        /*
        results = []
        loop i = 0 && pairs.length:
            current = pairs[i]
            j = i - i
            while (j in array && pair @ j > current key):
                copy pair j 1 slot right
                move j 1 slot left
            place curr -> j + 1
            append copy of arr -> result 
        return results
         */
        const results = [];
        for (let i = 0; i < pairs.length; i++) {
            const current = pairs[i];
            let j = i - 1;
            while (j >= 0 && pairs[j].key > current.key) {
                pairs[j + 1] = pairs[j];
                j--;
            }
            pairs[j + 1] = current;
            results.push([...pairs]);
        }
        return results;
    }
}
