/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let queue = [];
        let result = [];
        if (root !== null) {
            queue.push(root);
        }

        while (queue.length > 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let curr = queue.shift();
                if (i === size - 1) {
                    result.push(curr.val);
                }
                if (curr.left !== null) {
                    queue.push(curr.left);
                }
                if (curr.right !== null) {
                    queue.push(curr.right);
                }
            }
        }
        return result
    }
}
