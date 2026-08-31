class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    canFinish(piles, k, h) {
        /*
        totalHours = 0
        for loop i in piles {
            total += Math.ceil(piles[i] / k)
        }
        return totalHours <= h
        */
        let totalHours = 0;
        for (let i = 0; i < piles.length; i++) {
            totalHours += Math.ceil(piles[i] / k);
        }
        return totalHours <= h;
    }
    minEatingSpeed(piles, h) {
        /*
        left = 1
        right = Math.max(...piles)
        k = 1

        while left <= right {
            mid = math.floor((left + right) / 2)
            
            if canFinish(piles, mid, h) === true {
                k = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return k
        */
        let left = 1;
        let right = Math.max(...piles);
        let k;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (this.canFinish(piles, mid, h) === true) {
                k = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return k;
    }
}
