/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    
    let min = Math.min(a,b);
    let index = 1;
    let count = 0;
    
    while(index <= min) {
        
        if(a % index === 0 && b % index === 0) {
            count++
        }
        
        index++
    }
    
    return count;
};