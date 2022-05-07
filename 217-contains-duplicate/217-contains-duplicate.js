/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const obj = {};
    
    for(let i = 0; i<nums.length; i++) {
        const value = nums[i]
        if(!obj[value]) {
            obj[value] = true;
        } else {
            return true   
        }
    }
    return false
};