/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
       
    const map = {};
    let max = 0;
    
    for(let val of nums) {
        if(!map[val]) {
            map[val] = true;
        }
    }
    
    for(let i = 0; i<nums.length; i++) {

        let tmp = 0;
        if(!map[nums[i] - 1]) {
            for(let j = 0; j<nums.length; j++) {
                if(map[nums[i] + j]) {
                    max = Math.max(max, j+1);
                } else {
                    break
                }
            }
        }
    }
    
    return max;
};