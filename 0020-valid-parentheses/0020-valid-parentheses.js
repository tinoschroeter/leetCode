/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = [];
    
    const map = { 
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    for(let i = 0; i<s.length; i++) {
        
        
        const val = s[i];
        
        if(map[val] && map[val] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(val);
        }
    }
    
    return stack.length === 0 ? true : false;
};