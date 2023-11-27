/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    
    const res = [];
    
    const helper = (arr, count) => {
        
        for(let val of arr) {
            
            if(Array.isArray(val) && count < n) {
                helper(val, count + 1)
            } else {
                res.push(val)
            }
        }
        
        return res
    }
    
    return helper(arr, 0);
};