/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    const arr = matrix.flat()

    let left = 0;
    let right = arr.length -1;
    
    
    while(left <= right) {
        
        const mid = Math.round((right + left) /2);
        
        if(arr[mid] === target) return true;
        
        if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false
};