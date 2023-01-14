/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    const toString = str => {
        const arr = str.split('')
        const stack = [];
        
        for(let val of arr) {
            if(val !== '#') {
                stack.push(val)
            } else {
                stack.pop()
            }
        }
        
        return stack.join('')
    }
    
    if(toString(s) === toString(t)) {
        return true;
    } else {
        return false;
    }
};