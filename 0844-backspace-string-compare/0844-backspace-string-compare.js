/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
 
    const bs = (str) => {  
        const arr = [];
        for(let val of str) (val === "#") ? 
            arr.pop() : 
            arr.push(val)
        
        return arr.join('')
    }
    
    return bs(s) === bs(t)
}