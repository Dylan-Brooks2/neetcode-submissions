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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let kvalues = [];

        function dfs(node) {
            if (node === null) {
                return;
            }
            dfs(node.left);
            kvalues.push(node.val);
            dfs(node.right);
        }

        dfs(root);
        return kvalues[k - 1];
    }
}
