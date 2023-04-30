/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const map = new Map();
    const result = [];
    
    nums.forEach((item, i) => {
        const diff = target - item;
        
        if(map.has(diff)) {
            result.push(map.get(diff));
            result.push(i);            
        } else {
            map.set(item, i);
        }
    })
    
    return result;
};