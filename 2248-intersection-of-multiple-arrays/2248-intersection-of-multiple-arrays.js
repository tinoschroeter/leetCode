/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    
    const counter = {};
    const result = [];
    
    nums.map(items => {
        items.map(item => { 
            counter[item] ? counter[item] += 1 : counter[item] = 1
        });
    });
    
    Object.keys(counter).forEach(item => {
        if(counter[item] == nums.length) {
            result.push(item)
        }
    });
        
    return result;
};