/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const result = [];
    
    temperatures.map((item, i) => result[i] = 0);
    
    for(let i = 0; i<temperatures.length; i++) {
        
        let l = i, r = i+1;
        
        while(r<temperatures.length) {
            if(temperatures[r] > temperatures[l]) {
                result[i] = r - l;
                break
            } else {
                r++
            }
        }
    }
    
    return result;
};