class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /*
        resultArr = []
        loop i -> nums.length:
            left = i + 1
            right = nums.length - 1
            while left < right:
                sum = nums[i] + nums[left] + nums[right];
                if (sum === 0):
                    resultArr.push( [nums[left], nums[i], nums[right]] )
                    left++
                    right--
                else if (sum < 0):
                    left++
                else if (sum > 0):
                    right--
        return resultArr
         */
        let resultArr = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue; // skip duplicate first
            }
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                
                if (sum === 0) {
                    resultArr.push([nums[left], nums[i], nums[right]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return resultArr;
    }
}
