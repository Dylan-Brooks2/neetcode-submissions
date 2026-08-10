class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};

        const climb = (n) => {
            if (n <= 2) {
                return n;
            }

            if (memo[n]) {
                return memo[n];
            }

            memo[n] = climb(n - 1) + climb(n - 2);

            return memo[n];
        };

        return climb(n);
    }
}