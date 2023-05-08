/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   
    const counter = {};
    
    nums.forEach(item => {
        counter[item] ? counter[item] += 1 : counter[item] = 1
    });
    
    let max = [0, 0];
    for(let i in counter) {
        if(counter[i] > max[1]) {
            max = [i, counter[i]];
        }
    }
    
    return max[0];
};