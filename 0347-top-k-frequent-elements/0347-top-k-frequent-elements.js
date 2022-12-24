/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const map = {};
    for(let val of nums) map[val] ? map[val] += 1 : map[val] = 1;
    const sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
    
    return sorted.slice(0, k)
};