class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        /*
        result = []

        for point in points:
            distance = (point[0] * point[0]) + (point[1] * point[1])
            *==== if result list is more than limit ====*
            if result.length >= k {
                maxResIndex = 0
                maxResDis = 0
                for let i = 0, i < result.length; i++:
                    if result[i][0] > maxResDis:
                        maxResIndex = i
                        maxResDis = result[i][0]

                *=== if distance smaller than maxResDis ===*
               if distance < maxResDis{                                      
                    result.remove(maxResIndex)
                    result.push([distance, point])
                }
            } else {
                result.push([distance, point])
            }
        answer = []
        for let i = 0; i < result.length; i++:
            answer.push(result[i][1])

        return answer
         */
        let result = [];

        for (let point of points) {
            let distance = (point[0] * point[0]) + (point[1] * point[1]);

            if (result.length >= k) {
                let maxResIndex = 0;
                let maxResDis = 0;
                for (let i = 0; i < result.length; i++) {
                    if (result[i][0] > maxResDis) {
                        maxResIndex = i;
                        maxResDis = result[i][0];
                    }
                }
                if (distance < maxResDis) {
                    result.splice(maxResIndex, 1);
                    result.push([distance, point]);
                }
            } else {
                result.push([distance, point]);
            }
        }
        let answer = [];
        for (let i = 0; i < result.length; i++) {
            answer.push(result[i][1]);
        }
        return answer;
    }
}
