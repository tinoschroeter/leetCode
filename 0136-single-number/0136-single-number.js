/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    const map = {}
    
    nums.forEach(item => {
        map[item] ? map[item] += 1 : map[item] = 1
    });
    
    for(let item of nums) {
        if(map[item] === 1) return item;
    }
};