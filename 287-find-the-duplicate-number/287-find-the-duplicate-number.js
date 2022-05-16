/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
    
    const counter = new Map();
    
    for(let val of nums) {
        
        if(counter.has(val)) {
           return val; 
        } else {
            counter.set(val, true);
        }
    }
};