/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 
    const plainStr = s.replace(/[^a-zA-Z0-9]/g, '');
    
    let idX = 0;
    let idY = plainStr.length - 1;
    
    
    while(idX <= idY) {
        
        const left = plainStr[idX].toLowerCase();
        const right = plainStr[idY].toLowerCase();
        
        if(left === right) {
            idX++
            idY--
        } else {
            return false;
        }
    }
    
    return true;
}