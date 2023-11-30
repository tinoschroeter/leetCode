/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    
    const res = [];
    
    
    for(let i = 0; i<arr.length; i++) {
        
        const val = arr[i]
        
        if(fn(val, i)) res.push(val) 
    }
    
    return res;
};