/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    const num1 = [...new Set(nums1)];
    const num2 = [...new Set(nums2)];
    
    const arr = [...num1, ...num2];
    const counter = {};
    
    const result = [];
    
    arr.map(item => {
        
        if(counter[item]) {
            counter[item] += 1
            
            if(counter[item] === 2) result.push(item);
        } else {
            counter[item] = 1;
        }
    });
    
    return result;
};