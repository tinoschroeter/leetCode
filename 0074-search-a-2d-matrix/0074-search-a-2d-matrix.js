/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    // 11
    // 1 3 5 7 10 11 16 20
    const arr = matrix.flat();
    
    let left = 0, right = arr.length - 1; 
    
    while(left <= right) {
        
        const mid = Math.round((left + right) / 2);
        
        if(arr[mid] === target) return true
        
        if(target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return false;
};