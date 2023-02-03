/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    const back = val => {
        const stack = [];
        
        val.split('').forEach(item => {
            if(item !== '#') {
                stack.push(item);
            } else {
                stack.pop();
            }
        })
        
        return stack.join('');
    }
    
    
    return back(s) === back(t);
};