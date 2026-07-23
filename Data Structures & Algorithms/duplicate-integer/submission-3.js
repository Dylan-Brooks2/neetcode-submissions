class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       /*
       seen = new Set()
       for 0 -> nums.length:
            if seen.has(nums[i]):
                return true
            else:
                seen.add(nums[i])
        return false
        */

        let seen = new Set();
        
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true;
            } else {
                seen.add(nums[i]);
            }
        }
        return false;
    }
}
