/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counter = {}
    
    for(let i = 0; i<nums.length; i++) {    
        if(counter[nums[i]]) {
            counter[nums[i]] += 1;
        } else {
            counter[nums[i]] = 1;
        }
    }
    
    return Object.keys(counter).sort((a, b) => counter[b] - counter[a])[0];
};