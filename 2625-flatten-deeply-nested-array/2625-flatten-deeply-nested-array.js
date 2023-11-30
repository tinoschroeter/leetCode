/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
       const res = [];
    
    const helper = (a, count) => {
        
        for(let val of a) {
            if(Array.isArray(val) && count < n) {
                helper(val, count + 1);
            } else {
                res.push(val)
            }
        }
    }
    
    helper(arr, 0);
    return res; 
};