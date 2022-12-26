/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    
    
    let start = 0;
    let end = s1.length - 1;
    const sortS1 = s1.split('').sort().join('');
    
    
    while(end < s2.length) {
        
        const sub = s2.slice(start, end +1);
        if(sortS1 === sub.split('').sort().join('')) return true
        start++
        end++
    }
    
    return false
};