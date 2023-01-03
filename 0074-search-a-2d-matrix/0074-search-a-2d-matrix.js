/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    
    const flatMatrix = matrix.flat();
    
    
    let l = 0, r = flatMatrix.length -1;
    
    while(l<=r) {
        
        const mid = Math.round((l + r) /2);
        if(flatMatrix[mid] === target) return true;
        
        if(target < flatMatrix[mid]) {
            r = mid -1;
        } else {
            l = mid + 1;
        }
    }
    
    return false;
};