/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  
    const map = {};
    let count = 0;
    
    jewels.split("").forEach(item => map[item] = true);
    
    stones.split("").forEach(item => {
        if(map[item]) count++
    })
    
    return count;
};