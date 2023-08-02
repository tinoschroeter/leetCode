/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    
    let max = 0;
    let tmp = 0;
    
    gain.forEach(item => {
        tmp += item;
        
        max = Math.max(tmp, max);
    })
    
    return max;
};