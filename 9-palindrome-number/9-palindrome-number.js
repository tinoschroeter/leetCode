/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {

    if(x < 0) return false;
    
     const number = x.toString().split('');

    let start = 0;
    let end = number.length - 1;       
    
    while(start < end) {
        if(number[start] === number[end]) {
            start++;
            end--
        } else {
            return false
        }
    }
    
    return true
};