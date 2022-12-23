/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const str = x.toString()
    let left = 0;
    let right = str.length -1;
    
    
    while(left<right) {
        
        if(str[left] === str[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    
    return true;
};