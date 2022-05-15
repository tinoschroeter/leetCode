/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    
    const counter = {};
    
    for(let val of nums) {
        counter[val] ? counter[val] += 1 : counter[val] = 1;
    }
    
    for(let val of nums) {
        
        if(counter[val] >= 2) return true;
    }
    
    return false;
};