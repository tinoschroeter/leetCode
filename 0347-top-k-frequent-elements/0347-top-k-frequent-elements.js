/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const counter = {};
    
    nums.forEach(item => {
        counter[item] ? counter[item] += 1 : counter[item] = 1;
    });
    
    const result = [];
    
    const set = [...new Set(nums)];
    
    set.sort((a, b) => counter[a] - counter[b]);
    
    for(let i = 0; i<k; i++) {
        result.push(set.pop())
    }
    
    return result;
};