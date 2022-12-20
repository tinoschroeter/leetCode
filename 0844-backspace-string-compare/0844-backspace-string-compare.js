/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    
    
    const stackS = [];
    const stackT = [];
    
    for(let val of s) {
        if(val !== "#") {
            stackS.push(val)
        } else {
            stackS.pop();
        }
    }
    
    for(let val of t) {
        if(val !== "#") {
            stackT.push(val)
        } else {
            stackT.pop();
        }
    }
    
    if(stackS.length !== stackT.length) return false
    
    for(let i = 0; i<stackS.length; i++) {
        
        if(stackS[i] === stackT[i]) {
            continue
        } else {
            return false
        }
    }
    
    return true
    
};