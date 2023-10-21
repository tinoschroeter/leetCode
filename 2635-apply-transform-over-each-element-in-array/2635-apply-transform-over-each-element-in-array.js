/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    
    const result = [];
    
    for(let i = 0; i<arr.length; i++) {
        const val = arr[i];
        
        result.push(fn(val, i));
    }
    
    return result;
};