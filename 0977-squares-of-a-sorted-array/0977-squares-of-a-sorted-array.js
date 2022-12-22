/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    
    const squares = [];
    
    for(let val of nums) {
        const square = val * val;
        squares.push(square);
    }
    
    return squares.sort((a,b)=>a-b);
};