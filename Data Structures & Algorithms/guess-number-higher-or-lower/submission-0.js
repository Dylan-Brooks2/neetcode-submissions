/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let low = 1;
        let high = n;
        let mid;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);

            if (guess(mid) > 0) { // guess is lower
                low = mid + 1;
            } else if (guess(mid) < 0) { // guess is higher
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
