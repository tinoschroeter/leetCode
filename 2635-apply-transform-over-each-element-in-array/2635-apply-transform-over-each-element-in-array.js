/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    const result = [];
    
    for(let i = 0; i<arr.length; i++) {
        const val = arr[i];
        
        result.push(fn(val, i));
    }
    
    return result;
};