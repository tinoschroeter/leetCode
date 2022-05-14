/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    
    const counter = new Map();
    
    for(let i = 0; i<nums.length; i++) {
        
        const val = nums[i];
        const sub = target - val;
        
        if(counter.has(sub)) return [i, counter.get(sub)];
        
        counter.set(val, i);
    }
};