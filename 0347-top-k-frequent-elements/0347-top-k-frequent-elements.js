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
    
    const result = Object.keys(map).sort((a, b) => {
        
        return (map[a] < map[b]) ? 1 : -1;
    })
    
    console.log(map)
    console.log(result)
    
    return result.slice(0, k)
};