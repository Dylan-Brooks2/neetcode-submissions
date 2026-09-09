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
    inorderTraversal(root) {
        let nums = [];
        function helper(root){
            if (root === null) {
                return;
            } else {
                helper(root.left);
                nums.push(root.val);
                helper(root.right);
            }
        }
        helper(root);
        return nums;
    }
}
