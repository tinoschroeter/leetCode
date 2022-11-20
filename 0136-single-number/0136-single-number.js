/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const counter = {}; 
    let result = null;
    
    nums.forEach(item => {
        counter[item] ? counter[item] += 1 : counter[item] = 1;
    })  

   Object.keys(counter).forEach(item => {
        if(counter[item] === 1) result = item;
    })  
    return result
};