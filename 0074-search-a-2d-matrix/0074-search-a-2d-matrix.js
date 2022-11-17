/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    
    const flatA = matrix.flat();
    
    
    let l = 0;
    let r = flatA.length - 1;
    
    
    while(l <= r) {
        
        const mid = Math.round((l + r) / 2);
        const val = flatA[mid];
        
        if(val === target) return true;
        
        if(val > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    return false;
};