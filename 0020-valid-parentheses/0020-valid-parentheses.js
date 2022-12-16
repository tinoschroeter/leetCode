/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    
    const stack = [];
    
    const obj = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    for(let i = 0; i<s.length;i++) {
        const val = s[i];
        
        if(obj[val]) {
            const sVal = stack.pop();
            
            if(sVal !== obj[val]) return false;
                
        } else {
            stack.push(val);
        }
    }
    
    return stack.length === 0 ? true : false;
};