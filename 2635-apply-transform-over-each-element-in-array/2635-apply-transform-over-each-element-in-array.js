/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    let res = [];
    
    
    for(let i = 0; i<arr.length; i++) {
        const val = arr[i];
        
        res.push(fn(val, i));
    }
    
    return res;
};