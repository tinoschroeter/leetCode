/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
      
    const result = [];
    let i = 0;
    
    while(i < arr.length) {
        const a = [];
        
        for(let j = 0; j<size; j++) {
            arr[i] != null && a.push(arr[i])
            i++
        }
        
        result.push(a);
    }
    
    return result;
};
