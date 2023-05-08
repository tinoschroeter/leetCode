/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    const counter = {};
    
    nums.forEach(item => counter[item] ? counter[item] += 1 : counter[item] = 1);
    
    
    const result = Object.keys(counter).filter(item => {
        if(counter[item] > nums.length / 3) {
            return item
        }
    })
    
    return result;
};