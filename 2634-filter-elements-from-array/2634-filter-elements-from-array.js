/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   
   
    const result = [];
    
    
    for(let i = 0; i<arr.length; i++) {
        const val = arr[i];
        
        const filtering = fn(val, i);
        
        if(filtering) result.push(val);
    }
    
    return result;
};