/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    
    const counter = {};
    
    for(let val of nums) {
        counter[val] ? counter[val] += 1 : counter[val] = 1;
    };
    
    const result = Object.entries(counter)
    .sort((a, b) => b[1] - a[1])
    .map(a => a[0])
    
    return result.slice(0, k);
};