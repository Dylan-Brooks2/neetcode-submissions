class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /*
        
        left = 0 
        right = s.length - 1
        alphanumeric = /[a-z0-9]/i

        while (left < right):
            while alphanumeric.test(s[left]) === false:
                left++
            while alphanumeric.test(s[right]) === false:
                right--
            if s[left].toLowerCase() === s[right].toLowerCase():
                left++
                right--
            else:
                return false
        return true
         */
        let left = 0;
        let right = s.length - 1;
        let alphanumeric = /[a-z0-9]/i;

        while (left < right) {
            while (left < s.length && alphanumeric.test(s[left]) === false) {
                left++;
            }
            while ( right >= 0 && alphanumeric.test(s[right]) === false) {
                right--;
            }
            if (left >= right) {
                break;
            }
            if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }
}
