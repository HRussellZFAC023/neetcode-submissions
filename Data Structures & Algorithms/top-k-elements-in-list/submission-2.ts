class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number) {

        const countMap: { [key: number]: number } = {};
        
        for(let i = 0; i < nums.length; i++){

            const elem = nums[i];


            if(countMap[elem] !== undefined){
                countMap[elem] = countMap[elem] + 1;    
            } else {
                countMap[elem] = 1;
            }
            
        }  



        const getLargest = () => {
            let largest = -1;
            let item;
            for(let num in countMap){
                
                if (countMap[num] !== undefined && countMap[num] >= largest) {
                    largest = countMap[num];
                    item = num;
                }
            
            }
            return item;

        }

        const res = [];
        for (let i = 0; i<k; i++){
            const largest = getLargest();
            res.push(Number(largest));
            delete countMap[largest];
        }

        return res;

        

    }
}
