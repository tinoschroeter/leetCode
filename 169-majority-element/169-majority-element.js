/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {   
    
    const count = {};
    let maxCount = 0;
    let result = nums[0];
    
    for(let i = 0; i<nums.length; i++) {
        const value = nums[i];
        if(count[value]) {
          count[value] += 1   
          if(maxCount < count[value]) {
              maxCount = count[value];
              result = value
          }            
        } else {
          count[value] = 1;
        } 
    }   
    return result
};