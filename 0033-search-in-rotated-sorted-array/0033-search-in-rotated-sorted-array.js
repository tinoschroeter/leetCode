/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
       
    let count = 0;

    for(let val of nums) {
        if(val === target) return count
        count++
    }
    
    return -1
}