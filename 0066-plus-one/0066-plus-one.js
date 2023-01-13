/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   
    
    for(let i = digits.length-1; i>=0; i--) {
        
        const addOne = digits[i] + 1;
        
        if(addOne > 9) {
            digits[i] = 0
        }
        
        if(i === 0 && addOne > 9) {
            digits.unshift(1)
        }
        
        if(addOne < 10) {
            digits[i] = addOne;
            break
        }
    }
    
    return digits;
};