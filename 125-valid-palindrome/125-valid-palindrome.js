/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const newStr = s.replace(/[\W_]+/g,"").toLowerCase();
        
    let start = 0;
    let end = newStr.length - 1;
      
    while(start < end) {
        if(newStr[start] === newStr[end]) {
            start++;
            end--
        } else return false
    }
    
    return true;
};