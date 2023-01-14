/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    
    const arr = grid.flat();
    
    let count = 0;
    arr.forEach(item => {
        if(item < 0) count++
    });
    
    return count;
};