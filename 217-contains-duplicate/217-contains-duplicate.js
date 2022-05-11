/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const counter = {};
    
    for(let val of nums) {
        if(counter[val]) return true;
        
        counter[val] = true;
    }
    
    return false;
};