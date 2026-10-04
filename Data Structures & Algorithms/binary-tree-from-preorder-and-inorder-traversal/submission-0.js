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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let indexMap = new Map();

        for (let i = 0; i < inorder.length; i++) {
            indexMap.set(inorder[i], i);
        }

        let preIndex = 0;

        const dfs = (l, r) => {
            if (l > r) {
                return null;
            }

            let rootVal = preorder[preIndex];
            preIndex = preIndex + 1;
            let root = new TreeNode(rootVal);

            let mid = indexMap.get(rootVal);
            
            root.left = dfs(l, mid - 1);
            root.right = dfs(mid + 1, r);

            return root;
        }
        return dfs(0, inorder.length - 1);
    }
}
