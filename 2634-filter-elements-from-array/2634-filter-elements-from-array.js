/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    
    
    const result = [];
    
    
    for(let i = 0; i<arr.length; i++) {
        const val = arr[i];
        
        const res = fn(val, i);
        
        if(res) result.push(val)
    }
    
    return result;
};