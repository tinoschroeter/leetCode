/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const counter = {};
    const result = [];
    
    for(let i = 0; i<nums.length; i++) {
        
        const val = nums[i];
        
        counter[val] ? counter[val] += 1 : counter[val] = 1;
    }
    
    
    const mFreq = Object.keys(counter).sort((a, b) => counter[a] - counter[b]);
    
    
    for(let i = mFreq.length - 1; mFreq.length -k <= i; i--) result.push(mFreq[i])
    
    return result;
};