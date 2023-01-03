/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
   
    
    
    const bs = (arr, t) => {
        
        let l = 0, r = arr.length -1;
        
        while(l<=r) {
            const mid = Math.round((l + r) /2);
            if(arr[mid] === t) return true
            t < arr[mid] ? r = mid -1 : l = mid + 1;
        }
        return false
    }
    
    
    for(let i = 0; i<matrix.length; i++) {
        if(bs(matrix[i], target)) return true
    }
    
    return false;
};