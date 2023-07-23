/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    
    const result = [];
    
    for(let val in arr) {
        
        result.push(fn(arr[val], Number(val)))
    }
    
    return result;
};