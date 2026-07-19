class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        /*
        max = 0
        temp = 0
        for (i = 0; i < nums.length; i++)
            if nums[i] === 1:
                temp += 1
            else
                temp = 0
            if (temp > max):
                max = temp
        return max
         */
        let max = 0;
        let temp = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                temp += 1;
            } else {
                temp = 0;
            }
            if (temp > max) {
                max = temp;
            }
        }
        return max;
    }
}
