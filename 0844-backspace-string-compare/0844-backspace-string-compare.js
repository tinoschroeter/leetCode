/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    const backspace = str => {
        const stack = [];
        for(let val of str) {
            if(val === '#') {
                stack.pop()
            } else {
                stack.push(val)
            }
        }
        return stack.join('');
    }
    
    
  return backspace(s) === backspace(t);  
};