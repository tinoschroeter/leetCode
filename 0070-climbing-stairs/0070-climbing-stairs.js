/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  

    
    const mem = new Map();
    mem.set(0,0).set(1,1).set(2,2).set(3,3);
    
    
    let idx = 0;
    let sum = 0;
    
    while(idx <= n) {
        if(!mem.has(idx)) mem.set(idx,  mem.get(idx-1) + mem.get(idx-2));
        idx++
    }
    
    return mem.get(n);
};