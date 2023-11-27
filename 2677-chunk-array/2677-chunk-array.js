/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    
    const result = [];
    let chunks = [];
    
    for(let i = 0; i<arr.length; i++) {
        chunks.push(arr[i]);
        
        if(chunks.length == size) {
            result.push(chunks);
            chunks = [];
        }   
    }
    
    if(chunks.length) result.push(chunks);
    
    return result;
};
