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
     * @return {boolean}
     */
    height(node) {
        if (node === null) {
            return -1;
        }
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }
    isBalanced(root) {
       if (root === null) {
            return true;
       }
       let leftHeight = this.height(root.left);
       let rightHeight = this.height(root.right);

       
        let thisNodeOk = Math.abs(leftHeight - rightHeight) <= 1;
        let leftOk = this.isBalanced(root.left);
        let rightOk = this.isBalanced(root.right);

        return thisNodeOk && leftOk && rightOk;
    }

}
