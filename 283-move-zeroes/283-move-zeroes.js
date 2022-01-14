/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let jumps = 0
    let i = 0
    
    while(jumps < nums.length) {
        if(nums[i] === 0) {
            move(nums, i)
        } else {
            i++    
        }
        
        jumps++
    }
    
    function move(arr, idx) {
        arr.push(arr.splice(idx, 1))
    }
};