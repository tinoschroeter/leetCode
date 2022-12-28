/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   
    
    const map = {};
    
    for(let val of nums) 
        map[val] ? map[val] = false : map[val] = true
    
    console.log(map)
    
    for(let val in map) 
        if(map[val]) return val
}