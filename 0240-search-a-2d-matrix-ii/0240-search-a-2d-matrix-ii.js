/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
   

    const bs = arr => {
        let l = 0;
        let r = arr.length -1;
        
      while(l<=r) {
          const mid = Math.round((l + r) / 2);
          const val = arr[mid];
          
          if(val === target) {
              return true;
          }
          
          if(target > val) {
              l = mid + 1;
          } else {
              r = mid - 1;
          }
      } 
      
        return false;
    }
    
    
    for(let i = 0; i<matrix.length; i++) {
        
        if(bs(matrix[i])) return true
    }
    
    return false;
};