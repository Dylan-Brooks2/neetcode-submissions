class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        /*
        for i = 0 / i < arr.length:
            biggest = 0;
            for j = i + 1 / j < arr.length:
                if arr[j] > biggest:
                    biggest = arr[j]
            arr[i] = biggest
        arr[arr.length - 1] = -1
        return arr
         */ 
        let maxRight = -1;
        for (let i = arr.length - 1; i >= 0; i--) {
            let temp = arr[i];
            arr[i] = maxRight;
            if (temp > maxRight) {
                maxRight = temp
            }
        }
        return arr;
    }
}
