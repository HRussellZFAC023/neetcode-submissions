class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number) {

        for (let i = 0; i < nums.length; i++) {
            const numToFind = target - nums[i];
            const j = nums.indexOf(numToFind, i + 1);
            if (j != -1) return [i, j]

        }

    }
}
