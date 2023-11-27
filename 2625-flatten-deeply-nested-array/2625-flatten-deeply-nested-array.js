/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    
    const res = []
    
    const helper = (array, depth) => {
        
        for(let val of array) {
            
            if(Array.isArray(val) && depth < n) {
                helper(val, depth +1)
            } else {
                res.push(val)
            }
        }
        
        return res
    }
    
    return helper(arr, 0);
};