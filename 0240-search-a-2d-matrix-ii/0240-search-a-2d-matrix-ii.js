/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
     
    const bs = (arr) => {
        
        let l = 0;
        let r = arr.length -1;
        
        while(l<=r) {
            const mid = Math.round((l + r) / 2)
            
            if(arr[mid] === target) return true
            
            if(arr[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    
    
    for(let val of matrix) {
        if(bs(val)) return true
    }
    
    return false;
};