/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const counter = {}

    for(let val of nums) {
        counter[val] ? counter[val] += 1 : counter[val] = 1;
    }
    

    return Object.keys(counter).sort((a, b) => counter[b] - counter[a]).slice(0, k);
};