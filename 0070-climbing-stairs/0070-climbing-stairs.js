/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    const mem = {
        1: 1,
        2: 2,
        3: 3
    }
    
    const rec = (val) => {
        if(mem[val]) return mem[val];
        return mem[val] = rec(val-2) + rec(val-1);
    }
    
    return rec(n)
};