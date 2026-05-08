class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number) {

        const seen = {};
        for (let i = 0; i < nums.length; i++) {
            const numToFind = target - nums[i];
            if (seen[numToFind] != undefined){
                return [i , seen[numToFind]]
            }
            seen[nums[i]] = i 
        }

    }
}
