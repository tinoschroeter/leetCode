/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if(n === 0) return false;
    if(n === 1) return true;
    
    while(n%2==0) n/=2;

    return n==1;
};