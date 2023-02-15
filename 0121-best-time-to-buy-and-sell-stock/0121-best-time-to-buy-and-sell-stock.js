/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    
    let l = 0, r = 1;
    let max = 0
    
    while(r<prices.length) {
        
        const prof = prices[r] - prices[l];
        max = Math.max(max, prof);
        
        if(prof < 0) {
            l = r
        }
        r++
    }
    
    return max;
};