/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    const arr = matrix.flat();
    
    l = 0, r = arr.length -1
    
    while(l<=r) {
        const mid = Math.round((l + r) / 2);
        if(arr[mid] === target) return true;
        
        if(target < arr[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    return false;
};