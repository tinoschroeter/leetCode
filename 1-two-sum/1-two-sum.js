/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const counter = {};   
    for(let i = 0; i<nums.length; i++) {
        const value = nums[i];
        const diff = target - value;
        
        if(counter.hasOwnProperty(value)) return [i, counter[value]];       
        counter[diff] = i
    }
};