/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
     
    const bs = (arr, t) => {
        let left = 0, right = arr.length -1;
        while(left <= right) {
            const mid = Math.round((left + right) /2);
            if(arr[mid] === t) return mid;
            if(t < arr[mid]) {
                right = mid -1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
    
    for(let arr of matrix) {
        if(bs(arr, target) >= 0) return true;
    }
    
    return false;
};