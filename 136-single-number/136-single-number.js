/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  
    const counter = {};
    
    
    for(let val of nums) {
                
        counter[val] ? counter[val] += 1 : counter[val] = 1;
                
    }
    
    for(let val of Object.keys(counter)) {
        
        if(counter[val] === 1) return val;
    }
};