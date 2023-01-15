/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const map = {};
    
    for(let val of nums) {
        map[val] ? map[val] += 1 : map[val] = 1;
    }
    
    const maxStack = Object.keys(map).sort((a, b) => map[a] - map[b]);
    
    const result = [];
    
    for(let i = 0; i<k; i++) {
        result.push(maxStack.pop());
    }
    
    return result;
};