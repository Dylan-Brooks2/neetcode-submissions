class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        for (let i = 1; i < nums.length; i++) {
            let j = i - 1;
            while (j >= 0 && nums[j + 1] < nums[j]) {
                let temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
                j--;
            }
        }
        return nums;
    }
}
